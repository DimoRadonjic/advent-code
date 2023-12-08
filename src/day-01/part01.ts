import { readFileSync } from "fs";
import { join } from "path";

//--- Day 1: Not Quite Lisp ---

function syncReadFile(filename: string) {
  const contents = readFileSync(join(__dirname, filename), "utf-8");

  const test = "))(((((";

  const opened: string[] = contents.split("").filter((char) => char === "(");
  const closed: string[] = contents.split("").filter((char) => char === ")");

  // Correct 280
  console.log("res", opened.length - closed.length);
  console.log("closed", closed);
  console.log("opened", opened);
}

syncReadFile("./input.txt");
