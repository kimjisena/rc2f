import BabelParser from "@babel/parser";
import { handleExports, isReactClassComponent } from "./src/lib";
// 1. read input file

const inputFilePath =
  "/Users/0xrafikii/Documents/Playground/Scripts/rc2f/examples/SimpleComponent.jsx";
const inputFile = Bun.file(inputFilePath);
console.log("read", inputFile.size, "bytes of file type", inputFile.type);

const inputFileContent = await inputFile.text();
// console.log(inputFileContent);

// 2. parse content of input file

const ast = BabelParser.parse(inputFileContent, {
  sourceFilename: "SimpleComponent.jsx",
  sourceType: "module",
  plugins: ["jsx"],
}).program.body;

// console.log(ast);
ast.forEach((stmt, idx, _) => {
  console.log(stmt.type);

  if (
    stmt.type === "ImportDeclaration" ||
    stmt.type === "ExportNamedDeclaration" ||
    stmt.type === "ExportDefaultDeclaration"
  ) {
    const start: number = stmt.start!;
    const end: number = stmt.end!;
    const declaration = inputFileContent.slice(start, end + 1);
    handleExports(stmt.type, declaration);
  }
  if (stmt.type === "ClassDeclaration") {
    // check if it's a react class component
    if (isReactClassComponent(stmt)) {
      // process react class component
    } else {
      throw new Error(`${inputFilePath} is not a React class component`);
    }
  }
});
// 3. transform class to function
// 4. write output file
