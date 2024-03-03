import BabelParser from "@babel/parser";
import { isReactClassComponent } from "./src/lib";
// 1. read input file

const inputFilePath =
  "/Users/0xrafikii/Documents/Playground/Scripts/rc2f/examples/SimpleComponent2.jsx";
const inputFile = Bun.file(inputFilePath);
console.log("read", inputFile.size, "bytes of file type", inputFile.type);

const inputFileContent = await inputFile.text();
// console.log(inputFileContent);

// 2. parse content of input file

const ast = BabelParser.parse(inputFileContent, {
  sourceFilename: "SimpleComponent2.jsx",
  sourceType: "module",
  plugins: ["jsx"],
}).program.body;

// console.log(ast);
// check if it's a react class component
ast.forEach((stmt, idx, _) => {
  if (stmt.type === "ClassDeclaration") {
    if (isReactClassComponent(stmt)) {
      console.log("it is in fact a react class component!");
    } else {
      throw new Error(`${inputFilePath} is not a React class component`);
    }
  }
});
// 3. transform class to function
// 4. write output file
