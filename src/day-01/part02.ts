import { readFileSync } from "fs";
import { join } from "path";

//--- Day 1: Not Quite Lisp ---

function syncReadFile(filename: string) {
  const contents = readFileSync(join(__dirname, filename), "utf-8");

  const test = "()())";

  const found = contents.split("").reduce(
    (acc, char, index) => {
      if (char === "(") {
        acc.floor++;
      } else if (char === ")") {
        acc.floor--;

        if (acc.floor === -1 && acc.position === undefined) {
          acc.position = index + 1;
        }
      }

      return acc;
    },
    { floor: 0, position: undefined as number | undefined }
  );

  //Correct 1797
  console.log("found", found.position);
}

syncReadFile("./input.txt");
