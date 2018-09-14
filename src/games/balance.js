import gameCore from '..';
import getRandomNum from '../generateRandomNum';

const rule = 'Balance the given number.\n';

const getNum = (num) => {
  const arrayOfNum = num.toString().split('');
  const sum = arrayOfNum.reduce((acc, element) => acc + parseInt(element, 10), 0);
  const restNum = sum % arrayOfNum.length;
  const minNum = (sum - (restNum)) / arrayOfNum.length;
  let resultAcc = '';
  for (let i = 0; i < arrayOfNum.length; i += 1) {
    resultAcc += (i < arrayOfNum.length - restNum ? minNum : minNum + 1).toString();
  }
  return resultAcc;
};

const balance = () => {
  const numForGame = getRandomNum(100, 9999);
  const data = {
    answer: getNum(numForGame),
    question: numForGame,
  };
  return data;
};

gameCore(balance, rule);
export default balance;
