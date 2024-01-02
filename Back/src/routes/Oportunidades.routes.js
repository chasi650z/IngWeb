const { Router } = require ('express')
const Oprouter = Router()


const opCrtl = require('../controllers/Oportunidades.controller.js')


Oprouter.get('/Admin/OportunityALL',opCrtl.getOportunidades);


Oprouter.get('/User/:id/OportunityUser',opCrtl.getOportunidadesUser);
Oprouter.post('/User/Oportunities',opCrtl.AddOP);

Oprouter.get('/User/Oportunity/:estado',opCrtl.getOportunidadesPorEstado);

Oprouter.get('/Admin/Oportunity/:idOportunidad',opCrtl.getOportunidadPorID);

Oprouter.put('/User/Oportunity/',opCrtl.UpdatOP);
Oprouter.delete('/User/OportunityDelete/:idOp',opCrtl.DeleteOportunidades);

Oprouter.put('/Admin/Oportunity/Evidence/:id/actualizar-calificacion',opCrtl.updateEvidence);

module.exports = Oprouter