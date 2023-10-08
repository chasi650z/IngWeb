


const userCrtl = {}

userCrtl.getUsers = (req, res) => {
    res.send('get USERSSSSSS prueba')
}
userCrtl.AddUsers = (req, res) => {
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