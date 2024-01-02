const {Schema , model} = require ('mongoose')

const userSchema = new Schema ({
    name: {type: String, required: true},
    role: {type: String, required: true},
    lastname: {type: String, required: true},
    country: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    companyName: {type: String, required: true},
    points: {type: Number, required: false},
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('User', userSchema);