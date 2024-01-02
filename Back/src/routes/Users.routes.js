const { Router } = require ('express')
const Userrouter = Router()


const userCrt = require('../controllers/Users.controller.js')


Userrouter.get('/Users',userCrt.getUsers);
Userrouter.post('/AddUser',userCrt.AddUser);
Userrouter.get('/UserProfile/:id',userCrt.getUser);
Userrouter.put('/UserProfile/:id',userCrt.UpdateUser);
Userrouter.delete('/UserProfile/:id',userCrt.DeleteUsers);
Userrouter.get('/SearchUserProfileC/:email/:password',userCrt.findUserByCredentials);

Userrouter.get('/SearchUserProfileN', userCrt.findUserByNameLastname);
Userrouter.get('/SearchUserProfileAdmin', userCrt.Search);

module.exports = Userrouter