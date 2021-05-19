// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   initialWord = input.question("Let's play some Scrabble! Enter a word: ");
};

function simpleScore(word) {
  word = word.toUpperCase();
  let score = 0;

	for (let i = 0; i < word.length; i++) {
      score++;
      }
  console.log(`Each Letter is 1 Point\nPoints for ${word}: ${score}`);
	return score;
} 

function vowelBonusScore(word) {
  word = word.toUpperCase();
  let vowelScore = 0;
  let blank = [" "]
  let vowels = ["A", "E", "I", "O", "U"]

  for (let i = 0; i < word.length; i++) {
      if (blank.includes(word[i])) {
        vowelScore = vowelScore + 0;
      }
      else if (vowels.includes(word[i])) {
        vowelScore = vowelScore + 3;
      } else {
        vowelScore = vowelScore + 1;
      }
    }
  console.log(`Vowels are 3 pts, consonants are 1 pt.\nPoints for ${word}: ${vowelScore}`);
  
  return vowelScore;
}

function scrabbleScore(word){
word = word.toLowerCase();
let points = 0;
let blank = [" "]

for (i = 0; i < word.length; i++) {
    let letter = word[i];
    points += newPointStructure[letter];
  }

return points;
};

const scoringAlgorithms = [({name: 'Simple Score',
                            scoringFunction: simpleScore
                            }),
                            ({name: 'Vowel Bonus',
                            scoringFunction: vowelBonusScore
                            }),
                            ({name: 'Scrabble',
                            scoringFunction: scrabbleScore
                            })];

function scorerPrompt(word) {
  
  scoreType = input.question("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ");

  
    if (scoreType == 0) {
      console.log("Algorithm Name: ", scoringAlgorithms[0].name);
      console.log("Result: ", scoringAlgorithms[0].scoringFunction(initialWord));
    } else if (scoreType == 1) {
      console.log("Algorithm Name: ", scoringAlgorithms[1].name);
      console.log("Result: ", scoringAlgorithms[1].scoringFunction(initialWord));
    } else if (scoreType == 2) {
      console.log("Algorithm Name: ", scoringAlgorithms[2].name);
      console.log("Result: ",scoringAlgorithms[2].scoringFunction(initialWord));
    } else scorerPrompt(word)

  return scoreType;
};

function transform(oldPointStructure) {
  const newPoints = {}
  
  for (const [letterValue, number] of Object.entries(oldPointStructure)) {
    for (const letter of number) {
      newPoints[letter.toLowerCase()] = Number(letterValue);
    }
  }

  return newPoints;
};

let newPointStructure = transform(oldPointStructure);
newPointStructure[" "] = 0;

function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};