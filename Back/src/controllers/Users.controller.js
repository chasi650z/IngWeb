const userCrtl = {}

const User = require ('../models/User')

userCrtl.getUsers = async (req, res) => {

    const users = await User.find()
    res.json(users)

}

userCrtl.AddUser = async (req, res) => {
    const newUser = new User(req.body)
    console.log(req.body);
    await newUser.save()
    res.send({ message: 'New User Created' });
}

userCrtl.DeleteUsers = async (req, res) => {

    const user = await User.findByIdAndDelete(req.params.id)
    res.send({message: 'User deleted'})

}

userCrtl.getUser = async (req, res) => {

    const user = await User.findById(req.params.id)
    res.send(user)
    
}

userCrtl.UpdateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id , req.body)
    res.send({message: 'User Updated'})
}

userCrtl.findUserByCredentials = async (req, res) => {
    const password = req.params.password;
    const email = req.params.email;
    try {
      const user = await User.findOne({ email, password });
      if (user) {
        res.json(user); 
      } else {
        res.json(false);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en el servidor' }); // Error del servidor
    }
  };
  
  
module.exports = userCrtl;