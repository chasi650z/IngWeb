const {Schema , model} = require ('mongoose')

const userSchema = new Schema ({

name: {type: String, required: true},
RUC: {type: String, required: true},
Direccion: {type: String, required: true},
Identify:{type: String, required: true},
password:{type: String, required: true},

})

module.exports = model('Company', userSchema);