const quizDB = [
    {
        question : "Q1: What is the full form of HTML",
        a: "Hello",
        b: "Hyper Text Markup language",
        c: "Hiiiiii",
        d: "Byeeeee",
        ans : "ans2"
    },
    {
        question : "Q2: What is the full form of WWW",
        a: "World",
        b: "World Wide Web",
        c: "Weapon Wide Ak-47",
        d: "Boldfit",
        ans : "ans2"
    },
    {
        question : "Q3: What is the full form of Book",
        a: "Bring Your Own device",
        b: "Based on Your Knowledge",
        c: "Doesn't have a full form",
        d: "None of these",
        ans : "ans3"
    },
    {
        question : "Q4: What is the full form of CSS",
        a: "Cascading jharna",
        b: "Cascading Style Sheet",
        c: "Hiiiiii",
        d: "Byeeeee",
        ans : "ans2"
    }
];

const ques = document.querySelector('.question');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const submitBtn = document.getElementById('submit');
const selectedOption = document.querySelectorAll('.answer');
const scoreArea = document.getElementById('showScore');
const dialog = document.getElementById('dialog-container');
const span = document.getElementsByClassName('close')[0];
let quesCount = 0;
let score = 0;
const loadQuestion = (quesCount) =>{
    ques.innerHTML = quizDB[quesCount].question;
    option1.innerHTML = quizDB[quesCount].a;
    option2.innerHTML = quizDB[quesCount].b;
    option3.innerHTML = quizDB[quesCount].c;
    option4.innerHTML = quizDB[quesCount].d;

}

loadQuestion(quesCount);

submitBtn.addEventListener('click',checkAndProceed);

const getCheckAnswer = () =>{
    let select;
    selectedOption.forEach((curAnsEle) => {
        if(curAnsEle.checked){
            select = curAnsEle.id;
        }
    });
    return select;
}
//function to deselct the checkbox on going to next question
const deselectAll = () =>{
    selectedOption.forEach((curAnsEle) =>{
        curAnsEle.checked = false;
    });
}

function checkAndProceed(){
    const answer = getCheckAnswer();
    
    if(answer == quizDB[quesCount].ans){
        score++;
    }
    if(answer!=undefined)
        quesCount++;
    else{
        // alert("Please select an Option");
        dialog.style.display= "block";
        loadQuestion(quesCount);
    }
    deselectAll();
    if(quesCount < quizDB.length && answer!=undefined){
        
        loadQuestion(quesCount);
    }
    else if(quesCount == quizDB.length){
        scoreArea.innerHTML = `
        <h3> Your Score is ${score} out of ${quizDB.length}</h3>
        <button class='btn' id='btn' onClick=" location.reload()"> Restart Quiz </button>
        `;

        scoreArea.classList.remove('scoreArea');
    }
    
    
}

span.addEventListener('click',() =>{
    dialog.style.display= "none";
})


