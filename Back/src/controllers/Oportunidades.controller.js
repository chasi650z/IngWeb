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

opCrtl.getOportunidadesUser = async (req, res) =>{
    const oport = await Oports.find({IDEmpleado: req.params.id})
    res.json(oport)
}

opCrtl.DeleteOportunidades = async (req, res) => {

    const Oport = await Oports.findByIdAndDelete(req.params.idOp)
    res.send({message: 'oportunidad deleted'})

}

opCrtl.UpdatOP = async (req, res) => {
  const oportunidad  = await Oports.findByIdAndUpdate(req.params.id , req.body)
  res.send({message: 'User Updated'})
}


opCrtl.getOportunidadPorID = async (req, res) => {
  try {
      const idOportunidad = req.params.idOportunidad;
      const oportunidad = await Oports.findById(idOportunidad);

      if (!oportunidad) {
          return res.status(404).json({ message: 'Oportunidad no encontrada' });
      }

      res.json(oportunidad);
  } catch (error) {
      console.error('Error al buscar la oportunidad por ID:', error);
      res.status(500).json({ message: 'Error del servidor' });
  }
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

  opCrtl.updateEvidence = async (req, res) => {
    const { id: evidenceId } = req.params; // Obtener el ID de la evidencia de los parámetros de la solicitud
    const { note, feedback } = req.body; // Obtener la nueva nota y feedback de la solicitud
    console.log(note);
    console.log(feedback);
    try {
      // Buscar la oportunidad que contiene la evidencia
      const oportunidad = await Oports.findOne({ 'Evidence._id': evidenceId });
      if (!oportunidad) {
        return res.status(404).json({ message: 'Oportunidad no encontrada' });
      }
  
      // Encontrar y actualizar la evidencia específica
      const evidencia = oportunidad.Evidence.id(evidenceId);
      if (!evidencia) {
        return res.status(404).json({ message: 'Evidencia no encontrada' });
      }
  
      // Actualizar la nota y el feedback
      evidencia.note = note;
      evidencia.feedback = feedback;
  
      // Guardar los cambios
      await oportunidad.save();
  
      res.status(200).json({ message: 'Calificación de evidencia actualizada con éxito', evidencia });
    } catch (error) {
      console.error('Error al actualizar la calificación de evidencia:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
  
  
  

  module.exports = opCrtl;
