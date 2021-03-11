import Users from "../models/users";

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
                .status(400)
                .json({ message: 'not found users' });

    } catch (error) {
        res.status(500).json({ message: error });
    }
};