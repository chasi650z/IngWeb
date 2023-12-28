const User = require ('../models/User')
const Oports = require ('../models/Oportunidades')
const Comp = require ('../models/Oportunidades')

userCrtl.AddCompany = async (req, res) => {
    const newCompany = new Comp(req.body)
    console.log(req.body);
    await newUser.save()
    res.send({ message: 'New User Created' });
}



