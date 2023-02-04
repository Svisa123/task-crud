const router = require("express").Router();
const passport = require("passport");
const Usuarios = require("../models/Usuario");
const Sales = require("../models/Sale");

router.get("/", (req, res, next) => {
  res.render("index");
});

router.post(
  "/",
  passport.authenticate("local-signup", {
    successRedirect: "/dashboard",
    failureRedirect: "/",
    failureFlash: true,
  }),
  async (req, res) => {
    const user = Usuarios(req);
    await user.save();
  }
);

router.get("/signin", (req, res, next) => {
  res.render("signin");
});

router.post(
  "/signin",
  passport.authenticate("local-signin", {
    successRedirect: "/dashboard",
    failureRedirect: "/",
    failureFlash: true,
  })
);

router.get("/calculadora", isAuthenticated, (req, res) => {
  res.render("calculadora");
});
router.get("/inventory", isAuthenticated, (req, res) => {
  res.render("inventory");
});
router.post("/inventory", async (req, res) => {

  const sale = Sales(req.body);
  await sale.save();
  res.redirect("/dashboard");
});
router.get("/dashboard", isAuthenticated, (req, res) => {
  res.render("dashboard");
});
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/");
}

module.exports = router;
