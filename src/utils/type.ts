/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 是否一个 非数组 或 数组长度=0
 * @param {*} arr
 */
export const ifEmptyArray = (arr: any) =>
    !arr ||
    Object.prototype.toString.call(arr) !== '[object Array]' ||
    arr.length === 0

/**
 * 是否一个function
 * @param {*} func
 */
export const isFunction = (func: any) =>
    Object.prototype.toString.call(func) === '[object Function]'
