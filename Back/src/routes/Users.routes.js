const { Router } = require ('express')
const router = Router()


const userCrt = require('../controllers/Users.controller.js')


router.get('/Users',userCrt.getUsers);
router.get('/AddUsers',userCrt.AddUsers);
router.get('/UserProfile/:id',userCrt.getUser);
router.get('/UserProfile/:id',userCrt.UpdateUser);
router.get('/UserProfile/:id',userCrt.DeleteUsers);


module.exports = router 