import BabelParser from "@babel/parser";
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
// check if it's a react class component
ast.forEach((stmt, idx, _) => {
  if (stmt.type === "ClassDeclaration") {
    console.log("it could be a class component");
    console.log(stmt);
  }
});
// 3. transform class to function
// 4. write output file

