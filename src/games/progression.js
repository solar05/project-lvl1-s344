import gameCore from '..';
import getRandomNum from '../generateRandomNum';

const rule = 'What number is missing in this progression?';
const progressionLenght = 10;

const progression = () => {
  const startNumber = getRandomNum(1, 9);
  const step = getRandomNum(1, 15);
  const progrArr = [startNumber];
  for (let i = 0; i < progressionLenght; i += 1) {
    const nextNumber = progrArr[i] + step;
    progrArr.push(nextNumber);
  }
  const missingElem = getRandomNum(2, 9);
  const answer = `${progrArr[missingElem]}`;
  progrArr[missingElem] = '..';
  const data = {
    answer,
    question: progrArr.join(' '),
  };
  return data;
};

gameCore(progression, rule);
export default progression;
