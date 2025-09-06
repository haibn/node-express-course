
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    const {username, password} = req.body

    if (!username || !password) {
        res.status(400).json({msg: "Please provide a username and password"})
    }

    const id = new Date().getDate()
    const secret = process.env.JWT_SECRET
    const token = jwt.sign({id, username}, secret, {expiresIn: "30d", })

    res.status(200).json({token, msg: "User created"})
}

const message = async (req, res) => {
    const headerAuth = req.headers.authorization
    console.log(headerAuth)

    if (!headerAuth || !headerAuth.startsWith("Bearer ")) {
        res.status(401).json({msg: "No token provided"})
    }

    console.log(headerAuth)

    const token = headerAuth.split(" ")[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        res.status(200).json(decoded)
    } catch (error) {
        res.status(401).json({msg: "Not valid token"})
    }
}

module.exports = {
    login,
    message
}