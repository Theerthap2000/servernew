const express = require("express")
const router = express.Router();
router.post("/register/:id/:name", (req, res, next) => {
    console.log(req.params.id);
    console.log(req.params.name);
    if (req.body.password == "me@12345") {
        next();
        console.log("ok");
    }
    else {
        res.send("incorrect")
        console.log("incorrect");
    }
}, (req, res) => {
    res.send("sucess")

});


module.exports = router