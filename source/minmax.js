'use strict';

/**
 * Это описание функции minmax
 * @param {string} st - Строка с числами
 * @returns {array} Массив из минимального
 * и максимального элементов в строке
 */
const minmax = st => {

  if (typeof st !== 'string') {
    return [undefined, undefined];
  }
  
  const formatedString = st.replace(/[\\,]/g, '');
  const itemsArray = formatedString.split(' ').filter(item => item !== '');
  const result = itemsArray.map(item => Number(item)).filter(item => !isNaN(item));

  return (result.length === 0) ? [undefined, undefined] :
    [Math.min(...result), Math.max(...result)];
}
