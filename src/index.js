/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/**
 * This simple sample has no external dependencies or session management, and shows the most basic
 * example of how to create a Lambda function for handling Alexa Skill requests.
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask Space Geek for a space fact"
 *  Alexa: "Here's your space fact: ..."
 */

/**
 * App ID for the skill
 */
var APP_ID = "amzn1.ask.skill.4011cfe8-015d-475a-b344-15088b777bc9"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

/**
 * Array containing space facts.
 */
var FACTS = [
    "You have very smooth hair.",
    "You deserve a promotion.",
    "Good effort!",
    "What a fine sweater!",
    "I appreciate all of your opinions.",
    "I like your style.",
    "Your T-shirt smells fresh.",
    "I love what you've done with the place.",
    "You are like a spring flower; beautiful and vivacious.",
    "I am utterly disarmed by your wit.",
    "I really enjoy the way you pronounce the word 'ruby'.",
    "You complete me.",
    "Well done!",
    "I like your Facebook status.",
    "That looks nice on you.",
    "I like those shoes more than mine.",
    "Nice motor control!",
    "You have a good taste in websites.",
    "Your mouse told me that you have very soft hands.",
    "You are full of youth.",
    "I like your jacket.",
    "I like the way you move.",
    "You have a good web-surfing stance.",
    "You should be a poster child for poster children.",
    "Nice manners!",
    "I appreciate you more than Santa appreciates chimney grease.",
    "I wish I was your mirror.",
    "I find you to be a fountain of inspiration.",
    "You have perfect bone structure.",
    "I disagree with anyone who disagrees with you.",
    "Way to go!",
    "Have you been working out?",
    "With your creative wit, I'm sure you could come up with better compliments than me.",
    "I like your socks.",
    "You are so charming.",
    "Your cooking reminds me of my mother's.",
    "You're tremendous!",
    "You deserve a compliment!",
    "Hello, good looking.",
    "Your smile is breath taking.",
    "How do you get your hair to look that great?",
    "You are quite strapping.",
    "I am grateful to be blessed by your presence.",
    "Say, aren't you that famous model from TV?",
    "Take a break; you've earned it.",
    "Your life is so interesting!",
    "The sound of your voice sends tingles of joy down my back.",
    "I enjoy spending time with you.",
    "I would share my dessert with you.",
    "You can have the last bite.",
    "May I have this dance?",
    "I would love to visit you, but I live on the Internet.",
    "I love the way you click.",
    "You're invited to my birthday party.",
    "All of your ideas are brilliant!",
    "If I freeze, it's not a computer virus.  I was just stunned by your beauty.",
    "You're spontaneous, and I love it!",
    "You should try out for everything.",
    "You make my data circuits skip a beat.",
    "You are the gravy to my mashed potatoes.",
    "You get an A+!",
    "I'm jealous of the other websites you visit, because I enjoy seeing you so much!",
    "I would enjoy a roadtrip with you.",
    "If I had to choose between you or Mr. Rogers, it would be you.",
    "I like you more than the smell of Grandma's home-made apple pies.",
    "You would look good in glasses OR contacts.",
    "Let's do this again sometime.",
    "You could go longer without a shower than most people.",
    "I feel the need to impress you.",
    "I would trust you to pick out a pet fish for me.",
    "I'm glad we met.",
    "Do that again!",
    "Will you sign my yearbook?",
    "You're so smart!",
    "We should start a band.",
    "You're cooler than ice-skating Fonzi.",
    "I made this website for you.",
    "I heard you make really good French Toast.",
    "You're cooler than Pirates and Ninjas combined.",
    "Oh, I can keep going.",
    "I like your pants.",
    "You're pretty groovy, dude.",
    "When I grow up, I want to be just like you.",
    "I told all my friends about how cool you are.",
    "You can play any prank, and get away with it.",
    "You have ten of the best fingers I have ever seen!",
    "I can tell that we are gonna be friends.",
    "I just want to gobble you up!",
    "You're sweeter than than a bucket of bon-bons!",
    "Treat yourself to another compliment!",
    "You're pretty high on my list of people with whom I would want to be stranded on an island.",
    "You're #1 in my book!",
    "Well played.",
    "You are well groomed.",
    "You could probably lead a rebellion.",
    "Is it hot in here or is it just you?",
    "<3",
    "You are more fun than a Japanese steakhouse.",
    "Your voice is more soothing than Morgan Freeman's.",
    "I like your sleeves. They're real big.",
    "You could be drinking whole milk if you wanted to.",
    "You're so beautiful, you make me walk into things when I look at you.",
    "I support all of your decisions.",
    "You are as fun as a hot tub full of chocolate pudding.",
    "I usually don't say this on a first date, but will you marry me?",
    "I don't speak much English, but with you all I really need to say is beautiful.",
    "Being awesome is hard, but you'll manage.",
    "Your skin is radiant.",
    "You will still be beautiful when you get older.",
    "You could survive a zombie apocalypse.",
    "You make me :)",
    "I wish I could move your furniture.",
    "I think about you while I'm on the toilet.",
    "You're so rad.",
    "You're more fun than a barrel of monkeys.",
    "You're nicer than a day on the beach.",
    "Your glass is the fullest.",
    "I find you very relevant.",
    "You look so perfect.",
    "The only difference between exceptional and amazing is you.",
    "Last night I had the hiccups, and the only thing that comforted me to sleep was repeating your name over and over.",
    "I like your pearly whites!",
    "Your eyebrows really make your pretty eyes stand out.",
    "Shall I compare thee to a summer's day?  Thou art more lovely and more temperate.",
    "I love you more than bacon!",
    "You intrigue me.",
    "You make me think of beautiful things, like strawberries.",
    "I would share my fruit Gushers with you.",
    "You're more aesthetically pleasant to look at than that one green color on this website.",
    "Even though this goes against everything I know, I think I'm in love with you.",
    "You're more fun than bubble wrap.",
    "Your smile could illuminate the depths of the ocean.",
    "You make babies smile.",
    "You make the gloomy days a little less gloomy.",
    "You are warmer than a Snuggie.",
    "You make me feel like I am on top of the world.",
    "Playing video games with you would be fun.",
    "Let's never stop hanging out.",
    "You're more cuddly than the Downy Bear.",
    "I would do your taxes any day.",
    "You are a bucket of awesome.",
    "You are the star of my daydreams.",
    "If you really wanted to, you could probably get a bird to land on your shoulder and hang out with you.",
    "My mom always asks me why I can't be more like you.",
    "You look great in this or any other light.",
    "You listen to the coolest music.",
    "You and Chuck Norris are on equal levels.",
    "Your body fat percentage is perfectly suited for your height.",
    "I am having trouble coming up with a compliment worthy enough for you.",
    "If we were playing kickball, I'd pick you first.",
    "You're cooler than ice on the rocks.",
    "You're the bee's knees.",
    "I wish I could choose your handwriting as a font.",
    "You definitely know the difference between your and you're.",
    "You have good taste.",
    "I named all my appliances after you.",
    "Your mind is a maze of amazing!",
    "Don't worry about procrastinating on your studies, I know you'll do great!",
    "I like your style!",
    "Hi, I'd like to know why you're so beautiful.",
    "If I could count the seconds I think about you, I will die in the process!",
    "If you were in a chemistry class with me, it would be 10x less boring.",
    "If you broke your arm, I would carry your books for you.",
    "I love the way your eyes crinkle at the corners when you smile.",
    "You make me want to be the person I am capable of being.",
    "You're a skilled driver.",
    "You are the rare catalyst to my volatile compound.",
    "You're a tall glass of water!",
    "I'd like to kiss you. Often.",
    "You are the wind beneath my wings.",
    "Looking at you makes my foot cramps go away instantaneously.",
    "I like your face.",
    "You are a champ!",
    "You are infatuating.",
    "Even my cat likes you.",
    "There isn't a thing about you that I don't like.",
    "You're so cool, that on a scale of from 1-10, you're elevendyseven.",
    "OH, you OWN that ponytail.",
    "Your shoes are untied. But for you, it's cool.",
    "You have the best laugh ever.",
    "We would enjoy a cookout with you!",
    "Your name is fun to say.",
    "I love you more than a drunk college student loves tacos.",
    "My camera isn't worthy to take your picture.",
    "You are the sugar on my rice krispies.",
    "Nice belt!",
    "I could hang out with you for a solid year and never get tired of you.",
    "You're real happening in a far out way.",
    "I bet you could take a punch from Mike Tyson.",
    "Your feet are perfect size!",
    "You have very nice teeth.",
    "Can you teach me how to be as awesome as you?",
    "Our awkward silences aren't even awkward.",
    "Don't worry. You'll do great.",
    "I enjoy you more than a good sneeze. A GOOD one.",
    "You could invent words and people would use them.",
    "You have powerful sweaters.",
    "If you were around, I would enjoy doing my taxes.",
    "You look like you like to rock.",
    "You are better than unicorns and sparkles combined!",
    "You are the watermelon in my fruit salad. Yum!",
    "I dig you.",
    "You look better whether the lights are on or off.",
    "I am enchanted to meet you.",
    "I bet even your farts smell good.",
    "I would trust my children with you.",
    "You make me forget what I was going to...",
    "Your smile makes me smile.",
    "I'd wake up for an 8 a.m. class just so I could sit next to you.",
    "You have the moves like Jagger.",
    "You're so hot that you denature my proteins.",
    "All I want for Christmas is you!",
    "You are the world's greatest hugger.",
    "You have a perfectly symmetrical face.",
    "If you were in a movie you wouldn't get killed off.",
    "Your red ruby lips and wiggly hips make me do flips!",
    "I definitely wouldn't kick you out of bed.",
    "They should name an ice cream flavor after you.",
    "You're the salsa to my tortilla chips. You spice up my life!",
    "You smell nice.",
    "You don't need make-up, make-up needs you.",
    "Me without you is like a nerd without braces, a shoe with out laces, asentencewithoutspaces.",
    "Just knowing someone as cool as you will read this makes me smile.",
    "I would volunteer to take your place in the Hunger Games.",
    "If I had a nickel for everytime you did something stupid, I'd be broke!",
    "I'd let you steal the white part of my Oreo.",
    "I'd trust you to perform open heart surgery on me... blindfolded!",
    "Nice butt! - According to your toilet seat",
    "Perfume strives to smell like you.",
    "I've had the time of my life, and I owe it all to you!",
    "The Force is strong with you.",
    "I like the way your nostrils are placed on your nose.",
    "I would hold the elevator doors open for you if they were closing.",
    "Your every thought and motion contributes to the beauty of the universe.",
    "You make me want to frolic in a field.",
    "You are such a good partner/friend…",
    "Good for you! (“Good on you” in Australia)",
    "You’re a great hugger/player/partner/child/worker/boss/mom/dad/brother/sister",
    "You smell so good! (I use this a lot, because I always pay attention to the smell of people I hug)",
    "You have a special way of…",
    "You have such (a) beautiful eyes/hair/lips/shirt/coat/smile",
    "It is amazing what you have done with this place/room/website/car",
    "Well done!",
    "What a great idea!",
    "How creative! You’re so creative!",
    "You look great!",
    "You look awesome!",
    "You look vibrant and healthy!",
    "It looks nice on you!",
    "You are such a great cook!",
    "You are so good with baking",
    "Your cakes are so special",
    "You always make such tasty desserts",
    "You look so young",
    "Your skin is glowing",
    "Your hair is so shiny",
    "You are so good at…",
    "Your attitude is inspiring/appealing/touching",
    "You have very good/useful skills",
    "Wow, that’s beautiful!",
    "You deserve it!",
    "You’ve worked so hard, you must be very proud of yourself!",
    "Great job!",
    "You have a great way of explaining it",
    "You demonstrate it so well",
    "It is easy to follow your instructions",
    "You are a great teacher",
    "You are a great listener",
    "Brilliant!",
    "You have such a contagious laugh.",
    "You have such a happy smile",
    "You are such an inspiration",
    "You’re so talented",
    "You’re such a model for (behavior)",
    "You’re a great dancer",
    "It is a delight to watch you dance/sing/act",
    "Your choice of Facebook profile picture is wonderful",
    "You self-control is admirable",
    "Your children are so talented/beautiful/kind",
    "Your children are so great because of their parents",
    "Good morning gorgeous!",
    "You are a fountain of knowledge",
    "You are amazing/charming/awesome!",
    "How do you get your hair to look like that? (in admiration)",
    "You make it so easy to listen to you",
    "You are a great storyteller",
    "You have such valuable experience",
    "You had such interesting life",
    "You have been in so many places around the world. It is fascinating!",
    "You are so smart!",
    "You’re so approachable",
    "You are cool!",
    "You are so positive",
    "There is such a great feeling around you",
    "It’s perfect!",
    "You are so supportive, thanks!",
    "You have such an interesting name",
    "It’s fun to be around you.",
    "It is a pleasure to be your friend/son/daughter/dad/mum",
    "It is an honor to be your friend/son/father/mother",
    "You have a warm voice",
    "You could be a model/radio announcer/comedian",
    "You are as good as (someone famous)",
    "You’re a great kisser/lover/partner",
    "What a great success!",
    "Wow, that’s a great achievement! I’m so proud of you!",
    "That’s a brilliant idea!",
    "You’re so trustworthy",
    "I have heard you are very good with…",
    "You are a great leader!",
    "I have lots to learn from you!",
    "You can do that. You are good with things like that",
    "Your music collection is amazing/fantastic/great",
    "It is fun to hang around with you",
    "You have such a good taste in clothes/furniture/decorations",
    "Wow, you know so much on that topic!",
    "You are the expert on this topic",
    "You look great in this shirt/dress",
    "You’re glasses fit perfectly on your face",
    "Nice shirt/belt/skirt/hat",
    "This hat/shirt/coat you are wearing is so YOU!",
    "The camera loves you (to someone you are taking photos of)",
    "You are so photogenic",
    "You look better than your photo",
    "You are so flexible. It makes it easy to work with you",
    "Wow, it required lots of courage to do that. You are so brave!",
    "You are bubbly and happy! It is inspiring! It is contagious! It is awesome!",
    "You kept so clam in such stressful time. That was impressive",
    "It was so kind of you to…",
    "That was a clever solution",
    "You did it in such a diplomatic way",
    "That’s very generous of you to…",
    "It is fantastic!",
    "You are so graceful",
    "You are very ethical and trustworthy",
    "People will follow you in this quest",
    "You are very honest",
    "Wow, that was quick. Well done!",
    "You are very perceptive",
    "Your methods really work",
    "You are punctual, it makes it pleasure to work with you",
    "Your work has a superior quality",
    "What you did is stunning!",
    "You are sharp!",
    "You are a great problem solver",
    "You are very responsible",
    "Your resilience is remarkable",
    "You are wise",
    "You are very keen. It is a great quality!",
    "Your imagination is inspiring",
    "Your input is valuable",
    "You’re a great team player",
    "You are an asset to our company",
    "You are very clever",
    "Your idea is very clever",
    "What a clever way to…",
    "You are strong!",
    "You are so funny",
    "You are out of this world",
    "You make a great difference",
    "Your optimism is wonderful",
    "You sound very confident about it. Go for it!",
    "You are an excellent example of…",
    "You are so sweet",
    "You are ageless",
    "You are cute/you are so cute",
    "Your (song/speech/book/story) was moving",
    "You are such fun",
    "You are very resourceful. It is a great quality",
    "It is so romantic",
    "You are very committed",
    "You are peaceful. It feels great to be around you",
    "You are usually right. Trust yourself!",
    "That was an elegant solution",
    "You have a free spirit",
    "You are a genius",
    "You make the world a better place just by being in it",
    "It is great to have you around",
    "It is a delight to watch you grow",
    "It is such pleasure to meet you",
    "Well said!",
    "Well presented",
    "Well spoken",
    "Unbelievable!",
    "Terrific!",
    "You made it happen!",
    "How thoughtful of you!",
    "That was very considerate!",
    "You’ve outdone yourself!",
    "Keep up the good work!",
    "Amazing effort. You must be proud of yourself!",
    "You are very special!",
    "You have it in you!",
    "How original",
    "Phenomenal!",
    "Suburb!",
    "Outstanding!",
    "Marvelous!",
    "You’re a good sport!",
    "Excellent work! It couldn’t be better!",
    "Wow, you’re a great reader",
    "You have a great collection of books",
    "You have so many friends. It says a lot about you",
    "Your experience/collection/is very impressive",
    "Great question!",
    "Great answer!",
    "That’s a great discovery!",
    "Remarkable effort",
    "You are the best!",
    "Magnificent!",
    "You are super!",
    "Nice one!",
    "You’ve made a great progress!",
    "You rock!",
    "You are very patient",
    "You are an angel",
    "You are a life savior!"
];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * SpaceGeek is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var Fact = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Fact.prototype = Object.create(AlexaSkill.prototype);
Fact.prototype.constructor = Fact;

Fact.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    //console.log("onSessionStarted requestId: " + sessionStartedRequest.requestId + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

Fact.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    //console.log("onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewFactRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
Fact.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    //console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

Fact.prototype.intentHandlers = {
    "GetNewCompliment": function (intent, session, response) {
        handleNewFactRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say compliment me or tell me something nice, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye buddy";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/**
 * Gets a random new fact from the list and returns to the user.
 */
function handleNewFactRequest(response) {
    // Get a random space fact from the space facts list
    var factIndex = Math.floor(Math.random() * FACTS.length);
    var randomFact = FACTS[factIndex];

    // Create speech output
    var speechOutput = randomFact;
    var cardTitle = "Your compliment";
    response.tellWithCard(speechOutput, cardTitle, speechOutput);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the SpaceGeek skill.
    var fact = new Fact();
    fact.execute(event, context);
};

