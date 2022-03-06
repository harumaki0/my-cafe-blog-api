var router = require("express").Router();

router.use((req, res, next) => {
    console.log((new Date()).toISOString());
    next();
});

router.get("/", (req, res) => {
    res.send("/blog/");
});

router.get("/about", (req, res) => {
    res.send("/blog/about");
});

module.exports = router;