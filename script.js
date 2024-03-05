// include api for currency change

const api = "https://api.exchangerate-api.com/v4/latest/USD";
/*
const api = "https://v6.exchangerate-api.com/v6/9a702a27e6e5a834f85c2526/latest/USD";*/

// for selecting different controls

var search = document.querySelector(".searchBox");

var convert = document.querySelector(".convert");

var fromCurrecy = document.querySelector(".from");

var toCurrecy = document.querySelector(".to");

var finalValue = document.querySelector(".finalValue");

var finalAmount = document.getElementById("finalAmount");

var resultFrom;

var resultTo;

var searchValue;

// Event when currency is changed

fromCurrecy.addEventListener("change", (event) => {
  resultFrom = `${event.target.value}`;
});

// Event when currency is changed

toCurrecy.addEventListener("change", (event) => {
  resultTo = `${event.target.value}`;
});

search.addEventListener("input", updateValue);

// function for updating value

function updateValue(e) {
  searchValue = e.target.value;
}

// when user clicks, it calls function getresults

convert.addEventListener("click", getResults);

// function getresults

function getResults() {
  fetch(`${api}`)
    .then((currency) => {
      return currency.json();
    })
    .then(displayResults);
}

// display results after convertion

function displayResults(currency) {
  let fromRate = currency.rates[resultFrom];

  let toRate = currency.rates[resultTo];

  finalValue.innerHTML = ((toRate / fromRate) * searchValue).toFixed(2);

  finalAmount.style.display = "block";
}

// when user click on reset button

function clearVal() {
  window.location.reload();

  document.getElementsByClassName("finalValue").innerHTML ="";
}
