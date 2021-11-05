const express = require("express");
const router = express.Router();
const Pessoa = require("./../models/pessoas");

router.get("/", (req, res) => {
  res.status(200).json({ message: "Rota ok" });
});

router.get("/listar", async (req, res) => {
  await Pessoa.find({})
    .then((pessoas) => {
      res.status(200).json(pessoas);
    })
    .catch((err) => {
      res.status(400).json({ message: "Nada encontrado..." });
      console.error(err);
    });
});

router.get("/lista/:nome", async (req, res) => {
  await Pessoa.findOne({ nome: req.params.nome })
    .then((pessoa) => {
      console.log(pessoa);
      res.status(200).json(pessoa);
    })
    .catch((err) => {
      res.status(400).json({ message: "Pessoa não encontrada." });
      console.error(err);
    });
});

router.get("/list/:id", async (req, res) => {
  if (req.params.id.length == 24) {
    await Pessoa.findOne({ _id: req.params.id })
      .then((pessoa) => {
        console.log(pessoa);
        res.status(200).json(pessoa);
      })
      .catch((err) => {
        res.status(400).json({ message: "Pessoa não encontrada." });
        console.error(err);
      });
  }
  res.status(400).json({ message: "Pessoa não encontrada." });
});

router.post("/inserir", async (req, res) => {
  await Pessoa.create(req.body)
    .then(() => {
      res.status(200).json({ message: "Usuário cadastrado." });
    })
    .catch((err) => {
      res.status(400).json({ message: "ERROR." });
      console.error(err);
    });
});

router.put("/editar/:id", async (req, res) => {
  if (req.params.id.length == 24) {
    await Pessoa.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.status(200).json({ message: `Usuário alterado com sucesso.` });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ message: "ERROR" });
      });
  }
  res.status(400).json({ message: "Pessoa não encontrada." });
});

router.delete("/delete/:id", async (req, res) => {
  if (req.params.id.length == 24) {
    await Pessoa.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({ message: "Deletado." });
      })
      .catch((err) => {
        res.status(400).json({ message: "ERROR" });
      });
  }
  res.status(400).json({ message: "Pessoa não encontrada." });
});

module.exports = router; //nao esquecer de exportar router
