import type { ClassDeclaration } from "@babel/types";

export function isReactClassComponent(stmt: ClassDeclaration) {
  const objectName = stmt.superClass?.object?.name;
  const propertyName = stmt.superClass?.property?.name;

  return (
    stmt.superClass?.name === "Component" ||
    (objectName === "React" && propertyName === "Component")
  );
}
