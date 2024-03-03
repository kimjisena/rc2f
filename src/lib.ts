import type { ClassDeclaration } from "@babel/types";

let IMPORTDECLARATIONS = new Set<string>();
let EXPORTDEFAULTDECLARATION = "";
let EXPORTNAMEDDECLARATION = new Set<string>();

export function isReactClassComponent(stmt: ClassDeclaration) {
  const objectName = stmt.superClass?.object?.name;
  const propertyName = stmt.superClass?.property?.name;

  return (
    stmt.superClass?.name === "Component" ||
    (objectName === "React" && propertyName === "Component")
  );
}

export function handleExports(type: string, slice: string) {
  switch (type) {
    case "ImportDeclaration":
      console.log(slice);
      IMPORTDECLARATIONS.add(slice);
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
