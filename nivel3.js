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
            question: "¿En qué año se lanzó la primera película de Mario Bros?",
            options: ["1993", "2000", "2005", "2010"],
            correctAnswer: "1993"
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


window.onload = startQuiz;