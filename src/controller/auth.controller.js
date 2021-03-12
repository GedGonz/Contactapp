import * as jwt from "jsonwebtoken";
import config from "../config/configapp";
export const authenticateToken = async(req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) return res.sendStatus(401);

        jwt.verify(token, config.auth_secret, (error, user) => {
            if (error)
                return res
                    .status(505)
                    .send({ auth: false, message: "Failed to authenticate token" });

            req.user = user;
            next();
        });
    } catch (error) {
        res.status(500).json({ message: "Authentication failed" });
    }
};