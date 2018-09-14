import gameCore from '..';
import getRandomNum from '../generateRandomNum';

const rule = 'Find the greatest common divisor of given numbers.\n';

const getDiv = (firstNum, secondNum) => {
  if (!secondNum) {
    return firstNum;
  }
  return getDiv(secondNum, firstNum % secondNum);
};


const gcd = () => {
  const firstNum = getRandomNum(1, 50);
  const secondNum = getRandomNum(1, 50);
  const data = {
    question: `${firstNum} ${secondNum}`,
    answer: `${getDiv(firstNum, secondNum)}`,
  };
  return data;
};

gameCore(gcd, rule);

export default gcd;
