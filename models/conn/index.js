const mongoose = require("mongoose");

async function Conn() {
  await mongoose
    .connect("mongodb://localhost:27017/DesafioTecnico1", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Conected...");
    })
    .catch(() => {
      console.log("error");
    });
}

module.exports = Conn;
