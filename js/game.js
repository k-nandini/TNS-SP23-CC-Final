let questions = [
    {
        ques: "How many bananas do you buy in a month?",
        ans: [
            "None",
            "1 to 12",
            "13 to 24",
            "25 or more"
        ]
    },
    {
        ques: "Where do you like to enjoy your bananas?",
        ans: [
            "On the go",
            "At Home"
        ]
    },
    {
        ques: "Which banana do you prefer?",
        ans: [
            "Black",
            "Ripe",
            "Fresh"
        ]
    },
    {
        ques: "Do you share your bananas?",
        ans: [
            "Yes",
            "No"
        ]
    },
    {
        ques: "Have you tried banana flavoured snacks?",
        ans: [
            "Yes",
            "No"
        ]
    },
    {
        ques: "Do you use any toppings on your bananas?",
        ans: [
            "Yes",
            "No",
            "Maybe"
        ]
    },
    {
        ques: "Frozen bananas or grilled?",
        ans: [
            "Frozen",
            "Grilled",
            "None"
        ]
    },
    {
        ques: "Would you stew your bananas?",
        ans: [
            "Yes",
            "No"
        ]
    },
    {
        ques: "Do you think you waste your bananas?",
        ans: [
            "Yes",
            "No"
        ]
    }
]



const question = document.getElementById('question')
const answers = document.querySelectorAll('#game form label')
const ansInput = document.querySelectorAll('#game form input[type="radio"]')
let iterations = 0
localStorage.removeItem('quiz')

const loadQuiz = () => {
    const max_q_len = questions.length - 1
    const randomNum = Math.floor(Math.random() * max_q_len)
    console.log(max_q_len)

    question.textContent = questions[randomNum].ques
    answers.forEach((ans, index) => {
        ans.textContent = questions[randomNum].ans[index]
    })

    return randomNum
}

let currQues = loadQuiz()

const saveQuiz = () => {
    let answerChoosen = null
    ansInput.forEach((ans, index) => {
        if (ans.checked) {
            answerChoosen = index + 1
        }
    })

    let dataQuiz = JSON.parse(localStorage.getItem('quiz'))
    if (!dataQuiz) {
        dataQuiz = []
    }
    dataQuiz.push({
        ques: questions[currQues].ques,
        ans: questions[currQues].ans,
        cans: answerChoosen
    })

    localStorage.setItem('quiz', JSON.stringify(dataQuiz))
    questions.splice(currQues, 1)
    console.log(questions)

    if (iterations >= 6) {
        window.location.href = "./data.html"
    }
    else {
        currQues = loadQuiz()
        iterations++
    }
}

