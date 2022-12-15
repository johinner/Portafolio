import express from "express";
const router = express.Router();

/* GET users listing. */
router.get("/notes/:id", function (req, res, next) {
  try {
    let { id } = req.params;
    switch (id) {
      case "GitHub":
        res.render("gitHub");
        break;
      case "NPM":
        res.render("error");
        break;
      case "Node.js":
        res.render("error");
        break;
    }
  } catch (error) {
    console.error("nota no encontrada");
  }
});

export default router;
