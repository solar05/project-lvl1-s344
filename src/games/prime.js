import gameCore from '..';
import getRandomNum from '../generateRandomNum';

const rule = 'Is this number is prime?';

const isPrime = (number) => {
  const iter = (num, divider) => {
    if (num / 2 < divider) {
      return true;
    }
    if (num % divider === 0) {
      return false;
    }
    return iter(num, divider + 1);
  };
  return iter(number, 2);
};

const prime = () => {
  const randommNum = getRandomNum(2, 100);
  const data = {
    answer: isPrime(randommNum) ? 'yes' : 'no',
    question: randommNum,
  };
  return data;
};

gameCore(prime, rule);
export default prime;
