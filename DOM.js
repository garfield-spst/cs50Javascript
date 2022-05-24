// DOM manupilation

// 1st:- getting Element by id
const domOne = document.getElementById("dom");
console.log(domOne);

// We can also access html tags by using document.getElementsByTagName but remember here we are writting elements not element so avoid using this method because it can create confusion.

// The best way to manupilate html elements is by using querySelector method.
const domTwo = document.querySelector("#dom");
console.log(domTwo);
