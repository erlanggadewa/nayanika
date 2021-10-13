var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
    navbar: true,
    layout: "layouts/main-layout",
  });
});

router.get("/alat-musik", function (req, res, next) {
  res.render("alat-musik", {
    title: "Express",
    navbar: true,
    layout: "layouts/main-layout",
  });
});

router.get("/rumah-adat", function (req, res, next) {
  res.render("rumah-adat", {
    title: "Express",
    navbar: true,
    layout: "layouts/main-layout",
  });
});

router.get("/tarian-daerah", function (req, res, next) {
  res.render("tarian-daerah", {
    title: "Express",
    navbar: true,
    layout: "layouts/main-layout",
  });
});

router.get("/senjata-daerah", function (req, res, next) {
  res.render("senjata-daerah", {
    title: "Express",
    navbar: true,
    layout: "layouts/main-layout",
  });
});

router.get("/makanan-khas", function (req, res, next) {
  res.render("makanan-khas", {
    title: "Express",
    navbar: true,
    layout: "layouts/main-layout",
  });
});

router.get("/daerah/:daerah", function (req, res, next) {
  res.render("detail-daerah", {
    title: req.params.daerah,
    navbar: true,
    layout: "layouts/main-layout",
  });
});

router.get("/kuis/:level", function (req, res, next) {
  res.render("kuis", {
    title: req.params.level,
    navbar: false,
    layout: "layouts/main-layout",
  });
});

router.get("*", function (req, res, next) {
  res.redirect("/");
});
module.exports = router;
