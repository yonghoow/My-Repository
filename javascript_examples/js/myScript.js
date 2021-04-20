//This is a comment in the SCRIPT
/*
Long comments
Long comments
*/

let d = new Date();
document.getElementById("mydate").innerHTML = d;

document.body.style.backgroundColor = "blue";
document.body.style.color ="white";

let p = document.createElement("p"); //create a p tag
let t = document.createTextNode("This is a paragraph");

p.appendChild(t);
document.body.appendChild(p);

document.write("This is using the document write method.")

//body is the parent of the p element
//p is the parent of the textNode
