const generic = (value) => {
    return [value];
};
const stringArr = generic('asdf');
console.log(stringArr);
export {};
// 1st 
// function concatenateArrays<T>(...arrays: T[][]): T[] {
//     let result: T[] = [];
//     for (const arr of arrays) {
//         result = result.concat(arr);
//     }
//     return result;
// }
// console.log(concatenateArrays(["a", "b"], ["c", "d"]));
// // ["a", "b", "c", "d"]
// console.log(concatenateArrays([1, 2], [3, 4], [5]));
// // [1, 2, 3, 4, 5]
//2nd
// function concatenateArrays<T>(...arrays: T[][]): T[] {
//     return arrays.flat();
// }
// // Sample Input
// console.log(concatenateArrays(["a", "b"], ["c", "d"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));
// Sample Output
// ["a", "b", "c", "d"]
// [1, 2, 3, 4, 5]
