"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
//--- Day 1: Not Quite Lisp ---
function syncReadFile(filename) {
    var contents = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, filename), "utf-8");
    var test = "))(((((";
    var opened = contents.split("").filter(function (char) { return char === "("; });
    var closed = contents.split("").filter(function (char) { return char === ")"; });
    //   console.log(arr);
    console.log("res", opened.length - closed.length);
    console.log("closed", closed);
    console.log("opened", opened);
}
syncReadFile("./input.txt");
