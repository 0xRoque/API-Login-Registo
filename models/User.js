//Class USER
/*
    Isto dá acesso a metodos e propriedades da classe
    Mongoose vai pegar no User e colocar na collection(40.33)
 */

const mongoose = require("mongoose")

const User = mongoose.model("User",{

    name: String,
    email: String,
    password: String
})

module.exports = User