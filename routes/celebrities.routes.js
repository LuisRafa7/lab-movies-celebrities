const router = require("express").Router();
const Celeb = require("../models/Celebrity.model");

router.get("/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", (req, res) => {
  const newCeleb = req.body;
  Celeb.create(newCeleb)
    .then((response) => {
      res.redirect("celebrities");
    })
    .catch((error) => {
      res.redirect("create");
      console.log(error);
    });
});

router.get("/celebrities", (req, res) => {
  Celeb.find()
    .then((response) => {
      res.render("celebrities/celebrities", { celebrities: response });
    })
    .catch((error) => console.log(error));
});

module.exports = router;
