'use strict';

const minmax = function(arr){
  const newarr=arr.replace(/[\\,]/g, '').split(' ').filter(item=>item !== "").map(item=>Number(item)).filter(item=>!isNaN(item));
  if (newarr.length === 0) return[undefined, undefined]
  else return [Math.min(...newarr), Math.max(...newarr)]
};