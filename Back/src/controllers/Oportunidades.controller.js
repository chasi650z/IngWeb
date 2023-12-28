const opCrtl = {}

const Oports = require ('../models/Oportunidades')

opCrtl.AddOP = async (req, res) => {
  const newOP = new Oports(req.body)
  newOP.IDEmpleado = req.params.id
  if (newOP.Descuento !== 0){
    const desc = newOP.Descuento / 100 ;
    newOP.TotalProfit = (newOP.price - (newOP.price * desc ));
  } else {
    newOP.TotalProfit = newOP.price ;
  }
  await newOP.save()
  res.send({ message: 'New Oportunity Created' });
}

opCrtl.getOportunidades = async (req, res) => {
    const oport = await Oports.find()
    res.json(oport)
}

opCrtl.DeleteOportunidades = async (req, res) => {

    const Oport = await Oports.findByIdAndDelete(req.params.id)
    res.send({message: 'User deleted'})

}

opCrtl.UpdatOP = async (req, res) => {
  const oportunidad  = await Oports.findByIdAndUpdate(req.params.id , req.body)
  res.send({message: 'User Updated'})
}


opCrtl.getOportunidad= async (req, res) => {

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

  module.exports = opCrtl;
