var quotes = [
    'Fortune favors the bold',
    'I think, therefore I am',
    'Time is money',
    'I came, I saw, I conquered',
    'When life gives you lemons, make lemonade',
    'Practice makes perfect',
    'Show, dont tell',
    'Have no fear of perfection, you will never reach it',
]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

var btn = document.getElementById('btn');
    colors = ['purple', 'yellow', 'orange', 'brown', 'black'];

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = 'salmon';
  btn.style.color = 'white';

});