// The pool of 30 questions
const questions = [
    {
        question: "If you were a superhero, what would be your greatest weakness?",
        answers: [
            { text: "Free food", trait: "flirty" },
            { text: "My own reflection", trait: "vain" },
            { text: "An existential crisis every Monday", trait: "sarcastic" },
            { text: "Playing this game!", trait: "stupid" }
        ]
    },
    {
        question: "What’s your spirit animal?",
        answers: [
            { text: "A cat that ignores everyone", trait: "sarcastic" },
            { text: "A caffeine-addicted squirrel", trait: "energetic" },
            { text: "A dragon... obviously", trait: "fantasy" },
            { text: "A potato. Just a potato", trait: "lazy" }
        ]
    },
    {
        question: "What do you do first thing in the morning?",
        answers: [
            { text: "Check my phone", trait: "tech-savvy" },
            { text: "Go back to sleep", trait: "lazy" },
            { text: "Admire myself in the mirror", trait: "stupid" },
            { text: "Plan how to take over the world", trait: "sarcastic" }
        ]
    },
    {
        question: "If you could live in any fantasy world, which would it be?",
        answers: [
            { text: "Middle-earth", trait: "fantasy" },
            { text: "Narnia", trait: "dreamy" },
            { text: "Hogwarts", trait: "magical" },
            { text: "I’m fine where I am, thanks", trait: "lazy" }
        ]
    },
    {
        question: "What's your guilty pleasure?",
        answers: [
            { text: "Eating ice cream at midnight", trait: "flirty" },
            { text: "Watching reality TV", trait: "vain" },
            { text: "Binge-watching fantasy series", trait: "fantasy" },
            { text: "Procrastinating on everything", trait: "lazy" }
        ]
    },
    {
        question: "If you were an animal, what would you be?",
        answers: [
            { text: "A sloth", trait: "lazy" },
            { text: "A lion", trait: "confident" },
            { text: "A unicorn", trait: "fantasy" },
            { text: "A cat", trait: "sarcastic" }
        ]
    },
    {
        question: "What’s your ideal vacation?",
        answers: [
            { text: "A trip to a tropical beach", trait: "flirty" },
            { text: "Exploring a mystical forest", trait: "fantasy" },
            { text: "A staycation on the couch", trait: "stupid" },
            { text: "Shopping in a big city", trait: "vain" }
        ]
    },
    {
        question: "If you had a superpower, what would it be?",
        answers: [
            { text: "Invisibility", trait: "mysterious" },
            { text: "Flying", trait: "fantasy" },
            { text: "Mind reading", trait: "flirty" },
            { text: "Super strength", trait: "confident" }
        ]
    },
    {
        question: "You find a magical lamp. What do you wish for?",
        answers: [
            { text: "Endless wealth", trait: "vain" },
            { text: "Superpowers", trait: "fantasy" },
            { text: "World peace", trait: "dreamy" },
            { text: "More naps", trait: "lazy" }
        ]
    },
    {
        question: "Which describes your personality?",
        answers: [
            { text: "Confident and charming", trait: "flirty" },
            { text: "Mysterious and reserved", trait: "mysterious" },
            { text: "Funny and sarcastic", trait: "sarcastic" },
            { text: "Relaxed and laid-back", trait: "lazy" }
        ]
    },
    {
        question: "If you were an object, what would you be?",
        answers: [
            { text: "A mirror", trait: "vain" },
            { text: "A crystal ball", trait: "mysterious" },
            { text: "A magic wand", trait: "fantasy" },
            { text: "A comfy couch", trait: "lazy" }
        ]
    },
    {
        question: "Pick a sidekick for your epic journey:",
        answers: [
            { text: "A talking cat", trait: "sarcastic" },
            { text: "A magical dragon", trait: "fantasy" },
            { text: "A robot assistant", trait: "tech-savvy" },
            { text: "A unicorn", trait: "flirty" }
        ]
    },
    {
        question: "What would you bring to a desert island?",
        answers: [
            { text: "A book on how to survive", trait: "practical" },
            { text: "A portable charger", trait: "tech-savvy" },
            { text: "A hammock", trait: "lazy" },
            { text: "A magical artifact", trait: "fantasy" }
        ]
    },
    {
        question: "You’re hosting a party. What’s the theme?",
        answers: [
            { text: "Masquerade", trait: "mysterious" },
            { text: "Tropical luau", trait: "flirty" },
            { text: "Fantasy creatures", trait: "fantasy" },
            { text: "Pajama party", trait: "lazy" }
        ]
    },
    {
        question: "How do you handle stress?",
        answers: [
            { text: "I procrastinate", trait: "lazy" },
            { text: "I make jokes to lighten the mood", trait: "sarcastic" },
            { text: "I go for a walk in nature", trait: "dreamy" },
            { text: "I meditate or relax", trait: "mysterious" }
        ]
    },
    {
        question: "What's your ideal pet?",
        answers: [
            { text: "A loyal dog", trait: "confident" },
            { text: "A mischievous cat", trait: "sarcastic" },
            { text: "A magical creature", trait: "fantasy" },
            { text: "No pet, just my couch", trait: "lazy" }
        ]
    },
    {
        question: "What's your dream job?",
        answers: [
            { text: "Influencer", trait: "vain" },
            { text: "Astronaut", trait: "tech-savvy" },
            { text: "Wizard", trait: "fantasy" },
            { text: "Professional napper", trait: "lazy" }
        ]
    },
    {
        question: "What would you do if you found a treasure chest?",
        answers: [
            { text: "Open it immediately", trait: "confident" },
            { text: "Walk away, it’s probably cursed", trait: "mysterious" },
            { text: "Check if it’s a portal to another world", trait: "fantasy" },
            { text: "Take a nap on top of it", trait: "lazy" }
        ]
    },
    {
        question: "Which flavor best describes you?",
        answers: [
            { text: "Sweet and charming", trait: "flirty" },
            { text: "Bitter but lovable", trait: "sarcastic" },
            { text: "Savory and rich", trait: "confident" },
            { text: "Lazy vanilla", trait: "lazy" }
        ]
    },
    {
        question: "What’s your go-to dance move at a party?",
        answers: [
            { text: "The moonwalk", trait: "stupid" },
            { text: "The robot", trait: "tech-savvy" },
            { text: "Waving like an inflatable tube man", trait: "sarcastic" },
            { text: "I don’t dance, I nap", trait: "lazy" }
        ]
    },
    {
        question: "What's your motto?",
        answers: [
            { text: "Seize the day", trait: "confident" },
            { text: "Take it easy", trait: "lazy" },
            { text: "Sarcasm is my superpower", trait: "sarcastic" },
            { text: "Magic is real", trait: "fantasy" }
        ]
    },
    {
        question: "What’s your favorite time of day?",
        answers: [
            { text: "Morning", trait: "energetic" },
            { text: "Afternoon", trait: "confident" },
            { text: "Nighttime", trait: "mysterious" },
            { text: "Anytime I can nap", trait: "lazy" }
        ]
    },
    {
        question: "What’s your idea of fun?",
        answers: [
            { text: "Going on an adventure", trait: "fantasy" },
            { text: "Playing video games", trait: "tech-savvy" },
            { text: "Relaxing with a good book", trait: "dreamy" },
            { text: "Taking a long nap", trait: "lazy" }
        ]
    },
    {
        question: "What’s your favorite kind of weather?",
        answers: [
            { text: "Sunny and warm", trait: "flirty" },
            { text: "Rainy and mysterious", trait: "mysterious" },
            { text: "Stormy and dramatic", trait: "confident" },
            { text: "Cloudy and sleepy", trait: "lazy" }
        ]
    },
    {
        question: "What’s your ideal day off?",
        answers: [
            { text: "Going on a spontaneous trip", trait: "adventurous" },
            { text: "Binge-watching movies", trait: "lazy" },
            { text: "Exploring new places", trait: "curious" },
            { text: "Taking a long nap", trait: "relaxed" }
        ]
    },
    {
        question: "Which mystical creature do you relate to most?",
        answers: [
            { text: "A phoenix, rising from the ashes", trait: "resilient" },
            { text: "A unicorn, magical and unique", trait: "dreamer" },
            { text: "A dragon, fierce and powerful", trait: "determined" },
            { text: "A siren, luring people with charm", trait: "flirty" }
        ]
    },
    {
        question: "What’s your go-to comfort food?",
        answers: [
            { text: "Pizza", trait: "fun" },
            { text: "Ice cream", trait: "flirty" },
            { text: "Soup", trait: "stupid" },
            { text: "Cookies", trait: "sweet" }
        ]
    },
    {
        question: "How do you prefer to spend your evenings?",
        answers: [
            { text: "Reading a good book", trait: "intellectual" },
            { text: "Watching Netflix", trait: "relaxed" },
            { text: "Going for a walk", trait: "thoughtful" },
            { text: "Partying with friends", trait: "flirty" }
        ]
    },
    {
        question: "What’s your secret talent?",
        answers: [
            { text: "Making people laugh", trait: "funny" },
            { text: "Fixing things", trait: "practical" },
            { text: "Cooking", trait: "creative" },
            { text: "Taking long naps", trait: "lazy" }
        ]
    }
];

