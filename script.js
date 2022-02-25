const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// get quotes from API
async function getQuotes() {
  const apiUrl = 'https://icanhazdadjoke.com/';
  try {
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const response = await fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((result) => (apiQuotes = result.joke))
      .catch((error) => console.log('error', error));
    console.log(apiQuotes);
    newQuote();
  } catch (error) {
    console.log('ERROR! ', error);
  }
}

// show new quote
function newQuote() {
  // check quote length to determine styling
  if (apiQuotes.length > 60) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  quoteText.textContent = apiQuotes;
}

// on load
getQuotes();
