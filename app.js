const express = require("express");
const app = express();

app.get("/bortoleto", (req, res, next) => {
    return res.status(200).sendFile("bortoleto.html", {root: './'});
});

module.exports = app;