import readlineSync from 'readline-sync';

export default () => {
  const data = {};
  const number = Math.floor(100 * Math.random());
  console.log(`Question: ${number}`);
  data.userAnswer = readlineSync.question('Your answer: ');
  data.answer = number % 2 === 0 ? 'yes' : 'no';
  data.compare = data.userAnswer === data.answer;
  return data;
};
