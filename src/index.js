function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#prompt-input");

  let key = "f49a0t5o6a941e8b58737a8aa3ba6354";
  let context =
    "You are an inspiration guru. You know how to inspire people with powerful, meaningful, and motivational quotes. Create a quote that is related to the topic provided, and ensure it resonates deeply with the reader.";
  let prompt = `Generate an inspiring quote about ${promptInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  axios.get(apiUrl).then(displayQuote);

  let quoteContainer = document.querySelector(".quote-container");
  quoteContainer.removeAttribute("hidden");

  new Typewriter("#quote", {
    strings: "Generating quote...",
    autoStart: true,
    delay: 20,
    deleteSpeed: 20,
    loop: true,
  });
}

let quoteForm = document.querySelector("#quote-generator-form");
quoteForm.addEventListener("submit", generateQuote);
