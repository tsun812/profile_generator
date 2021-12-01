const { resolveCaa } = require('dns');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const q1 = 'What\'s your name? Nicknames are also acceptable :)\''
const q2 = 'What\'s an activity you like doing?\''
const q3 = 'What do you listen to while doing that?'
const q4 = 'Which meal is your favourite (eg: dinner, brunch, etc.)'
const q5 = 'What\'s your favourite thing to eat for that meal?'
const q6 = 'Which sport is your absolute favourite?'
const q7 = 'What is your superpower? In a few words, tell us what you are amazing at!'
const questions = [q1, q2, q3, q4, q5, q6, q7]
let res = ''
let index = 0;
const survey = function (questions, index) {
  if(index === (questions.length -1)){
    console.log(res);
    rl.close();
    return
  }
  rl.question(questions[index], (answer) => {
   res += answer + " "
   index += 1
   survey(questions, index)
  });
}; 
survey(questions, index);

