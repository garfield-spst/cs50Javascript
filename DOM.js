// DOM manupilation

// 1st:- getting Element by id
// const domOne = document.getElementById("dom");
// console.log(domOne);

// We can also access html tags by using document.getElementsByTagName but remember here we are writting elements not element so avoid using this method because it can create confusion.

// The best way to manupilate html elements is by using querySelector method.
// const domTwo = document.querySelector("#dom");
// console.log(domTwo);

// TRAVERSE DOM

// 1st:- parentNode

// const heading = document.querySelector("#dom");
// const parent = heading.parentNode;
// console.log(parent);

// 2nd:- childNodes
// const parent = document.querySelector(".parent");
// const child = parent.childNodes;
// console.log(child);

// 3rd:- nextElementSibling and previousElementSibling
// const dom = document.querySelector("#dom");
// const sibling = dom.nextElementSibling;
// console.log(sibling);

// Manupilating Content

// const dom = document.querySelector("#dom");
// dom.innerHTML = `Web Dev Is Awesome 😃`;
// dom.style.color = `pink`;
// dom.style.fontSize = `65px`;
// dom.classList.add("heading");
// dom.classList.add("title");
// dom.classList.remove("heading");

// Advanced DOM manupilation

// creating new elements using js
// const headingFirst = document.createElement("h1");
// headingFirst.innerHTML = `Javascript Is Awesome 😆`;
// const parent = document.querySelector("#parent2");
// parent.appendChild(headingFirst);
// console.log(headingFirst);

// DOM Events

const button = document.querySelector("#btn");
const heading = document.querySelector("#heading");

button.addEventListener("click", function () {
  let color1 = "purple";
  let color2 = "black";
  if (heading.style.color == color2) {
    heading.style.color = color1;
    console.log(color1);
  } else {
    heading.style.color = color2;
    console.log(color2);
  }
  // console.log("button is pressed");
});
