import BabelParser from "@babel/parser";
import {
  generateFunctionComponent,
  handleClassDeclaration,
  handleOtherDeclarations,
} from "./src/lib";

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
ast.forEach((stmt, idx, _) => {
  if (
    stmt.type === "ImportDeclaration" ||
    stmt.type === "ExportNamedDeclaration" ||
    stmt.type === "ExportDefaultDeclaration" ||
    stmt.type === "VariableDeclaration" ||
    stmt.type === "FunctionDeclaration"
  ) {
    const start: number = stmt.start!;
    const end: number = stmt.end!;
    const declaration = inputFileContent.slice(start, end + 1);
    handleOtherDeclarations(stmt.type, declaration);
  }
  if (stmt.type === "ClassDeclaration") {
    console.log(stmt.type);
    handleClassDeclaration(stmt, inputFileContent);
  }
});

// 3. transform class to function
generateFunctionComponent();

// 4. write output file
