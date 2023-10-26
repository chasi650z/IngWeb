const userCrtl = {}

const Oports = require ('../models/Oportunidades')

userCrtl.getOportunidades = async (req, res) => {
    const oport = await Oports.find()
    res.json(oport)
}