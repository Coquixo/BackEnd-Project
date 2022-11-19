const User = require('../models/users')

const authFunctions = {}

const assertValidPassword = (pass) => {

    if (pass.length < 8) {
        throw new Error("Password must be at least 8 characters long");
    }
    // validate it has one lower case letter
    if (!pass.match(/[a-z]/)) {
        throw new Error("Password must contain at least one lower case letter");
    }
    // validate it has one upper case letter
    if (!pass.match(/[A-Z]/)) {
        throw new Error("Password must contain at least one upper case letter")
    }
    // validate it has one number
    if (!pass.match(/[0-9]/)) {
        throw new Error("Password must contain at least one number")
    }

}

const assertEmailIsValid = (mail) => {
    // must validate a valid email
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return emailRegex.test(email);
    const isValid = mail.match(emailRegex);
    if (!isValid) {
        throw new Error("Email is invalid")
    }
}

const assertEmailIsUnique = async (mail) => {

    // validate email is unique
    const user = await User.findOne({
        where: { user_email: mail }
    });
    if (user) {
        throw new Error("Email is already registered")
    }
}

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
    } catch {
        res.status(403).send({
            "error": "Authentification needed"
        })
    }

    next()
}
authFunctions.authRegisterController = async (req, res, next) => {

    const data = req.body;
    //validate password
    try {
        await assertValidPassword(data.user_password)
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Invalid password: " + error.message });
        return;
    }
    // validate email is valid
    try {
        await assertEmailIsValid(data.user_email);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Email is invalid: " + error.message });
        return;
    }
    // validate email is unique
    try {
        await assertEmailIsUnique(data.user_email);
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: "Email is already registered: "
        });
        return;
    }

    next();
}



module.exports = authFunctions;

