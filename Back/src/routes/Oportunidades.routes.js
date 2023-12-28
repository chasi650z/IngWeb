const { Router } = require ('express')
const Oprouter = Router()


const opCrtl = require('../controllers/Oportunidades.controller.js')


Oprouter.get('/User/:id/OportunityALL',opCrtl.getOportunidades);
Oprouter.post('/User/:id/Oportunity',opCrtl.AddOP);
Oprouter.get('/User/:id/Oportunity/:estado',opCrtl.getOportunidadesPorEstado);
Oprouter.get('/User/:id/Oportunity/:idOp',opCrtl.getOportunidad);
Oprouter.put('/User/:id/Oportunity/:idOp',opCrtl.UpdatOP);
Oprouter.delete('/User/:id/Oportunity/:idOp',opCrtl.DeleteOportunidades);

module.exports = Oprouter