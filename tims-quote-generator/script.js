let quotesArray = [];

function fetchQuote() {
  fetch(
    "https://raw.githubusercontent.com/lacunablue/tims-definitive-quote-generator/master/tims-quote-generator/quotes.json"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      quotesArray.push(json);
    })
    .catch(function (err) {
      console.log("Fetch problem: " + err.message);
    });
}

window.onload = fetchQuote();

document.getElementById("btn").addEventListener("click", function () {

  let randomNumber = Math.floor(Math.random() * quotesArray[0].length);

  document.getElementById("quote").innerHTML =
    quotesArray[0][randomNumber]["quote"];

  document.getElementById("source").innerHTML =
    "-" + quotesArray[0][randomNumber]["source"];
});
// TO DO
// [DONE]- integrate JSON for quotes, separate quote and source into two properties https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
// figure out why JSON data is position 0 of array
// convert to a responsive format within CSS
// change button to checkbox to enable pure CSS "onclick" animation rather than hover animation
// change animation from a shimmy to a roll
// set timer so that quotes generate after roll animation completes
// dress up quote display formatting with open/close quote icons etc
