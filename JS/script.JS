var lastQuoteIndex = -1;
function quoteGenerator() {
  var writerQuote = [
    "Amanda Gorman",
    "Victor Hugo",
    "Maxine Hong Kingston",
    "Magic Johnson",
    "Ed Markey",
    "Frank Warren",
    "Catherine Pulsifer",
    "Helen Keller",
  ];

  var quoteContent = [
    "The new dawn blooms as we free it. For there is only light if we are brave enough to see it, if only we’re brave enough to be it.",
    "There is nothing like a dream to create the future.",
    "In a time of destruction, create something.",
    "All kids need is a little help, a little hope, and somebody who believes in them.",
    "We must vote for hope, vote for life, vote for a brighter future for all of our loved ones.",
    "It’s the children the world almost breaks who grow up to save it.",
    "Never give up. Have hope. Expect only the best from life and take action to get it.",
    "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
  ];
  var num;
    do {
        num = Math.floor(Math.random() * writerQuote.length);
    } while (num === lastQuoteIndex);

    lastQuoteIndex = num;

  var quoteDiscription = `
        <div class="quoteIcon">
            <span class="icons"><i class="fa-solid fa-quote-left"></i></span>
            <p class="quote_style">${quoteContent[num]}</p>
            <span class="icons"><i class="fa-solid fa-quote-right"></i></span>
        </div>
        <span>-- ${writerQuote[num]}</span>`;

  document.getElementById("quoteDiscription").innerHTML = quoteDiscription;
}
