//immediate invoked function expression
(function() {
  const quotes = [
    {
      quote:
        "Bitcoin seems to be a very promising idea. I like the idea of basing security on the assumption that the CPU power of honest participants outweighs that of the attacker. It is a very modern notion that exploits the power of the long tail.",
      author: "Hal Finney"
    },
    {
      quote:
        "Bitcoin enables certain uses that are very unique. I think it offers possibilities that no other currency allows. For example the ability to spend a coin that only occurs when two separate parties agree to spend the coin; with a third party that couldn’t run away with the coin itself.",
      author: "Pieter Wuille"
    },
    {
      quote:
        "Bitcoin is a remarkable cryptographic achievement and the ability to create something that is not duplicable in the digital world has enormous value.",
      author: "Eric Schmidt"
    },
    {
      quote: "I really like Bitcoin. I own Bitcoins. It’s a store of value, a distributed ledger. It’s a great place to put assets, especially in places like Argentina with 40 percent inflation, where $1 today is worth 60 cents in a year, and a government’s currency does not hold value. It’s also a good investment vehicle if you have an appetite for risk. But it won’t be a currency until volatility slows down.",
      author: "David Marcus (CEO of Paypal)"
    },
    {
      quote:
        "It’s money 2.0, a huge huge huge deal.",
      author: "Chamath Palihapitiya"
    },
    {
      quote:
        "I do think Bitcoin is the first [encrypted money] that has the potential to do something like change the world.",
      author: "Peter Thiel"
    }
  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
