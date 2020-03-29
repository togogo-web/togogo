/**
 * @name differenceElement
 * @description 获取2个数组中元素的差集
 * @param {Array} arrA 数组A
 * @param {Array} arrB 数组B
 * @returns Array
 */
export const differenceElement = (arrA, arrB) => {
  let setA = new Set(arrA);
  let setB = new Set(arrB);
  let difference = new Set([...setA].filter(e => !setB.has(e)));

  return Array.from(difference);
};

/**
 * @name sameElement
 * @description 获取2个数组中元素的交集
 * @param {Array} arrA 数组A
 * @param {Array} arrB 数组B
 * @returns Array
 */
export const sameElement = (arrA, arrB) => {
  let setA = new Set(arrA);
  let setB = new Set(arrB);
  let intersection = new Set([...setA].filter(e => setB.has(e)));

  return Array.from(intersection);
};

/**
 * @name unionElement
 * @description 获取2个数组元素的并集
 * @param {Array} arrA 数组A
 * @param {Array} arrB 数组B
 * @returns Array
 */
export const unionElement = (arrA, arrB) => {
  let set = new Set([...arrA, ...arrB]);
  return Array.from(set);
};

/**
 * @name arrayToSet
 * @description 数组转换为Set集合
 * @param {Array} arr 数组
 * @returns Set
 */
export const arrayToSet = arr => new Set(arr);

/**
 * @name setToArray
 * @description Set集合转换为数组
 * @param {Set} set Set集合
 * @returns Array
 */
export const setToArray = set => Array.from(set);