var mongoose = require('mongoose')

mongoose.connect(process.env.URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log('DB Connected!!!!'))
.catch(err => {
    console.log('Error Connected');
    console.log(err.message);
});


module.exports = mongoose
