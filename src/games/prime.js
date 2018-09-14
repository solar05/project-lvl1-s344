import gameCore from '..';
import getRandomNum from '../generateRandomNum';

const rule = 'Is this number is prime?';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  const randommNum = getRandomNum(1, 100);
  const data = {
    answer: isPrime(randommNum) ? 'yes' : 'no',
    question: randommNum,
  };
  return data;
};

gameCore(prime, rule);
export default prime;
