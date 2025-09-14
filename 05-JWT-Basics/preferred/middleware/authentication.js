const jwt = require("jsonwebtoken")


const authenticationMiddleware = async (req, res, next) => {
    const headerAuth = req.headers.authorization
    console.log(headerAuth)

    if (!headerAuth || !headerAuth.startsWith("Bearer ")) {
        res.status(401).json({msg: "unauthorized"})
    }

    console.log(headerAuth)

    const token = headerAuth.split(" ")[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { name } = decoded
        req.user = { name }
        next()
    } catch (error) {
        res.status(401).json({msg: "Not valid token"})
    }
}

module.exports = authenticationMiddleware