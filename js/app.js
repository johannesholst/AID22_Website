var quotes = [
    'hello there',
    'helooooo',
    'teeeeest',
    'teeeeesting',
    'testing testing'
]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}