var quotes = [
  "“Some people never go crazy. What truly horrible lives they must lead.”",
  "“Sometimes you climb out of bed in the morning and you think, I'm not going to make it, but you laugh inside — remembering all the times you've felt that way.”",
  "“what matters most is how well you walk through the fire”",
  "“We're all going to die, all of us, what a circus! That alone should make us love each other but it doesn't. We are terrorized and flattened by trivialities, we are eaten up by nothing.”",
  "“You have to die a few times before you can really live.”",
  "“I wanted the whole world or nothing.”",
  "“Find what you love and let it kill you.”",
  "“Real loneliness is not necessarily limited to when you are alone.”",
  "“There's a bluebird in my heart that wants to get out but I'm too tough for him, I say, stay in there, I'm not going to let anybody see you.”",
  "“Sometimes you just have to pee in the sink.”",
  "“I stopped looking for a Dream Girl, I just wanted one that wasn't a nightmare.”",
  '“Baby," I said, "I\'m a genius but nobody knows it but me.”',
  "“Life's as kind as you let it be.”",
  "“We are like roses that have never bothered to bloom when we should have bloomed and it is as if the sun has become disgusted with waiting”",
  "“We don’t even ask for happiness, just a little less pain.”",
  "“It wasn’t my day. My week. My month. My year. My life. God damn it.”",
  "“I carry death in my left pocket. Sometimes I take it out and talk to it: \"Hello, baby, how you doing? When you coming for me? I'll be ready.”",
  "“We are here to laugh at the odds and live our lives so well that Death will tremble to take us.”",
  "“so it's always a process of letting go, one way or another” ",
  "“In my next life I want to be a cat. To sleep 20 hours a day and wait to be fed. To sit around licking my ass.”",
  "“I don't know about other people, but when I wake up in the morning and put my shoes on, I think, Jesus Christ, now what?”"
];

function randomQuote() {
  var randomQuote = (document.getElementById("quotes").innerHTML =
    quotes[Math.floor(Math.random() * quotes.length)]);
}
randomQuote();

function tweet() {
  var tweetButton = document.getElementById("tweetQuote");
  var currentQuote = document.getElementById("quotes").innerHTML;
  tweetButton.href =
    "https://twitter.com/intent/tweet?text=" +
    currentQuote +
    " https://codepen.io/YordanZhelev/pen/awOpNb";
}