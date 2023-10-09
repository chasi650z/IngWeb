const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/IngWeb',{
    useUnifiedTopology:true,
    useNewUrlParser: true}
)
.then(db => console.log('db connected'))
.catch(err => console.error(err));


