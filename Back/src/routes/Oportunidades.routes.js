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

Oprouter.post('/Admin/Oportunity/:id/add-evidence',opCrtl.addEvidence);

Oprouter.get('/Admin/Reporte',opCrtl.ProfitsTotal);
Oprouter.get('/Admin/ReporteAverage',opCrtl.AverageNotesPerEmployee);

module.exports = Oprouter