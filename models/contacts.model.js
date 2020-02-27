var mongooseClient = require('./../db/db')

module.exports = function () {
    var contact = mongooseClient.Schema({
        nome: String,
        idade: Number,
    })

    return mongooseClient.model('contacts', contact)
}