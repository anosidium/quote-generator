async function fetchRandomQuote() {
  let url = "https://anosidium-quote-backend.trainees.hosting.cyf.academy";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const message = `Response status: ${response.status}`;
      displayMessage(message);
      throw new Error(message);
    }

    const quote = await response.json();

    if (!quote) {
      const message = `Response json: ${quote}`;
      displayMessage(message);
      throw new Error(message);
    }

    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = `${quote.quote} – ${quote.author}`;
    displayMessage("");
  } catch (error) {
    displayMessage(error.message);
  }
}

function displayMessage(message) {
  messageElement.textContent = `${message}`;
}

const messageElement = document.getElementById("message");
const randomQuoteButton = document.getElementById("random-quote-button");

window.onload = () => {
  fetchRandomQuote();
  randomQuoteButton.addEventListener("click", fetchRandomQuote);
};
