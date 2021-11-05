const mongoose = require("mongoose");

const pessoasModel = new mongoose.Schema({
  nome: { type: String, required: true },
  nick: { type: String, required: true },
  senha: { type: String, required: true },
  ultimoAcesso: { type: String },
  dataCriacao: { type: Date, default: Date.now },
});

const Pessoa = mongoose.model("Pessoas", pessoasModel);

module.exports = Pessoa;
