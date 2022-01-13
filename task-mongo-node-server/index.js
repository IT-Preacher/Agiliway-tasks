const express = require("express");
const mongoose = require("mongoose");
const { createServer } = require("http");
//const { response } = require("express");
const app = express();
const port = 5000;

mongoose.connect("mongodb+srv://IT-Preacher:Sergiy98SF@articles.0t6ze.mongodb.net/Test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
})
.then(() => console.log("Mongo connected"))
.catch((err) => console.log("Connect ERROR"));

const server = createServer(app);
const UsersShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
})
const Users = mongoose.model("Users", UsersShema);

app.get("/", (res, err) => {
    Users.create({
        name: "Test User",
        email: "test@gmail.com",
    })
    .than((user) => res.send(user))
    .catch((err) => {
        res.send(err)
        console.log("Error to send user date")
    });
});

server.listen(port, () => console.log("server listening"));