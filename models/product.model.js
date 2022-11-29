const { model, Schema } = require('mongoose');

const productSchema = new Schema({
    name: String,

    //string con mayuscula que mongose se utilizan asi(String Number Buffer Boolean Mixed ObjectId Array Decimal Map Schema(relaciones entre dos))
    description: String,
    category: String,
    price: Number,
    available: Boolean,
    stock: Number,
    image: String

});

module.exports = model('product', productSchema);//se relacionan estos dos mejor en ingles para no tener problemas con el singular o plural