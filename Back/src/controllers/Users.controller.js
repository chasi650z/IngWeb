const userCrtl = {}
const User = require ('../models/User')



userCrtl.getUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}
userCrtl.AddUser = (req, res) => {
    res.send('add USER prueba')
}

userCrtl.DeleteUsers = (req, res) => {
    res.send('delete USER prueba')
}
userCrtl.getUser = (req, res) => {
    res.send('get USER prueba')
}
userCrtl.UpdateUser = (req, res) => {
    res.send('get USER prueba')
}

module.exports = userCrtl;