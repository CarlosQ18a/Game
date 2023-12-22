
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

    }
}
const levels = [
    [
        {
            question: "¿Cuál es el tema principal de la película?",
            options: ["Aventura en el Espacio", "Rescate de la Princesa", "Carrera de Karts", "Viaje en el Tiempo"],
            correctAnswer: "Rescate de la Princesa"
        },
     
    ],
   
];

let currentLevel = 0;
let currentQuestion = 0;
let score = 0;

function startQuiz() {
    showQuestion();
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

// Iniciar el juego al cargar la página
window.onload = startQuiz;
function startQuiz() {
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    if (currentQuestion < levels[currentLevel].length) {
        questionElement.textContent = levels[currentLevel][currentQuestion].question;

        // Mostrar opciones
        optionsElement.innerHTML = "";
        for (let i = 0; i < levels[currentLevel][currentQuestion].options.length; i++) {
            const option = document.createElement("button");
            option.textContent = levels[currentLevel][currentQuestion].options[i];
            option.onclick = function() { checkAnswer(this.textContent); };
            optionsElement.appendChild(option);
        }
    } else {
        // Fin del nivel
        questionElement.textContent = "¡Nivel Completado!";
        optionsElement.innerHTML = `<p>Puntuación del Nivel: ${score} de ${levels[currentLevel].length}</p>`;

        // Avanzar al siguiente nivel si hay uno
        if (currentLevel < levels.length - 1) {
            currentLevel++;
            currentQuestion = 0;
            setTimeout(showQuestion, 2000); // Mostrar la próxima pregunta después de 2 segundos
        } else {
            // Fin del juego
            questionElement.textContent = "¡Juego Terminado!";
            optionsElement.innerHTML = `<p>Puntuación Final: ${score} de todas las preguntas</p>`;
        }
    }
}

