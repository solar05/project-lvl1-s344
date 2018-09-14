import gameCore from '..';
import getRandomNum from '../generateRandomNum';

const rule = 'Is this number is prime?';

const checkPrime = (number) => {
  if (number === 1) {
    return 'no';
  }
  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const prime = () => {
  const randommNum = getRandomNum(1, 100);
  const data = {
    answer: checkPrime(randommNum),
    question: randommNum,
  };
  return data;
};

gameCore(prime, rule);
export default prime;
