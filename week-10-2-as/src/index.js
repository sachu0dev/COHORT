"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_1 = require("./routes");
var app = express();
app.use("/api/v1", routes_1.default);
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
