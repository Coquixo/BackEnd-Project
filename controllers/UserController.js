const User = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');


const UserController = {};

const generateToken = (user) => {
    return jwt.sign({ user_email: user.user_email }, authConfig.secret, {
        expiresIn: authConfig.expires
    })
}

//Get All Users

UserController.getUsers = async (req, res) => {
    try {
        User.findAll()
            .then(resp => {
                res.send(resp);
            });
    } catch (error) {
        res.send(error);
    }
}

//Get User By Id

UserController.getUserById = async (req, res) => {
    try {
        let id_user = req.params.id_user;
        User.findByPk(id_user)
            .then(resp => {
                res.send(resp);
            });

    } catch (error) {
        res.send(error);
    }
}

//Register A New User

UserController.registerUser = async (req, res) => {
    try {
        let data = req.body;
        let password = bcrypt.hashSync(data.user_password, Number.parseInt(authConfig.rounds || 10));
        let user = await User.create({
            user_email: data.user_email,
            user_password: password,
            name_user: data.name_user,
            surname_user: data.surname_user,
            is_admin: data.is_admin

        })

        res.send({
            resp: {
                user: data.user_email,
                token: generateToken(user)
            },
            message: 'User created successfully'
        });

    } catch (error) {
        res.send(error)
    }

}

//Login User

UserController.loginUser = async (req, res) => {

    try {
        let data = req.body
        const user = await User.findOne({ where: { user_email: data.user_email } })
        const validPassword = await bcrypt.compareSync(data.user_password, user.user_password)
        if (!validPassword) {
            throw new Error("Invalid username or password")
        }
        res.send({
            resp: {
                user: data.user_email,
                token: generateToken(user)
            },
            message: 'User logged successfully'
        });
    }

    catch (error) {
        res.status(401).send({
            message: "Invalid email/password"
        });
    }

}

//Update Existing User

UserController.updateUser = async (req, res) => {


    try {

        let data = req.body;
        if (data.user_password) {   
            data.user_password = bcrypt.hashSync(data.user_password, Number.parseInt(authConfig.rounds || 10));
        }

        let user = await User.update(data, {
            where: { id_user: req.params.id_user }

        });
        res.send({
            token: generateToken(user),
            message: 'User updated successfully.'
        })

    } catch (error) {
        res.send(error);
    }
};

//Delete A User by Id

UserController.deleteUser = async (req, res) => {

    try {

        let data = req.params;
        let resp = await User.destroy({
            where: { id_user: data.id_user }
        })
        if (resp == 1) {
            res.send('User has been deleted');
        } else {
            res.send("User hasn't been deleted");
        }

    } catch (error) {
        res.send(error);
    }

}

module.exports = UserController;