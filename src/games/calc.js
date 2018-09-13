import gameCore from '..';
import getRandomNum from '../generateRandomNum';

const executeOperation = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b];
// создание массива функций для для выполнения выражения
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

gameCore(calc, 'brainCalcRule');
export default calc;
