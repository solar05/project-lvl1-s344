import gameCore from '..';
import getRandomNum from '../generateRandomNum';

const rule = 'Is this number is prime?';

const isPrime = (number) => {
  const iter = (num, divider) => {
    if (divider > num / 2) {
      return true;
    }
    return num % divider ? iter(num, divider + 1) : false;
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
