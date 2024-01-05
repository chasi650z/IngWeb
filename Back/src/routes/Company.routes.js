const { Router } = require ('express')
const CProuter = Router()


const CPCrtl = require('../controllers/Company.controller.js')

CProuter.post('/Company/AddUser',CPCrtl.AddUser);

CProuter.get('/:company/Users',CPCrtl.optenerUsers);
CProuter.get('/:company/User/:id/OportunityALL',CPCrtl.optenerUserID);
CProuter.get('/:company/OportunityALL',CPCrtl.getOportComp);


CProuter.get('/Company/:email/:password',CPCrtl.optenerUseremail);

CProuter.get('/:company/PromOport',CPCrtl.promedioNotasEmpleado);
CProuter.get('/:company/NotesOport',CPCrtl.obtenerNotasDeOportunidades);

CProuter.get('/:company/UserNotesOport/:id',CPCrtl.UserNotas);
CProuter.get('/:company/TotalProfit',CPCrtl.ProfitsTotal);

CProuter.get('/:company/Profits',CPCrtl.Profits);
CProuter.get('/:company/ProfitsDate/:startDate/:endDate',CPCrtl.ProfitsDate);

module.exports = CProuter