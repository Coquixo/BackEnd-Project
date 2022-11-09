module.exports = {
    secret: process.env.AUTH_SECRET || "thatsnotmycar",
    expires: process.env.AUTH_EXPIRES,
    rounds: process.env.AUTH_ROUNDS || 10
}