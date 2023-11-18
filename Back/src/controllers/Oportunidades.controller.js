const opCrtl = {}

const Oports = require ('../models/Oportunidades')

opCrtl.getOportunidades = async (req, res) => {
    const oport = await Oports.find()
    res.json(oport)
}

userCrtl.DeleteOportunidades = async (req, res) => {

    const user = await Oports.findByIdAndDelete(req.params.id)
    res.send({message: 'User deleted'})

}

userCrtl.getOportunidad= async (req, res) => {

    const Oport = await Oports.findById(req.params.id)
    res.send(Oport)
    
}

opCrtl.getOportunidadesPorEstado = async (req, res) => {
    const estado = req.params.estado;
    try {
      const oportPorEstado = await Oports.find({ status: estado });
      res.json(oportPorEstado);
    } catch (error) {
      console.error(error);
    }
  };

