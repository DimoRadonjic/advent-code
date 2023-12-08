"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
//--- Day 1: Not Quite Lisp ---
function findBasementEntryPosition(instructions) {
    var floor = 0;
    for (var i = 0; i < instructions.length; i++) {
        var instruction = instructions[i];
        if (instruction === "(") {
            floor++;
        }
        else if (instruction === ")") {
            floor--;
            // Check if Santa enters the basement (floor -1)
            if (floor === -1) {
                return i + 1; // Positions are 1-indexed
            }
        }
    }
    // If Santa never enters the basement
    return undefined;
}
function syncReadFile(filename) {
    var contents = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, filename), "utf-8");
    var test = "()())";
    var found = contents.split("").reduce(function (acc, char, index) {
        if (char === "(") {
            acc.floor++;
        }
        else if (char === ")") {
            acc.floor--;
            // Check if Santa enters the basement (floor -1)
            if (acc.floor === -1 && acc.position === undefined) {
                acc.position = index + 1; // Positions are 1-indexed
            }
        }
        return acc;
    }, { floor: 0, position: undefined });
    //Correct 1797
    console.log("found", found.position);
}
syncReadFile("./input.txt");
