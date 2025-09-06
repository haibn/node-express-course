
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    const {name, password} = req.body

    if (!name || !password) {
        res.status(400).json({msg: "Please provide a name and password"})
    }

    const secret = process.env.JWT_SECRET
    const token = jwt.sign({ name }, secret, {expiresIn: "24h", })

    res.status(200).json({token: token})
}

const message = async (req, res) => {
    res.status(200).json({message: `Hello ${req.user.name}!`})
}

module.exports = {
    login,
    message
}