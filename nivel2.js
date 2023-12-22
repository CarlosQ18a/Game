function nextQuestion() {
    currentQuestion++;
    showQuestion();
}

const levels = [
    [
        {
            question: "¿Cuál es el reino principal en la película?",
            options: ["Reino Champiñón", "Reino de Hielo", "Reino del Fuego", "Reino Fantasma"],
            correctAnswer: "Reino Champiñón"
        },
     
    ],
   
];
let currentLevel = 0;
let currentQuestion = 0;
let score = 0;

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    if (currentQuestion < levels[currentLevel].length) {
        questionElement.textContent = levels[currentLevel][currentQuestion].question;

     
        optionsElement.innerHTML = "";
        for (let i = 0; i < levels[currentLevel][currentQuestion].options.length; i++) {
            const option = document.createElement("button");
            option.textContent = levels[currentLevel][currentQuestion].options[i];
            option.onclick = function() { checkAnswer(this.textContent); };
            optionsElement.appendChild(option);
        }
    } else {
        
        questionElement.textContent = "¡Nivel Completado!";
        optionsElement.innerHTML = `<p>Puntuación del Nivel: ${score} de ${levels[currentLevel].length}</p>`;

        
        if (currentLevel < levels.length - 1) {
            currentLevel++;
            currentQuestion = 0;
            setTimeout(showQuestion, 2000); 
        } else {
            
            questionElement.textContent = "¡Juego Terminado!";
            optionsElement.innerHTML = `<p>Puntuación Final: ${score} de todas las preguntas</p>`;
        }
    }
}

function checkAnswer(selectedOption) {
    if (selectedOption === levels[currentLevel][currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;
    showQuestion();
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
}


window.onload = startQuiz;


function checkAnswer(selectedOption) {
    if (selectedOption === levels[currentLevel][currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;
    showQuestion();
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
}

// Iniciar el juego al cargar la página
window.onload = startQuiz;

