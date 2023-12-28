const { Router } = require ('express')
const CProuter = Router()


const CPCrtl = require('../controllers/Company.controller.js')


CProuter.get('/:company/Users/',CPCrtl.optenerUsers);
CProuter.get('/:company/User/:id/OportunityALL',CPCrtl.optenerUserID);
CProuter.get('/:company/OportunityALL',CPCrtl.getOportComp);
CProuter.get('/:company/User/:id/OportunityALL',CPCrtl.getOportUserID);
CProuter.post('/:company/User/:email/Oportunity',CPCrtl.optenerUseremail);

CProuter.get('/:company/PromOport',CPCrtl.promedioNotasEmpleado);
CProuter.get('/:company/NotesOport',CPCrtl.obtenerNotasDeOportunidades);

module.exports = CProuter