// Randomly shuffle the array of questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Select 10 random questions from the pool of 30
shuffleArray(questions);
const quizQuestions = questions.slice(0, 10); // Get the first 10 questions

// Set up variables to track the quiz progress
let currentQuestionIndex = 0;
let results = {
    flirty: 0,
    sarcastic: 0,
    fantasy: 0,
    lazy: 0,
    stupid: 0
    // Add more traits as needed
};

// Function to display the current question and answer options
function showQuestion(question) {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <h2 class="mb-4">${question.question}</h2>
        <button class="btn btn-primary btn-block mb-3" onclick="selectAnswer('${question.answers[0].trait}')">${question.answers[0].text}</button>
        <button class="btn btn-danger btn-block mb-3" onclick="selectAnswer('${question.answers[1].trait}')">${question.answers[1].text}</button>
        <button class="btn btn-success btn-block mb-3" onclick="selectAnswer('${question.answers[2].trait}')">${question.answers[2].text}</button>
        <button class="btn btn-warning btn-block mb-3" onclick="selectAnswer('${question.answers[3].trait}')">${question.answers[3].text}</button>
    `;
}


// Function to handle answer selection
function selectAnswer(trait) {
    results[trait]++; // Increase the count for the selected trait
    currentQuestionIndex++; // Move to the next question
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion(quizQuestions[currentQuestionIndex]); // Show the next question
    } else {
        showResults(); // If all questions are answered, show the result
    }
}

// Function to display the quiz results
function showResults() {
    const highestTrait = Object.keys(results).reduce((a, b) => results[a] > results[b] ? a : b); // Find the trait with the most selections
    console.log("Highest Trait:", highestTrait);
    const container = document.getElementById('quiz-container');
    const emojiMap = {
        'flirty': '😏💘',
        'sarcastic': '😎🧐',
        'fantasy': '🦄🧙‍♂️',
        'lazy': '😴🛋️',
        'stupid': '🤪😜',
    };
    
    const emoji = emojiMap[highestTrait] || '🤔';
    const sound = document.getElementById('resultSound');
    sound.play();

    container.classList.add('fade-in');
    
    container.innerHTML = `
        <div class="alert alert-success" role="alert">
            <h2>Your personality type is: ${highestTrait.toUpperCase()} ${emoji}</h2>
            <p>You are ${getResultDescription(highestTrait)}.</p>
        </div>
    `;
    
}

// Fun descriptions for each personality type
function getResultDescription(trait) {
    switch(trait) {
        case 'flirty':
            return "an irresistible flirt who can charm anyone!";
        case 'sarcastic':
            return "the king or queen of sarcasm, always ready with a witty comeback.";
        case 'fantasy':
            return "living in a world of dragons and magic.";
        case 'lazy':
            return "a couch potato with no regrets.";
        case 'stupid': // New custom message
            return "You're just a stupid playing this game." 
        case 'vain': 
            return "You're not a piece of waste!!"       
        default:
            return "a mystery! Even we can't figure you out.";
    }
}

// Start the quiz
showQuestion(quizQuestions[currentQuestionIndex]);
