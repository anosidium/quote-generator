async function fetchRandomQuote() {
  let url = "http://127.0.0.1:3000/";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const quote = await response.json();

    if (!quote) {
      throw new Error(`Response json: ${quote}`);
    }

    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = `${quote.quote} – ${quote.author}`;
  } catch (error) {
    console.log(error.message);
  }
}

const randomQuoteButton = document.getElementById("random-quote-button");

window.onload = () => {
  fetchRandomQuote();
  randomQuoteButton.addEventListener("click", fetchRandomQuote);
};
