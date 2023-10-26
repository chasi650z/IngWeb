const {Schema , model} = require ('mongoose')

const adminSchema = new Schema ({
    role: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('admin', adminSchemaSchema);