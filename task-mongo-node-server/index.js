const express = require("express");
const mongoose = require("mongoose");
const { createServer } = require("http");
// const { Module } = require("module");
//const { response } = require("express");
const app = express();
const port = 5000;
const bcrypt = require("bcrypt");

/* Connect to mongo DB block */
mongoose
  .connect(
    "mongodb+srv://IT-Preacher:Sergiy98SF@articles.0t6ze.mongodb.net/Test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log("Connect ERROR"));
/* Connect to mongo DB block finish*/

const server = createServer(app);

/* User schema for database*/
const UsersShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 15,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user", "writer"],
  },
});
const Users = mongoose.model("Users", UsersShema);
/* */

/* Password crypt block*/
/* */
UsersShema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.hash(this.password, 5, (err, passwordHash) => {
    if (err) {
      return next(err);
    }
    this.password = passwordHash;
    next();
  });
});
/* */

/* */
UsersShema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    } else {
      if (!isMatch) {
        return cb(null, isMatch);
      }

      return cb(null, this);
    }
  });
};
/* */
/* Password crypt block finish*/

app.get("/gets", (res, err) => {
  /* using create method to add new user in DB */
  // Users.create({
  //     name: "Admin username",
  //     password: "99999999999",
  //     email: "test@gmail.com",
  // })
  // .than((user) => res.send(user))
  // .catch((err) => {
  //     res.send("FATAL");
  //     res.send(err);
  //     console.log("FATAL");
  //     console.log("Error to send user date");
  // });
  /* using create method to add new user in DB FINISH*/

  /* using save method to add new user in DB */
  const fakeUser = {
    name: "Fake User",
    email: "fake@gmail.com",
    password: "55555551",
    role: "user",
  };

  const user = new Users(fakeUser);

  user.save((err, document) => {
    if (err) {
      console.log(err);
    }

    console.log(document);
  });

  //res.end();
  /* using save method to add new user in DB FINISH*/
});

/* TEST BLOCK */
// const fakeUser = {
//     name: "Fake User",
//     email: "fake@gmail.com",
//     password: "122346584",
//     role: "user"
// }

// const user = new Users(fakeUser);

// user.save((err, document) => {

//     if(err) {
//         console.log(err);
//     }

//     console.log(document);
// })
/* */

module.export = Users;

server.listen(port, () => console.log("server listening"));
