var prompts = [
  "your favourite book 📖",
  "your favourite movie 🎬",
  "your favourite place to travel 🌍",
  "your favourite time of year ☀️",
  "your best friend 👯‍♀️",
  "your favourite vacation 🏖",
  "what toppings you like on your pizza 🍕",
  "your plans for the weekend 🎉",
  "your favourite colour 🌈",
  "your favourite place to go camping 🏕",
  "your favourite YouTube video 📹",
  "what instrument you play 🎺",
  "your favourite podcast 🎧",
  "your favourite animal 🦧",
  "your favourite meal 🌮",
  "your favourite musician 👨‍🎤",
  "your favourite song 🎶",
];

function emailPrompt() {
  var randomNumber = Math.floor(Math.random() * prompts.length);
  document.getElementById("promptDisplay").innerHTML = prompts[randomNumber];
}
