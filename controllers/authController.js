const User = require("../models/users");


const authFunctions = {};

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

