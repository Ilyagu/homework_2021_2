'use strict';

/**
 * Возвращает минимальный и максимальный
 * элемент в строке.
 * 
 * @param {string} st - Строка с числами
 * @returns {array} Массив из минимального и максимального элементов в строке
 */
const minmax = st => {

  if (typeof st !== 'string') {
    return [undefined, undefined];
  }
  
  const stringWithoutCommas = st.replace(/[\\,]/g, '');
  const fromStringToArray = stringWithoutCommas.split(' ').filter(item => item !== '');
  const numbersArray = fromStringToArray.map(item => Number(item)).filter(item => !isNaN(item));

  return (numbersArray.length === 0) ? [undefined, undefined] :
    [Math.min(...numbersArray), Math.max(...numbersArray)];
}
