import gameCore from '..';
import getRandomNum from '../generateRandomNum';

const rule = 'Answer "yes" if number even otherwise answer "no".\n';
const evenCheck = number => number % 2 === 0;

const even = () => {
  const number = getRandomNum(1, 1000);
  const data = {
    question: `${number}`,
    answer: evenCheck(number) ? 'yes' : 'no',
  };
  return data;
};

gameCore(even, rule);
export default even;
