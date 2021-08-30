'use strict';

/** 
 * Функция minmax нахожит минимальное и максимальное значение в строке 
 * результат ввиде массива из минимального и максимального значения.
*/
const minmax = arr => {
  if (typeof arr !== 'string') {
    return [undefined, undefined];
  }
  let sortedItems = arr.replace(/[\\,]/g, '');
  sortedItems = sortedItems.split(' ').filter(item => item !== '')
  const result = sortedItems.map(item=>Number(item)).filter(item=>!isNaN(item));
  return (result.length === 0) ? [undefined, undefined] : [Math.min(...result), Math.max(...result)]
};
