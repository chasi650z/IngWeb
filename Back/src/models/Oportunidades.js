const {Schema , model} = require ('mongoose')

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
    numberUsers: {type: String, required: true}, 

    /* Opcional o dependiendo */
    whichProducts: {type: String, required: true},
    usesCases: {type: String, required: true},

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
    }
  }]

}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Oportunidades', oportunidadSchema);