var telegramBot = require('node-telegram-bot-api');
var token ='5759063823:AAFsQqSzB8Bqw-ODpzGelqM6aW4R-QwBAIo';//token of a bot
var api = new telegramBot(token, {polling: true});

//Starting the Bot
api.onText(/\/help/, function(msg, match) {
    var fromId = msg.from.id;
    api.sendMessage(fromId, "I aimed to send you an online hug to make your day a little better ☺️" +
    " Just \n/hugme and get your online hug from me.");});
    api.onText(/\/start/, function(msg, match) {
    var fromId = msg.from.id;
    api.sendMessage(fromId, "They call me sLyr@ck'sBot. " +
    "I can help you go through all that shit that is happeing in your life right now."+
    "To help you I just have few commands.\n/help\n/start\n/hugme");
});
//Hugs need to be at least 50
 var quotes = ["Love starts as a feeling, but to continue is a choice. And I find myself choosing you, more and more every day.", 
    "Age does not protect you from love. But love, to some extent, protects you from age.",
    "Maybe you don't need the whole world to love you. Maybe you just need one person.",
    "And in the end, the love you take is equal to the love you make…",
    "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.",
    "Souls tend to go back to who feels like home.",
    "Ты заслуживаешь чтобы тебя заковали в цепи из роз, и отослали на остров Цитеры!",
    "The simple lack of her is more to me than others' presence.☺️",
    "You remind me of my favorite season - Autumn, when We were supposed to walk in the park holding hands, but at some point it all went wrong...",
    "The time I met you, I understand the meaning of  word - Love.",
    "You are the reason why I believe in love",
    "Never gonna give You up, never gonna say goodbye...😄",
    "Без любви жить легче. Но без неё нет смысла.",
    "'Long hair, brown skin with the fat ass...'- J.Cole",
    "You have a bad day today? Just remember that you are the reason someone having a good day every day.",
    "I was pretty sure that love it's just chemical reaction when high levels of dopamine and a related hormone, norepinephrine, are released during attraction, but once I saw you it was nothing more than emptiness and calmness",
    "Я помню чудное мгновенье: \n Передо мной явилась ты,\n Как мимолетное виденье, \nКак гений чистой красоты.",
    "Холодной зимой советую тебе прочитать книгу: 'Филосовские Повести' - Вольтер, где описана та любовь которую  я хотел бы иметь с тобой!",
    "https://youtu.be/LlUgZdtyWdA?t=10",
    "Повстречавшишься со многими, я вдруг понял, что я искал лишь похожих на тебя, ведь для меня ты была оригиналом, жаль понял я это поздно.", 
    "With you, I am home.",
    "Старайся показать тем, кого любишь, свои худшие стороны. Если они принимают тебя такой, значит, ты не зря рядом с ними. "
]   
    //Sending random hug 
    //var randomIndex = Math.floor(Math.random() * quotes.length)
    //randomizing the function 
    api.onText(/\/hugme/, function(msg, match) {
    var fromId = msg.from.id;
    api.sendMessage(fromId, quotes[Math.floor(Math.random() * quotes.length)]);
});


console.log("sLyr@ck'sBot has started. Start conversation in your Telegram.");

// var telegramBot = require('node-telegram-bot-api');
// var token ='5759063823:AAFsQqSzB8Bqw-ODpzGelqM6aW4R-QwBAIo';
// var api = new telegramBot(token, {polling: true});

//commands to run a telegram bot
//npm init
//npm install express --save node modules
//npm install node-telegram-bot-api --save

//You need to put this to your package .json
//"engines": {
// "node": ">=5.6.0"
//}
