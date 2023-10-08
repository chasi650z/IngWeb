const { Router } = require ('express')
const router = Router()


const userCrt = require('../controllers/Users.controller.js')


router.get('/Users',userCrt.getUsers);
router.post('/AddUser',userCrt.AddUser);
router.get('/UserProfile/:id',userCrt.getUser);
router.put('/UserProfile/:id',userCrt.UpdateUser);
router.delete('/UserProfile/:id',userCrt.DeleteUsers);


module.exports = router 