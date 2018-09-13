import gameCore from '..';
import getRandomNum from '../generateRandomNum';

const evenCheck = number => number % 2 === 0;

const even = () => {
  const number = getRandomNum(1, 1000);
  const data = {
    question: `${number}`,
    answer: evenCheck(number) ? 'yes' : 'no',
  };
  return data;
};

gameCore(even, 'brainEvenRule');
export default even;
