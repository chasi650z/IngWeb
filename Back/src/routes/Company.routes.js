const { Router } = require ('express')
const CProuter = Router()


const CPCrtl = require('../controllers/Company.controller.js')

CProuter.post('/Company/AddUser',CPCrtl.AddUser);

CProuter.get('/:company/Users',CPCrtl.optenerUsers);
CProuter.get('/:company/User/:id/OportunityALL',CPCrtl.optenerUserID);
CProuter.get('/:company/OportunityALL',CPCrtl.getOportComp);
CProuter.get('/:company/User/:id/OportunityALL',CPCrtl.getOportUserID);

CProuter.get('/Company/:email/:password',CPCrtl.optenerUseremail);

CProuter.get('/:company/PromOport',CPCrtl.promedioNotasEmpleado);
CProuter.get('/:company/NotesOport',CPCrtl.obtenerNotasDeOportunidades);
CProuter.get('/:company/Profits',CPCrtl.Profits);
CProuter.get('/:company/ProfitsDate',CPCrtl.ProfitsDate);

module.exports = CProuter