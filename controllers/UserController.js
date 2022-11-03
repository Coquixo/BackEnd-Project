const User = require('../models/users')

const UserController = {};


//Get all Users
UserController.getUsers = async (req, res) => {
    User.findAll()
        .then(resp => {
            res.send(resp);
        });
}


//Create new User

UserController.registerUser = async (req, res) => {

    try {

        let data = req.body;
        let resp = await User.create({
            id_user: data.id_user,
            name_user: data.name_user,
            surname_user: data.surname_user,
            is_admin: data.is_admin

        });

        res.send({
            resp: resp,
            message: 'User created successfully'
        })

    } catch (error) {
        res.send(error)
    }

}

//Update existing User

UserController.updateUser = async (req, res) => {


    try {

        let data = req.body;
        let resp = await User.update({


            name_user: data.name_user,
            surname_user: data.surname_user,
            is_admin: data.is_admin
        }, {
            where: { id_user: data.id_user }

        });
        res.send({
            resp: resp,
            message: 'User updated successfully.'
        })

    } catch (error) {
        res.send(error);
    }
};

UserController.deleteUser = async (req, res) => {

    try {

        let data = req.params;
        let resp = await User.destroy({
            where: { id_user: data.id_user }
        })
        console.log(resp);
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