type Role="Admin"|"User";
let r:Role ;
r = "Admin";
//r = "Auditor";

function confirmDialog(answer:"yes"|"no") {
    console.log(`result = ${answer}`);
}
confirmDialog("yes");
confirmDialog("no");

console.log("-------------");
type verticalAlign = "top" | "middle" | "bottom";
type horizontalAlign = "left" | "center" | "right";
type alignment = `${verticalAlign}-${horizontalAlign}`;
let ali:alignment;
ali = 'top-right';
console.log(ali);
ali = 'bottom-left';
console.log(ali);