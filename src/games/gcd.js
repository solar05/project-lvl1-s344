import readlineSync from 'readline-sync';

const gcd = (firstNum, secondNum) => {
  if (!secondNum) {
    return firstNum;
  }
  return gcd(secondNum, firstNum % secondNum);
};

const getRandomNum = multiplier => Math.floor(Math.random() * multiplier);

export default () => {
  const data = {};
  const operands = [getRandomNum(100), getRandomNum(100)].sort((a, b) => b - a);
  console.log(`Question: ${operands[0]} ${operands[1]}`);
  data.userAnswer = readlineSync.question('Your answer: ');
  data.answer = gcd(operands[0], operands[1]);
  data.compare = parseInt(data.userAnswer, 10) === data.answer;
  return data;
};
