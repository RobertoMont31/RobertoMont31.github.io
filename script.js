// Game Data
const gameData = [
    {
        question: "Empecemos suaves;\n¿Cuál es mi banda favorita?",
        options: ["A) Las wawas", "B) Sleep Token", "C) Yo no tengo favoritos", "D) La Taylor"],
        correct: 1
    },
    {
        question: "En nuestra primera cita,\n¿Qué perdiste?",
        options: ["A) Un anillo", "B) La vergüenza", "C) La suela de tu bota", "D) Unos besos"],
        correct: 2
    },
    {
        question: "¿Cuál sería mi mascota?",
        options: ["A) Un dragón", "B) Un perro", "C) Un gato", "D) Una tarantula"],
        correct: 0
    },
    {
        question: "¿A cuál erigirías de los siguientes?",
        options: ["A) Mr Darcy", "B) Xaden Riorson", "C) Kelsier", "D) A Mi"],
        correct: 3
    }
];

// Game State
let currentLevel = 0;
let isAnswering = false;

// DOM Elements
const startMenu = document.getElementById('startMenu');
const gameScreen = document.getElementById('gameScreen');
const endScreen = document.getElementById('endScreen');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const levelTitle = document.getElementById('levelTitle');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackMessage = document.getElementById('feedbackMessage');

// Event Listeners
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', () => {
    endScreen.classList.remove('active');
    startMenu.classList.add('active');
    currentLevel = 0;
    isAnswering = false;
});

// Functions
function startGame() {
    currentLevel = 0;
    isAnswering = false;
    startMenu.classList.remove('active');
    endScreen.classList.remove('active');
    gameScreen.classList.add('active');
    loadLevel();
}

function loadLevel() {
    const level = gameData[currentLevel];
    levelTitle.textContent = `LEVEL ${currentLevel + 1}`;
    questionText.textContent = level.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create option buttons
    level.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'retro-button option-button';
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index, level.correct));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex, correctIndex) {
    if (isAnswering) return;
    isAnswering = true;
    
    const options = document.querySelectorAll('.option-button');
    options.forEach(btn => btn.classList.add('disabled'));
    
    const selectedButton = options[selectedIndex];
    
    if (selectedIndex === correctIndex) {
        // Correct answer
        selectedButton.classList.add('correct');
        showFeedback('Correcto!!');
        
        setTimeout(() => {
            currentLevel++;
            if (currentLevel >= gameData.length) {
                endGame();
            } else {
                isAnswering = false;
                loadLevel();
            }
        }, 2000);
    } else {
        // Wrong answer
        selectedButton.classList.add('wrong');
        showFeedback('Nope!!');
        
        setTimeout(() => {
            selectedButton.classList.remove('wrong');
            options.forEach(btn => btn.classList.remove('disabled'));
            isAnswering = false;
        }, 1500);
    }
}

function showFeedback(message) {
    feedbackMessage.textContent = message;
    feedbackMessage.classList.add('show');
    
    setTimeout(() => {
        feedbackMessage.classList.remove('show');
    }, 2000);
}

function endGame() {
    gameScreen.classList.remove('active');
    endScreen.classList.add('active');
}

// Load first level on page load
window.addEventListener('load', () => {
    // Game will start when user clicks the start button
});
