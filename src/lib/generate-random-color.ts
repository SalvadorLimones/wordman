import shuffle from 'lodash.shuffle';
import { block } from './sleep';

const hex = '0123456789ABCDEF'.split('');

const generateRandomColor = () => {
  let result = '';

  for (let index = 0; index < 6; index++) {
    const [element] = shuffle(hex);
    result += element;
  }


  return result;
};

export default generateRandomColor;
