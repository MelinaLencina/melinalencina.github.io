let points = 0;

function australia(userAnswer) {
  // What is the capital of Australia?
  // 100 points
  const isCorrect = userAnswer.toUpperCase() === 'CANBERRA';
  
  if (isCorrect) {
    points += 100; 
  }
  return isCorrect;
}

function canada(userAnswer) {
  // What is the capital of Canada?
  // 100 points
  const isCorrect = userAnswer.toUpperCase() === 'OTTAWA';
  
  if (isCorrect) {
    points += 100;
  }
   return isCorrect; 
}
  

function uppercase(userAnswer, word) {
  // What is <word> in all capital letters?
  // 200 points
  const isCorrect = userAnswer === word.toUpperCase();
  
  if (isCorrect) {
    points += 200;
  }
  return isCorrect;
}

function firstThreeLetters(userAnswer, word) {
  // What are the first three letters of <word>?
  // 200 points
  const isCorrect = userAnswer.toUpperCase() === word.substring(0,3).toUpperCase();
  
  if (isCorrect) {
    points += 200;
  } return isCorrect;
}

function squared(userAnswer, number) {
  // What is <number> squared?
  // 200 points
  
  const isCorrect = parseInt(userAnswer) === number ** 2;
  
  if (isCorrect) {
    points += 200;
  } return isCorrect;
}

function multiplication(userAnswer, num1, num2) {
  // What is <num1> multiplied by <num2>?
  // 300 points
  
  
  const isCorrect = parseInt(userAnswer) === num1 * num2;
  
  
  if (isCorrect) {
    points += 300;
  } return isCorrect;
}

function age(userAnswer, currentYear, birthYear) {
  // If someone was born in <birthYear> and already has had their birthday this year, how old are they (assuming it's <currentYear>)?
  // 300 points

  
  const isCorrect = parseInt(userAnswer) === currentYear - birthYear;
  
  if (isCorrect) {
    points += 300;
  } return isCorrect;
}


function larger(userAnswer, num1, num2) {
  // Which of ${number4} and ${number5} is larger? (If they're the same then pick that number)
  // 300 points
  
  const isCorrect = parseInt(userAnswer) === num1 > num2 || num1 < num2;
  
  if (isCorrect) {
    points += 300;
  } return isCorrect;
}


function getScore() {
  // Returns the current user's quiz score
  
  return points;
  
} 


// DO NOT MODIFY CODE UNDER THIS COMMENT


(function() {
  const words = [
    "squeeze",
    "suspend",
    "cloudy",
    "parallel",
    "scrape",
    "puppy",
    "horses",
    "sedate",
    "guarded",
    "part",
    "name",
    "solid",
    "queue",
    "alike",
    "home",
    "overwrought",
    "talented",
    "concerned",
    "increase",
    "silky",
    "rude",
    "hypnotic",
    "kitten",
    "rabbit",
    "oily",
    "intelligent",
    "delicious",
    "snow",
    "sticky",
    "view"
  ];
  let currentQuestion = 0;
  const text = document.getElementById("text")
  
  function validate(userResponse) {
    const answer = process[currentQuestion].validator.apply(window, [userResponse, ...(process[currentQuestion].meta ? process[currentQuestion].meta : [])]);
    let response = "";

    if (answer === true) {
      response = "Correct! Yay!";
    } else if (answer === false) {
      response = "That's incorrect. :(";
    } else {
      response = "Got a response other than true or false";
    }

    alert(response);
    currentQuestion++;
    
    if (currentQuestion >= process.length) {
      document.getElementById("container").innerHTML = `<h1>Congrats! You finished. You got ${getScore()} points!</h1>`;
      return;
    }
    
    text.innerText = process[currentQuestion].question;
  }

  const randomNumber = max => Math.floor(Math.random() * max);
  const randomWord = () => words[randomNumber(words.length)];
  const word1 = randomWord();
  const word2 = randomWord();
  const number1 = randomNumber(25);
  const number2 = randomNumber(25);
  const number3 = randomNumber(25);
  const number4 = randomNumber(25);
  const number5 = randomNumber(25);
  const birthYear = randomNumber(40) + 1970;
  const currentYear = new Date().getFullYear();

  const process = [
    {
      question: "What is the capital of Australia?",
      validator: australia,
      points: 100
    },
    {
      question: "What is the capital of Canada?",
      validator: canada,
      points: 100
    },
    {
      question: `What is "${word1}" in all capital letters?`,
      meta: [word1],
      validator: uppercase,
      points: 200
    },
    {
      question: `What are the first three letters of "${word2}"?`,
      meta: [word2],
      validator: firstThreeLetters,
      points: 200
    },
    {
      question: `What is ${number1} squared?`,
      meta: [number1],
      validator: squared,
      points: 200
    },
    {
      question: `What is ${number2} multiplied by ${number3}?`,
      meta: [number2, number3],
      validator: multiplication,
      points: 300
    },
    {
      question: `If someone was born in ${birthYear}
      and already has had their birthday this year,
      how old are they (assuming it's ${currentYear})?`,
      meta: [currentYear, birthYear],
      validator: age,
      points: 300
    },
    {
      question: `Which of ${number4} and ${number5} is larger?
      (If they're the same then pick that number)`,
      meta: [number4, number5],
      validator: larger,
      points: 300
    }
  ];

  const input = document.getElementById("input");
  document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    validate(input.value);
    input.value = "";
  });
})();
