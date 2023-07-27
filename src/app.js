const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express();
dotenv.config();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Home");
});
app.get("/register", (req, res) => {
    res.send("Register");
});
app.post("/reg", (req, res) => {
    res.send("House");
});
app.post("/login", (req, res) => {
    console.log(req.body);
    // const { email, password } = req.body;
    if (req.body.password == "me@12345") {
        res.send("login sucess");
    }
    else {
        res.send("passwrd incorrect")
    }

});
app.use("/api", require("./routes/auth"))
app.use("/reji", require("./routes/reg"))

mongoose.connect(process.env.DB).then(() => {
    console.log("access")
}).catch(err => {
    console.log("not");
})



app.listen(5000, () => {
    console.log("server listening at port 5000");
});