const functions = require("firebase-functions");
const cors = require("cors");

const express = require("express");
const app = express();
app.use(cors());

const { db } = require("./utils/admin");

const { signup, login, getUsersList } = require("./handlers/users");
const {
  getIdeas,
  createIdea,
  getIdeaDetail,
  getLastIdeas,
  changeIdeaStatus,
} = require("./handlers/ideas");

const { FBAuth } = require("./utils/fbAuth");
const { FBAuthAdmin } = require("./utils/fbAuthAdmin");

// user routes
app.post("/signup", signup);
app.post("/login", login);
app.get("/userslist", FBAuth, getUsersList);

// ideas routes
app.get("/ideas", FBAuth, getIdeas);
app.post("/newidea", FBAuth, createIdea);
app.get("/ideaDetails/:ideaId", FBAuth, getIdeaDetail);
app.get("/allideas", FBAuth, getLastIdeas);
app.post("/changeIdeaStatus/:ideaId", FBAuthAdmin, changeIdeaStatus);

exports.api = functions.https.onRequest(app);
