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
      .then((result) => (apiQuotes = result))
      .catch((error) => console.log('error', error));
    console.log(apiQuotes);
  } catch (error) {
    console.log('ERROR! ', error);
  }
}

// on load
getQuotes();
