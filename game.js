let score = 0; 
let currentQuestion = 0;
let selectedMode = "";

const allQuestions = {
    articles: [
        {
            question: "Choose the correct article: ___ apple is red.",
            answers: { a: "A", b: "An", c: "The", d: "None" },
            correctAnswer: "b"
        },
        {
            question: "Choose the correct article: ___ sun is bright.",
            answers: { a: "A", b: "An", c: "The", d: "None" },
            correctAnswer: "c"
        },
        {
            question: "Choose the correct article: ___ cat is sleeping.",
            answers: { a: "A", b: "An", c: "The", d: "None" },
            correctAnswer: "a"
        },
        {
            question: "Choose the correct article: ___ Eiffel Tower is in Paris.",
            answers: { a: "A", b: "An", c: "The", d: "None" },
            correctAnswer: "c"
        },
        {
            question: "He is ___ honest person.",
            answers: { a: "A", b: "An", c: "The", d: "None" },
            correctAnswer: "b"
        },
        {
            question: "___ water is essential for life.",
            answers: { a: "A", b: "An", c: "The", d: "None" },
            correctAnswer: "d"
        },
        {
            question: "___ stars are beautiful tonight.",
            answers: { a: "A", b: "An", c: "The", d: "None" },
            correctAnswer: "c"
        },
        {
            question: "She wants to buy ___ umbrella.",
            answers: { a: "A", b: "An", c: "The", d: "None" },
            correctAnswer: "b"
        },
        {
            question: "___ university is nearby.",
            answers: { a: "A", b: "An", c: "The", d: "None" },
            correctAnswer: "a"
        },
        {
            question: "He lives in ___ United States.",
            answers: { a: "A", b: "An", c: "The", d: "None" },
            correctAnswer: "c"
        }
    ],
    prepositions: [
        {
            question: "She is sitting ___ the chair.",
            answers: { a: "on", b: "in", c: "at", d: "under" },
            correctAnswer: "a"
        },
        {
            question: "The book is ___ the table.",
            answers: { a: "on", b: "in", c: "under", d: "above" },
            correctAnswer: "a"
        },
        {
            question: "He is going ___ the market.",
            answers: { a: "to", b: "at", c: "on", d: "in" },
            correctAnswer: "a"
        },
        {
            question: "The pen is ___ my bag.",
            answers: { a: "in", b: "on", c: "under", d: "at" },
            correctAnswer: "a"
        },
        {
            question: "The keys are ___ the drawer.",
            answers: { a: "in", b: "on", c: "at", d: "over" },
            correctAnswer: "a"
        },
        {
            question: "She walked ___ the room.",
            answers: { a: "into", b: "onto", c: "over", d: "on" },
            correctAnswer: "a"
        },
        {
            question: "He sat ___ the sofa.",
            answers: { a: "on", b: "in", c: "at", d: "over" },
            correctAnswer: "b"
        },
        {
            question: "The picture is ___ the wall.",
            answers: { a: "on", b: "in", c: "at", d: "under" },
            correctAnswer: "a"
        },
        {
            question: "She is good ___ math.",
            answers: { a: "at", b: "on", c: "in", d: "with" },
            correctAnswer: "a"
        },
        {
            question: "The car is parked ___ the house.",
            answers: { a: "in front of", b: "behind", c: "on", d: "under" },
            correctAnswer: "b"
        }
    ],
    pronouns: [
        {
            question: "___ is your name?",
            answers: { a: "What", b: "Who", c: "Where", d: "How" },
            correctAnswer: "a"
        },
        {
            question: "___ is that man?",
            answers: { a: "What", b: "Who", c: "Where", d: "Which" },
            correctAnswer: "b"
        },
        {
            question: "This is my friend. ___ name is John.",
            answers: { a: "His", b: "Her", c: "Their", d: "Our" },
            correctAnswer: "a"
        },
        {
            question: "___ are playing football.",
            answers: { a: "He", b: "She", c: "They", d: "It" },
            correctAnswer: "c"
        },
        {
            question: "I have a cat. ___ name is Kitty.",
            answers: { a: "Its", b: "His", c: "Her", d: "Their" },
            correctAnswer: "a"
        },
        {
            question: "___ is your favorite color?",
            answers: { a: "What", b: "Which", c: "Who", d: "Where" },
            correctAnswer: "a"
        },
        {
            question: "She is a doctor. ___ works at a hospital.",
            answers: { a: "He", b: "She", c: "It", d: "They" },
            correctAnswer: "b"
        },
        {
            question: "This pen belongs to me. It is ___.",
            answers: { a: "mine", b: "yours", c: "his", d: "ours" },
            correctAnswer: "a"
        },
        {
            question: "___ do you live?",
            answers: { a: "Where", b: "What", c: "Who", d: "Why" },
            correctAnswer: "a"
        },
        {
            question: "___ book is this?",
            answers: { a: "Whose", b: "Who", c: "What", d: "Which" },
            correctAnswer: "a"
        }
    ],
    pastTenses: [
        { question: "He ___ (walk) to school yesterday.", answers: { a: "walks", b: "walked", c: "walking", d: "walk" }, correctAnswer: "b" },
        { question: "They ___ (finish) their homework last night.", answers: { a: "finish", b: "finished", c: "finishing", d: "finishes" }, correctAnswer: "b" },
        { question: "She ___ (not/see) the movie last weekend.", answers: { a: "did not see", b: "does not see", c: "has not seen", d: "will not see" }, correctAnswer: "a" },
        { question: "We ___ (visit) our grandparents last summer.", answers: { a: "visits", b: "visited", c: "visiting", d: "visit" }, correctAnswer: "b" },
        { question: "I ___ (be) very tired after work.", answers: { a: "was", b: "am", c: "were", d: "is" }, correctAnswer: "a" },
        { question: "He ___ (write) a letter two days ago.", answers: { a: "writes", b: "wrote", c: "written", d: "writing" }, correctAnswer: "b" },
        { question: "They ___ (play) football last Saturday.", answers: { a: "played", b: "plays", c: "playing", d: "play" }, correctAnswer: "a" },
        { question: "The teacher ___ (give) us a lot of homework.", answers: { a: "gives", b: "gave", c: "given", d: "giving" }, correctAnswer: "b" },
        { question: "She ___ (read) the book last month.", answers: { a: "read", b: "reads", c: "reading", d: "readed" }, correctAnswer: "a" },
        { question: "I ___ (not/go) to the party.", answers: { a: "did not go", b: "does not go", c: "have not gone", d: "go" }, correctAnswer: "a" }
    ],
    irregularVerbs: [
        { question: "What is the past tense of 'eat'?", answers: { a: "ate", b: "eated", c: "eaten", d: "eating" }, correctAnswer: "a" },
        { question: "What is the past participle of 'write'?", answers: { a: "wrote", b: "written", c: "writing", d: "writes" }, correctAnswer: "b" },
        { question: "What is the past tense of 'see'?", answers: { a: "saw", b: "seen", c: "seeing", d: "see" }, correctAnswer: "a" },
        { question: "What is the past tense of 'go'?", answers: { a: "went", b: "gone", c: "going", d: "goes" }, correctAnswer: "a" },
        { question: "What is the past participle of 'come'?", answers: { a: "came", b: "come", c: "coming", d: "comes" }, correctAnswer: "b" },
        { question: "What is the past tense of 'buy'?", answers: { a: "bought", b: "buyed", c: "buy", d: "buys" }, correctAnswer: "a" },
        { question: "What is the past tense of 'drink'?", answers: { a: "drank", b: "drunk", c: "drinks", d: "drinked" }, correctAnswer: "a" },
        { question: "What is the past participle of 'take'?", answers: { a: "taked", b: "took", c: "taken", d: "takes" }, correctAnswer: "c" },
        { question: "What is the past tense of 'give'?", answers: { a: "gave", b: "given", c: "gives", d: "giving" }, correctAnswer: "a" },
        { question: "What is the past participle of 'run'?", answers: { a: "ran", b: "run", c: "running", d: "runned" }, correctAnswer: "b" }
    ],
    pluralSingular: [
        { 
            question: "What is the plural of 'child'?", 
            answers: { a: "childs", b: "children", c: "childes", d: "child" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What is the singular form of 'geese'?", 
            answers: { a: "goose", b: "goos", c: "geese", d: "gooses" }, 
            correctAnswer: "a" 
        },
        { 
            question: "What is the plural of 'man'?", 
            answers: { a: "mans", b: "men", c: "mens", d: "man" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What is the singular form of 'feet'?", 
            answers: { a: "feet", b: "foot", c: "foots", d: "feet's" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What is the plural of 'tooth'?", 
            answers: { a: "toothes", b: "teeth", c: "tooth", d: "teeths" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What is the singular form of 'mice'?", 
            answers: { a: "mice", b: "mouse", c: "mouses", d: "moose" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What is the plural of 'ox'?", 
            answers: { a: "oxes", b: "oxen", c: "ox", d: "oxs" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What is the singular form of 'women'?", 
            answers: { a: "woman", b: "women", c: "womans", d: "womens" }, 
            correctAnswer: "a" 
        },
        { 
            question: "What is the plural of 'leaf'?", 
            answers: { a: "leafs", b: "leaves", c: "leafes", d: "leaf" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What is the singular form of 'wolves'?", 
            answers: { a: "wolf", b: "wolve", c: "wolves", d: "wolfs" }, 
            correctAnswer: "a" 
        }
    ],
    synonyms: [
        { 
            question: "What is a synonym for 'happy'?", 
            answers: { a: "sad", b: "angry", c: "joyful", d: "tired" }, 
            correctAnswer: "c" 
        },
        { 
            question: "What is a synonym for 'big'?", 
            answers: { a: "large", b: "small", c: "thin", d: "tiny" }, 
            correctAnswer: "a" 
        },
        { 
            question: "What is a synonym for 'quick'?", 
            answers: { a: "slow", b: "fast", c: "weak", d: "quiet" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What is a synonym for 'angry'?", 
            answers: { a: "furious", b: "calm", c: "happy", d: "peaceful" }, 
            correctAnswer: "a" 
        },
        { 
            question: "What is a synonym for 'cold'?", 
            answers: { a: "hot", b: "warm", c: "freezing", d: "boiling" }, 
            correctAnswer: "c" 
        },
        { 
            question: "What is a synonym for 'easy'?", 
            answers: { a: "simple", b: "hard", c: "difficult", d: "complicated" }, 
            correctAnswer: "a" 
        },
        { 
            question: "What is a synonym for 'smart'?", 
            answers: { a: "intelligent", b: "dumb", c: "slow", d: "lazy" }, 
            correctAnswer: "a" 
        },
        { 
            question: "What is a synonym for 'beautiful'?", 
            answers: { a: "ugly", b: "pretty", c: "plain", d: "dull" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What is a synonym for 'strong'?", 
            answers: { a: "weak", b: "powerful", c: "frail", d: "soft" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What is a synonym for 'rich'?", 
            answers: { a: "poor", b: "wealthy", c: "broke", d: "cheap" }, 
            correctAnswer: "b" 
        }
    ],
    antonyms: [
        { 
            question: "What is an antonym for 'happy'?", 
            answers: { a: "joyful", b: "sad", c: "excited", d: "cheerful" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What is an antonym for 'big'?", 
            answers: { a: "large", b: "tiny", c: "huge", d: "wide" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What is an antonym for 'fast'?", 
            answers: { a: "quick", b: "rapid", c: "slow", d: "swift" }, 
            correctAnswer: "c" 
        },
        { 
            question: "What is an antonym for 'strong'?", 
            answers: { a: "weak", b: "powerful", c: "sturdy", d: "tough" }, 
            correctAnswer: "a" 
        },
        { 
            question: "What is an antonym for 'hot'?", 
            answers: { a: "warm", b: "cold", c: "boiling", d: "spicy" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What is an antonym for 'light'?", 
            answers: { a: "bright", b: "heavy", c: "easy", d: "soft" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What is an antonym for 'easy'?", 
            answers: { a: "simple", b: "difficult", c: "clear", d: "smooth" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What is an antonym for 'rich'?", 
            answers: { a: "poor", b: "wealthy", c: "affluent", d: "luxurious" }, 
            correctAnswer: "a" 
        },
        { 
            question: "What is an antonym for 'clean'?", 
            answers: { a: "tidy", b: "dirty", c: "neat", d: "pure" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What is an antonym for 'young'?", 
            answers: { a: "old", b: "new", c: "fresh", d: "childish" }, 
            correctAnswer: "a" 
        }
    ],
    conditionals: [
        { 
            question: "If it ___ tomorrow, we will stay home.", 
            answers: { a: "rains", b: "rained", c: "will rain", d: "rain" }, 
            correctAnswer: "a" 
        },
        { 
            question: "I would travel more if I ___ enough money.", 
            answers: { a: "have", b: "had", c: "will have", d: "has" }, 
            correctAnswer: "b" 
        },
        { 
            question: "If she had studied harder, she ___ the exam.", 
            answers: { a: "would pass", b: "would have passed", c: "will pass", d: "passes" }, 
            correctAnswer: "b" 
        },
        { 
            question: "If I ___ you, I would apologize.", 
            answers: { a: "am", b: "was", c: "were", d: "will be" }, 
            correctAnswer: "c" 
        },
        { 
            question: "He will call you if he ___ free.", 
            answers: { a: "will be", b: "is", c: "was", d: "would be" }, 
            correctAnswer: "b" 
        },
        { 
            question: "If they ___ earlier, they would have caught the train.", 
            answers: { a: "leave", b: "left", c: "had left", d: "will leave" }, 
            correctAnswer: "c" 
        },
        { 
            question: "If you heat water, it ___ into steam.", 
            answers: { a: "turns", b: "turn", c: "will turn", d: "turned" }, 
            correctAnswer: "a" 
        },
        { 
            question: "If I ___ the answer, I would tell you.", 
            answers: { a: "know", b: "knew", c: "known", d: "will know" }, 
            correctAnswer: "b" 
        },
        { 
            question: "She would be happier if she ___ her job.", 
            answers: { a: "like", b: "likes", c: "liked", d: "will like" }, 
            correctAnswer: "c" 
        },
        { 
            question: "If we ___ the bus, we will be late.", 
            answers: { a: "miss", b: "missed", c: "will miss", d: "missing" }, 
            correctAnswer: "a" 
        }
    ],
    phrasalVerbs: [
        { 
            question: "What does 'give up' mean?", 
            answers: { a: "to stop trying", b: "to start something", c: "to give someone something", d: "to keep going" }, 
            correctAnswer: "a" 
        },
        { 
            question: "What does 'break down' mean?", 
            answers: { a: "to fix something", b: "to stop working", c: "to break something", d: "to rebuild" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What does 'turn up' mean?", 
            answers: { a: "to appear", b: "to leave", c: "to look for", d: "to go out" }, 
            correctAnswer: "a" 
        },
        { 
            question: "What does 'pick up' mean?", 
            answers: { a: "to find", b: "to drop", c: "to collect", d: "to throw" }, 
            correctAnswer: "c" 
        },
        { 
            question: "What does 'run into' mean?", 
            answers: { a: "to avoid", b: "to meet unexpectedly", c: "to enter", d: "to be in trouble" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What does 'call off' mean?", 
            answers: { a: "to cancel", b: "to attend", c: "to make a call", d: "to schedule" }, 
            correctAnswer: "a" 
        },
        { 
            question: "What does 'get along' mean?", 
            answers: { a: "to argue", b: "to cooperate", c: "to dislike", d: "to separate" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What does 'set up' mean?", 
            answers: { a: "to establish", b: "to break", c: "to organize", d: "to confuse" }, 
            correctAnswer: "a" 
        },
        { 
            question: "What does 'look after' mean?", 
            answers: { a: "to ignore", b: "to take care of", c: "to supervise", d: "to challenge" }, 
            correctAnswer: "b" 
        },
        { 
            question: "What does 'go on' mean?", 
            answers: { a: "to stop", b: "to continue", c: "to quit", d: "to start" }, 
            correctAnswer: "b" 
        }
    ]
            
};

// Audio Control Variables
let isMuted = false;
const backgroundMusic = document.getElementById("background-music");

function initializeAudio() {
    if (backgroundMusic) {
        // Set initial volume
        backgroundMusic.volume = 0.5;
        
        // Set to loop
        backgroundMusic.loop = true;
        
        // Add error handling for audio
        backgroundMusic.addEventListener('error', function(e) {
            console.error('Error with audio playback:', e);
        });
    }
}

function startBackgroundMusic() {
    if (backgroundMusic && !isMuted) {
        // Attempt to play with user interaction handling
        const playPromise = backgroundMusic.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Audio playback failed:", error);
                // This can happen due to autoplay restrictions
                // You might want to add a user interaction prompt
            });
        }
    }
}

function toggleSound() {
    if (!backgroundMusic) return;
    
    isMuted = !isMuted;
    const soundIcon = document.getElementById("sound-icon");
    
    if (isMuted) {
        backgroundMusic.pause();
        if (soundIcon) soundIcon.textContent = "🔇";
    } else {
        const playPromise = backgroundMusic.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Audio playback failed:", error);
            });
        }
        if (soundIcon) soundIcon.textContent = "🔊";
    }
}

// Initialize everything when the document loads
document.addEventListener("DOMContentLoaded", function() {
    // Initialize audio
    initializeAudio();
    
    // Automatically start background music
    startBackgroundMusic();
    
    // Sound toggle button
    const soundToggle = document.getElementById("sound-toggle");
    if (soundToggle) {
        soundToggle.addEventListener("click", toggleSound);
    }

    // Start button
    const startBtn = document.getElementById("startBtn");
    if (startBtn) {
        startBtn.addEventListener("click", showModeSelection);
    }
});

function showModeSelection() {
    // Hide home page and show mode selection
    document.getElementById("home-page").style.display = "none";
    document.getElementById("mode-selection").style.display = "block";
}

function selectMode(mode) {
    selectedMode = mode;
    document.getElementById("mode-selection").style.display = "none";
    document.getElementById("question-page").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const questionObj = allQuestions[selectedMode][currentQuestion];
    document.getElementById("question-text").innerText = questionObj.question;
    const buttons = document.querySelectorAll(".answer-btn");
    buttons[0].innerText = `a) ${questionObj.answers.a}`;
    buttons[1].innerText = `b) ${questionObj.answers.b}`;
    buttons[2].innerText = `c) ${questionObj.answers.c}`;
    buttons[3].innerText = `d) ${questionObj.answers.d}`;
}

function checkAnswer(answer) {
    const correctAnswer = allQuestions[selectedMode][currentQuestion].correctAnswer;
    const feedbackText = document.getElementById("feedback-text");

    // Reset kelas animasi sebelumnya
    feedbackText.classList.remove("correct-answer", "wrong-answer");

    if (answer === correctAnswer) {
        score++;
        feedbackText.innerText = "Correct! Well done.";
        feedbackText.classList.add("correct-answer");
    } else {
        feedbackText.innerText = `Oops! The correct answer is ${correctAnswer.toUpperCase()}.`;
        feedbackText.classList.add("wrong-answer");
    }

    document.getElementById("feedback-page").style.display = "block";
    document.getElementById("question-page").style.display = "none";
    if (answer === correctAnswer) {
        document.getElementById("correct-sound").play();
    } else {
        document.getElementById("wrong-sound").play();
    }
    
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < 10) {
        document.getElementById("feedback-page").style.display = "none";
        document.getElementById("question-page").style.display = "block";
        showQuestion();
    } else {
        showFinalScore();
    }
    function showFinalScore() {
        // Menghitung skor dalam persentase
        let percentage = (score / 10) * 100;
    
        // Menentukan pesan berdasarkan skor
        let message = "";
        if (percentage === 100) {
            message = "Excellent! Perfect score!";
        } else if (percentage >= 80) {
            message = "Great job! Almost perfect!";
        } else if (percentage >= 50) {
            message = "Good effort! Keep practicing!";
        } else {
            message = "Don't give up! Try again!";
        }
    
        // Menampilkan skor di halaman
        document.getElementById("final-score").innerText = `Your Score: ${score}/10 (${percentage}%)`;
        document.getElementById("final-message").innerText = message;
    
        // Menampilkan halaman skor dan menyembunyikan halaman pertanyaan
        document.getElementById("score-page").style.display = "block";
        document.getElementById("question-page").style.display = "none";
        document.getElementById("feedback-page").style.display = "none";
    }
    

}

function restartGame() {
    // Reset game state
    score = 0;
    currentQuestion = 0;
    selectedMode = "";

    // Reset UI elements - show home page first
    document.getElementById("score-page").style.display = "none";
    document.getElementById("question-page").style.display = "none";
    document.getElementById("mode-selection").style.display = "none";
    document.getElementById("home-page").style.display = "block";

    // Make sure mode selection is visible inside home page
    const modeSelection = document.getElementById("mode-selection");
    if (modeSelection) {
        modeSelection.style.display = "block";
    }

    // Handle background music
    if (backgroundMusic) {
        // Only restart music if it's not muted
        if (!isMuted) {
            backgroundMusic.currentTime = 0;
            backgroundMusic.play().catch(error => {
                console.log("Audio playback failed:", error);
            });
        }
    }
}

// Initialize everything when the document loads
document.addEventListener("DOMContentLoaded", function() {
    // Initialize audio
    initializeAudio();
    
    // Automatically start background music
    startBackgroundMusic();
    
    // Sound toggle button
    const soundToggle = document.getElementById("sound-toggle");
    if (soundToggle) {
        soundToggle.addEventListener("click", toggleSound);
    }

    // Volume slider
    const volumeSlider = document.getElementById("volume-slider");
    if (volumeSlider) {
        volumeSlider.addEventListener("input", function() {
            backgroundMusic.volume = volumeSlider.value;
        });
    }

    // Start button
    const startBtn = document.getElementById("startBtn");
    if (startBtn) {
        startBtn.addEventListener("click", showModeSelection);
    }
});