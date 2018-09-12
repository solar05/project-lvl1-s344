import readlineSync from 'readline-sync';

const getRandomNum = multiplier => Math.floor(Math.random() * multiplier);

export default () => {
  const data = {};
  const operations = ['+', '-', '*'];
  const operands = [getRandomNum(10), getRandomNum(10)].sort((a, b) => b - a);
  // к operands, рандомим два числа, затем сортируем их по убыванию
  const currOperation = operations[getRandomNum(3)];
  const question = `${operands[0]} ${currOperation} ${operands[1]}`;
  console.log(`Question: ${question}`);
  data.userAnswer = readlineSync.question('Your answer: ');
  data.answer = eval(question);
  data.compare = parseInt(data.userAnswer, 10) === data.answer;
  return data;
};
