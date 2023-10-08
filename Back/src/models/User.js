const {Schema, model} = require ('mongoose')

const userSchema = new Schema ({

    id: {type: Number, required: true},
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    country: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}

}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('User', userSchema);