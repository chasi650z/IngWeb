const {Schema , model} = require ('mongoose')

const StatusEnum = ['Registrado', 'Fase1', 'Fase2', 'Cierre', 'Fallido'];

const oportunidadSchema = new Schema ({

    IDEmpleado:{type: String, required: true},

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
    expectedCoseDate: {type: Date, required: true},
    CreationDate: {type: Date,
                    default: () => startOfDay(new Date()),
                    required: true},
    currency: {type: String, required: true},
    projectDescripcion: {type: String, required: true},
    numberLicense: {type: Number, required: true}, 
    products: {type: String, required: true},
    price: {type: Number , required: true},
    Descuento: {type: Number ,required: true},
    TotalProfit: {type: Number , default: 0, required: true},
    
    status: {
      type: String,
      enum: StatusEnum,
      default: 'Registrado',
      required: true,
    },

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
          default: "",
          required: true
        },
        fechaCreacion: {
          type: Date,
          default: Date.now
        },
        note: { type: Number, 
                min: 0,
                max: 5,
                default: 0,
                required: true },
        isRequire: { type: Boolean, required: false }
      }]
      
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Oportunidades', oportunidadSchema);