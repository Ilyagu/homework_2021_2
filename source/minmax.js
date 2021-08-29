'use strict';

/** 
 * Функция minmax нахожит минимальное и максимальное значение в строке 
 * результат ввиде массива из минимального и максимального значения.
*/
const minmax = arr => {
  if ((typeof arr) !='string') return [undefined, undefined];
  let newArr = arr.replace(/[\\,]/g, '');
  newArr = newArr.split(' ').filter(item=>item !== '')
  newArr = newArr.map(item=>Number(item))
  newArr = newArr.filter(item=>!isNaN(item));
  return (newArr.length === 0) ? [undefined, undefined] : [Math.min(...newArr), Math.max(...newArr)]
};
