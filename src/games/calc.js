import gameCore from '..';
import getRandomNum from '../generateRandomNum';

const rule = 'What is the result of the expression?';

const executeOperation = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b];
const operations = ['+', '-', '*'];

const calc = () => {
  const firstNum = getRandomNum(1, 50);
  const secondNum = getRandomNum(1, 50);
  const currOperation = getRandomNum(0, 2);
  const data = {
    question: `${firstNum} ${operations[currOperation]} ${secondNum}`,
    answer: `${executeOperation[currOperation](firstNum, secondNum)}`,
  };
  return data;
};

gameCore(calc, rule);
export default calc;
