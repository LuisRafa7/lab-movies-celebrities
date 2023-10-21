const router = require("express").Router();
const Celeb = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

router.get("/create", (req, res) => {
  Celeb.find()
    .then((response) => {
      res.render("movies/new-movie", { celebs: response });
    })
    .catch((error) => console.log(error));
});

router.post("/create", (req, res) => {
  const newMovie = req.body;
  Movie.create(newMovie)
    .then((response) => res.redirect("movies"))
    .catch((error) => console.log(error));
});

router.get("/movies", (req, res) => {
  Movie.find()
    .then((response) => {
      res.render("movies/movies", { movies: response });
    })
    .catch((error) => console.log(error));
});

router.get("/:id", (req, res) => {
  const idMovie = req.params.id;
  Movie.findById(idMovie)
    .populate("cast")
    .then((response) => {
      res.render("movies/movie-details", { details: response });
    })
    .catch((error) => console.log(error));
});

router.post("/:id/delete", (req, res) => {
  const idMovie = req.params.id;
  Movie.findByIdAndDelete(idMovie).then(() => {
    res.redirect("/movies/movies");
  });
});

router.get("/:id/edit", (req, res) => {
  const idMovie = req.params.id;
  Movie.findById(idMovie);
  Celeb.find()
    .then((response, response1) => {
      res.render("movies/edit-movie", { celebDetails: response });
      console.log(response1);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
