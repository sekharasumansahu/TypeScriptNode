"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var _app = express();
_app.get('/', function (req, res) {
    res.send('Hello ! App is working');
});
_app.listen(3000, function (err) {
    if (err)
        console.log(err);
    console.log('server connected on 3000');
});
