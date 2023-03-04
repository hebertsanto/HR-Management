const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
    cpf:{
        type: 'string',
        required: true
    }
})

module.exports = mongoose.model('Document', DocumentSchema);