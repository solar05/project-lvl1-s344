import gameCore from '..';
import getRandomNum from '../generateRandomNum';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNum, secondNum) => {
  if (!secondNum) {
    return firstNum;
  }
  return getGcd(secondNum, firstNum % secondNum);
};


const gcd = () => {
  const firstNum = getRandomNum(1, 50);
  const secondNum = getRandomNum(1, 50);
  const data = {
    question: `${firstNum} ${secondNum}`,
    answer: `${getGcd(firstNum, secondNum)}`,
  };
  return data;
};

gameCore(gcd, rule);

export default gcd;
