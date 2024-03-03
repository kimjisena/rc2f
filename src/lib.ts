import type { ClassDeclaration } from "@babel/types";

let IMPORTDECLARATIONS = new Set<string>();
let GLOBALVARIABLES = new Set<string>();
let EXPORTNAMEDDECLARATION = new Set<string>();
let EXPORTDEFAULTDECLARATION = "";

export function isReactClassComponent(stmt: ClassDeclaration) {
  const objectName = stmt.superClass?.object?.name;
  const propertyName = stmt.superClass?.property?.name;

  return (
    stmt.superClass?.name === "Component" ||
    (objectName === "React" && propertyName === "Component")
  );
}

export function handleOtherDeclarations(type: string, slice: string) {
  switch (type) {
    case "ImportDeclaration":
      console.log(slice);
      IMPORTDECLARATIONS.add(slice);
      break;
    case "VariableDeclaration":
      console.log(slice);
      GLOBALVARIABLES.add(slice);
      break;
    case "FunctionDeclaration":
      console.log(slice);
      break;
    case "ExportNamedDeclaration":
      console.log(slice);
      EXPORTNAMEDDECLARATION.add(slice);
      break;
    case "ExportDefaultDeclaration":
      console.log(slice);
      EXPORTDEFAULTDECLARATION = slice;
      break;

    default:
      break;
  }
}

export function handleClassDeclaration(stmt: ClassDeclaration) {
  let inputFilePath = "FileName.jsx";
  if (isReactClassComponent(stmt)) {
    // process react class component
    console.log("let's handle that class ClassDeclaration");
  } else {
    throw new Error(`${inputFilePath} is not a React class component`);
  }
}
