const User = require("../models/users");


const authFunctions = {};

// authFunctions.assertValidPassword = (pass) => {

//     if (pass.length < 8) {
//         throw new Error("Password must be at least 8 characters long")
//     }
//     if (!pass.match(/[a-z]/)) {
//         throw new Error("Password must have at least one lower case letter");
//     }
//     if (!pass.match(/[A-Z]/)) {
//         throw new Error("Password must have at least one upper case letter");
//     }
//     if (!pass.match(/[0-9]/)) {
//         throw new Error("Password must have at least one number");
//     }
// }

//Auth ID_User Already Exists?

// authFunctions.assertId_UserIsUnique = async (id_user) => {
//     const id_user = await User.findOne({ id_user: id_user });
//     if (id_user) {
//         res.send(("User alread exists")
//     }
// }

//Auth is admin

authFunctions.assertIsAdmin = async (req, res, next) => {
    try {
        let authorization = req.headers.authorization;
        const token = authorization.substring(7, authorization.lenght)

        function parseJwt(token) {
            return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
        }
        const currentEmail = parseJwt(token).user_email

        const user = await User.findOne({ where: { user_email: currentEmail } });
        if (!user.is_admin) {
            res.status(401).send({
                "error": "You have no permission to do that"
            })
            return;
        }
        next()
    } catch {
        res.status(403).send({
            "error": "Authentification needed"
        })
    }

}

authFunctions.authLoginController = async (req, res, next) => {

}



module.exports = authFunctions;

