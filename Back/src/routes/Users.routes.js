const { Router } = require ('express')
const Userrouter = Router()


const userCrt = require('../controllers/Users.controller.js')


Userrouter.get('/Users',userCrt.getUsers);
Userrouter.post('/AddUser',userCrt.AddUser);
Userrouter.get('/UserProfile/:id',userCrt.getUser);
Userrouter.put('/UserProfile/:id',userCrt.UpdateUser);
Userrouter.delete('/UserProfile/:id',userCrt.DeleteUsers);
Userrouter.get('/SearchUserProfile/:email/:password',userCrt.findUserByCredentials);


module.exports = Userrouter