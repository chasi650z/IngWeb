const {Schema , model} = require ('mongoose')

const StatusEnum = {
  Registrado: 'Registrado',
  Fase1: 'Fase 1',
  Fase2: 'Fase 2',
  Cierre: 'Cierre',
  Fallido: 'Fallido'
};

const oportunidadSchema = new Schema ({

    /*  End User Company  Information */ 
    companyName: {type: String, required: true},
    country: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    postalCode: {type: String, required: true},

    /*  End User Contact Information */ 
    clientName: {type: String, required: true},
    clientLastName: {type: String, required: true},
    title: {type: String, required: true},
    phone: {type: String, required: true},
    
    /* Opportunity Information  */ 
    expectedCoseDate: {type: String, required: true},
    currency: {type: String, required: true},
    CompetitorbeingEvaluated: {type: String, required: true},
    projectDescripcion: {type: String, required: true},
    numberLicense: {type: String, required: true}, 
    products: {type: String, required: true},
    status: {
      type: String,
      enum: Object.values(StatusEnum),
      default: StatusEnum.Registrado},


    Evidence: [{
    nombre: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    feedback: {
      type: String,
      required: true
    },
    fechaCreacion: {
      type: Date,
      default: Date.now
    }
  }]

}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Oportunidades', oportunidadSchema);