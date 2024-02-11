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
    "With you, I am home!",
    "Старайся показать тем, кого любишь, свои худшие стороны. Если они принимают тебя такой, значит, ты не зря рядом с ними. ",
    "'Ещё одной темной ночью, каждый твой вдох. И каждый твой выдох, кричит об одном. Еще одним холодным утром - руки без слов. Кричат об одном - это любовь.' - Scriptonit",
    "The way your lips curve into a smile makes me crave the taste of your kisses.",
    "Your gaze is a seductive dance, inviting me into a world where our desires waltz together💜",
    "I want to be the reason your heart races and your breath catches, a reminder that you are alive with love.",
    "Our love is a fire that refuses to be tamed, burning brighter with each shared glance and touch.",
    "You're not just a star in my sky; you're the entire galaxy that pulls me into the depths of passion.",
    "I crave the intoxicating taste of your love, a potion that leaves me drunk on the ecstasy of our connection",
    "I'm not here to play games; I'm here to claim the love that's rightfully mine and shower you with all the passion I possess.",
    "I'll chase away your doubts like shadows in the night, leaving only the undeniable certainty of our love.",
    "Our love story is written in the stars, and I'm determined to make every chapter more intense and unforgettable than the last.",
    "I don't want a piece of your heart; I want the whole damn thing because anything less would be a compromise I'm not willing to make.",
    "I'm not here to be a part of your world; I'm here to become your world, where everything else pales in comparison to our connection.",
    "Consider me the storm that sweeps through your life, dismantling the ordinary and making space for the extraordinary love we share.",
    "I'm not asking for your love; I'm claiming it as a birthright, an undeniable truth that we're destined to be entwined.",
    "Your body is a masterpiece, and I find myself getting lost in the intricate details, each curve and contour a canvas of desire.",
    "The way you move is like a seductive dance, and I can't help but be captivated by the rhythm of your every step!",
    "Your scent lingers on my skin, driving me wild with anticipation for the next time I get to breathe in the intoxicating essence of you!",
    "In the quiet moments, I find my thoughts drifting to the way your touch ignites a fire within me, a flame that only grows with every shared embrace!",
    "Our love is a timeless tale, and every moment spent with you is a chapter I never want to end💜",
    "Every day with you feels like a page from a fairytale, and I can't wait to discover the magical chapters that lie ahead.",
    "Даже звезды так сильно не сияют как мои глаза при виде тебя!",
    "Your beautiful smile brightens my day.",
    " You have blessed my life with peace and love!",
    "No matter who is in the room, I always find myself staring at you.",
    " All my dreams came true when I met you.",
    "There is ordinary, and then there is you!",
    "You are crazy for always thinking outside the box, but your ideas consistently work!",
    "Luckily, you are not a drug. Because I would be a nasty addict, and would certainly make you pay for rehab.",

]   
    //Sending random hug 
    //var randomIndex = Math.floor(Math.random() * quotes.length)
    //randomizing the function 
    api.onText(/\/hugme/, function(msg, match) {
    var fromId = msg.from.id;
    api.sendMessage(fromId, quotes[Math.floor(Math.random() * quotes.length)]);
});


console.log("sLyr@ck's Bot has started. Start conversation in your Telegram.");

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
