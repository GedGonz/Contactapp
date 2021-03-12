import express from "express";
import path from "path";
import * as UserController from "./controller/user.controller";
import IndexRouter from "./routes/contact.routes";
import UserRoute from "./routes/user.routes";
import cors from "cors";
import multer from "multer";
import * as auth from "./controller/auth.controller";

const app = express();
//settings
const PORT = process.env.PORT || 5000;
app.set("port", PORT);

//middlewaras
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//create distination with multer
const storage = multer.diskStorage({
    destination: path.join(__dirname, "public/uploads"),
    filename: (re, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    },
});
//send destinatios to multer
app.use(multer({ storage }).single("picture"));

//routes
app.get("/", (req, res) => {
    res.json({ message: "Welcome to ContactApp" });
});

app.use("/api/contact", auth.authenticateToken, IndexRouter);

app.use("/api/user", UserRoute);

app.use("/api/login", UserController.loginUser);

app.use("/api/Auth", UserController.loginUser);

export default app;