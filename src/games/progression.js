import gameCore from '..';
import getRandomNum from '../generateRandomNum';

const rule = 'What number is missing in this progression?';
const progressionLenght = 10;

const progression = () => {
  const startNumber = getRandomNum(1, 9);
  const step = getRandomNum(1, 15);
  const currentProgr = [];
  for (let counter = 1; counter < progressionLenght; counter += 1) {
    const nexNumber = startNumber + step * counter;
    currentProgr.push(nexNumber);
  }
  const missingElem = getRandomNum(2, 9);
  const answer = `${currentProgr[missingElem]}`;
  currentProgr[missingElem] = '..';
  const question = currentProgr.join(' ');
  const data = {
    answer,
    question,
  };
  return data;
};

gameCore(progression, rule);
export default progression;
