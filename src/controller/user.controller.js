import Users from "../models/users";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import config from "../config/configapp";

export const createNewUser = async(req, res) => {
    try {
        var passwordHash = await bcrypt.hash(req.body.Password, 10);

        var newUser = new Users({
            Username: req.body.Username,
            Password: passwordHash,
        });

        var user = await newUser.save();

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const getAllUsers = async(req, res) => {
    try {
        var users = await Users.find();

        if (users.length == 0)
            return res.status(404).json({ message: "not found users" });

        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const loginUser = async(req, res) => {
    try {
        var user = await Users.findOne({ Username: req.body.Username });

        if (!user)
            return res.status(404).json({ message: "Authentication failed" });

        let verify = await bcrypt.compare(req.body.Password, user.Password);

        if (verify) {
            let token = jwt.sign({
                    user,
                },
                config.auth_secret, { expiresIn: "24h" }
            );

            res.json({
                auth: true,
                toke: token,
            });
        } else {
            res.status(400).json({ message: "Authentication failed" });
        }
    } catch (error) {
        res.status(500).json({ message: "Authentication failed" });
    }
};