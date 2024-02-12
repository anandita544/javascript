//documnet object model
// console.log(documnet.body);
// document.body.style.backgroundColor="red";
// const heading=document.getElementId("hi");
const heading=documnet.querySelector("h1");
const heading=documnet.querySelector("#heading");
const heading=documnet.querySelector(".main-heading");
const headingNodeList=documnet.querySelectorAll(".main-heading");
const headingElement=Array.from(headingNodeList);
console.log(headingElement);
.
heading.style.color="blue";
console.log(heading);