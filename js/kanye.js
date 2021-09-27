
//quote generator by kanye api

const loadQuotes = () => {
    fetch('https://api.kanye.rest')
    .then(response =>  response.json())
    // .then(data => console.log(data));
    .then(data => displayQuote(data));
}
//to display in browser
//1.button diye 
//2.function call kore

const displayQuote = quote => {
    // console.log(quote);
    console.log(quote.quote);// text ta dekhabe .
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;//ekhane paowa quoteElement er inner text ta html er (blockquote) tag er vetor display korbe browser e .
}