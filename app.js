const express = require("express");
const app = express();

app.get("/verstappen", (req, res, next) => {
    return res.status(200).sendFile("verstappen.html", {root: './'});
});

module.exports = app;