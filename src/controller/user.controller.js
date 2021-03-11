import Users from "../models/users";

import * as jwt from "jsonwebtoken";


export const createNewUser = async(req, res) => {
    try {

        var newUser = new Users({ Username: req.body.Username, Password: req.body.Password });

        var user = newUser.save();

        res.json(user);

    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const getAllUsers = async(req, res) => {
    try {

        var users = await Users.find();

        if (users.length == 0)
            return res
                .status(404)
                .json({ message: 'not found users' });

        res.json(users);

    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const loginUser = async(req, res) => {
    try {

        var user = await Users.findOne({ Username: req.body.Username, Password: req.body.Password });

        if (!user)
            return res
                .status(404)
                .json({ message: 'not found user: ' + req.body.Username });


        let token = jwt.sign({
            user
        }, 'gedgonz', { expiresIn: '24h' });

        res.json({
            auth: true,
            toke: token
        });

    } catch (error) {
        res.status(500).json({ message: 'error:' + error });
    }
};