var count = 0;

// TODO: Add a comment describing the functionality of the following document.querySelector() methods:
//document.querySelector() methods can select ID and Class from html.In this javascript select increment and decrement button elements and selct count spam element. 
var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');

// TODO: Add a comment describing the functionality of the following code:
//When user click increment or decrement buttom we need to show updates count on page that's why use textContent and setCounterText fuction work and updates count on page.
function setCounterText() {
  countEl.textContent = count;
}
// TODO: Add a comment describing the functionality of the following event listener:
//Attach event listener to increment button element
incrementEl.addEventListener('click', function() {
  count++;
  setCounterText();
});

// TODO: Add a comment describing the functionality of the following event listener:
//Attach event listener to decrement button element
decrementEl.addEventListener('click', function() {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
});
