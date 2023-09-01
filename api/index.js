const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");
const cors = require("cors");

const User = require("./models/User");

dotenv.config();
mongoose.connect(process.env.MONGO_URL);
const jwtSecret = process.env.JWT_SECRET;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
}));

app.post("/register", async (req, res) => {
    const {username, password} = req.body;
    try {
        const newUser = await User.create({username, password});
        jwt.sign({userId:newUser._id}, jwtSecret, {}, (err, token) => {
            if(err) throw err;
            res.cookie("token", token, {sameSite: "none"}).status(201).json({
                id: newUser._id,
            });
        });
    } catch (error) {
        res.json(error.message);
    }
})

app.listen(4000);