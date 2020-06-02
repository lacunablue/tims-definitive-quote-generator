

let quotes = [
  "And the truth is that as a man's real power grows and his knowledge widens, ever the way he can follow grows narrower; until at last he chooses nothing, but does only and wholly what he 𝘮𝘶𝘴𝘵 do. -Ursula K. LeGuin, A Wizard of Earthsea",
  "What is my joy if all hands, even the unclean, can reach into it? What is my wisdom, if even the fools can dictate to me? What is my freedom, if all creatures, even the botched and impotent, are my masters? What is my life, if I am but to bow, to agree, and to obey? -Ayn Rand, Anthem",
  "That's how you're going to beat 'em, Butch. Keep underestimating you. -Butch, Pulp Fiction",
  "Respect for ourselves guides our morals, respect for others guides our manners. -Laurence Sterne",
  "Don't confuse style with intent. -Picard, Star Trek: The Next Generation",
  "Simplicity is prerequisite for reliability. –Edsger Dijkstra",
  "A Black Belt is a White Belt That Never Quit -Unknown",
  "My own brain is to me the most unaccountable of machinery - always buzzing, humming, soaring roaring diving, and then buried in mud. And why? What’s this passion for? -Virginia Woolf",
  "Do you wish to be great? Then begin by being. Do you desire to construct a vast and lofty fabric? Think first about the foundations of humility. The higher your structure is to be, the deeper must be its foundation. -Saint Augustine",
  "I like the dreams of the future better than the history of the past. -Thomas Jefferson",
  "Battle not with monsters, lest ye become a monster, and if you gaze into the abyss, the abyss gazes also into you. -Nietzsche",
  "Anyone who has never made a mistake has never tried anything new. -Einstein",
  "Wildcat... -Eli Cash",
  "What do you mean? Do you wish me a good morning, or mean that it is a good morning whether I want it or not; or that you feel good on this morning; or that it is a morning to be good on? -Gandalf, The Lord of the Rings",
  "The aim of an argument or discussion should not be victory, but progress. -J. Joubert",
  "Do not waste yourself in rejection, nor bark against the bad, but chant the beauty of the good. -Ralph Waldo Emerson",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. -Dr. Seuss",
  "Being is bliss in its nature. -Maharishi Mahesh Yogi",
  "I just do as I do. -Portugal. The Man",
  "There’s no need to miss someone from your past. There’s a reason they didn’t make it to your future. -Unknown",
  "Strange that something that doesn't exist should be the essence of the matter. -Russell Roberts",
  "Great minds discuss ideas. Average minds discuss events. Small minds discuss people. -Eleanor Roosevelt",
  "I know that you believe you understand what you think I said, but I'm not sure you realize that what you heard is not what I meant. -Robert McCloskey",
  "Know, find or create the solution. -Andrew Hoover ",
  "I don't understand, but I can tell it's bullshit. -Steve Zissou, The Life Aquatic",
  "One day you will wake up and there won’t be any more time to do the things you’ve always wanted. Do it now. -Paulo Coelho",
  "The truest form of love is how you behave toward someone, not how you feel about them. -Steve Hall",
  "Life is either a daring adventure or nothing at all. -Helen Keller, The Open Door",
  "Optimism, pessimism, f*ck that – we’re going to make it happen. -Elon Musk"
]

document.getElementById("btn").addEventListener("click", function() {
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
});
