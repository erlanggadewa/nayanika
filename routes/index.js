var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", layout: "layouts/main-layout" });
});
router.get("/alat-musik", function (req, res, next) {
  res.render("alat-musik", { title: "Express", layout: "layouts/main-layout" });
});

module.exports = router;
