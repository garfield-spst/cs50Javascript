let counter = 0;
const heading = document.querySelector("h1");
function count() {
  counter++;
  // alert(`The value of count is : ${counter}`);
  heading.innerHTML = counter;
}
function resetCounter() {
  counter = 0;
  heading.innerHTML = counter;
}
let buttonOne = document.querySelector(".one");
buttonOne.onclick = count;
const buttonTwo = document.querySelector(".two");
buttonTwo.onclick = resetCounter;
