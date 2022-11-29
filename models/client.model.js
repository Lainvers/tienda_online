const { model, Schema } = require('mongoose');

const clientSchema = new Schema({
    name: String,
    email: String,
    address: String,
    age: Number,
    active: Boolean,
    products: [{// marcar relacion uno---- n haciendolo con un array
        type: Schema.Types.ObjectId, ref: 'product'
    }]
});
module.exports = model('client', clientSchema);

//GET/api/client/IDCLIENT/product/IDPRODUCT