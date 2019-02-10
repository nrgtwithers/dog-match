import express from 'express';
// import logger from 'morgan';
import mongoose from 'mongoose';
// import  axios from 'axios';
// import cheerio from 'cheerio';

// Initialize Express
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/dogBreeds";

mongoose.connect('MONGODB_URI');
mongoose.Promise = Promise;

// Schema
const db = require("./models");

// Routes ---------------------------------------------------------------------------
