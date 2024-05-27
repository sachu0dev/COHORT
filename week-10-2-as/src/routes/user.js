"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
router.get("/hello", function (req, res) {
    res.send("Hello World!");
});
exports.default = router;
