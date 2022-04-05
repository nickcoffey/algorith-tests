// function binarySearchNum(
//   numArray: number[],
//   numToFind: number,
//   newFirstIndex?: number,
//   newLastIndex?: number
// ) {
//   const firstIndex = newFirstIndex || 0;
//   const lastIndex = newLastIndex || numArray.length - 1;
//   const indexDiff = (firstIndex + lastIndex) / 2;
//   const arrayMiddleIndex = newFirstIndex
//     ? Math.ceil(indexDiff)
//     : Math.floor(indexDiff);
//   const middleItem = numArray[arrayMiddleIndex];

//   if (numToFind === middleItem) {
//     return middleItem;
//   } else {
//     if (numToFind > middleItem) {
//       return binarySearchNum(numArray, numToFind, arrayMiddleIndex);
//     } else if (numToFind < middleItem) {
//       return binarySearchNum(numArray, numToFind, undefined, arrayMiddleIndex);
//     } else {
//       return undefined;
//     }
//   }
// }

// this assumes the array is sorted in ascending order. left=lessthan right = greaterthan
function binarySearchNum(numArray: number[], numToFind: number) {
  let firstIndex = 0;
  let lastIndex = numArray.length - 1;
  let isLeftSide: boolean = null;
  let foundItem: number | undefined = null;

  while (foundItem === null) {
    const indexDiff = (firstIndex + lastIndex) / 2;
    // round down for left side and up for right side
    let arrayMiddleIndex = isLeftSide
      ? Math.floor(indexDiff)
      : Math.ceil(indexDiff);

    if (firstIndex !== lastIndex) {
      const middleItem = numArray[arrayMiddleIndex];

      if (numToFind === middleItem) {
        // found the item!
        foundItem = middleItem;
      } else if (lastIndex - firstIndex === 1) {
        // if items are right next each other there is nothing in between and therefore the item is not in the array
        foundItem = undefined;
      } else if (numToFind > middleItem) {
        // check right side of the array
        firstIndex = arrayMiddleIndex;
        isLeftSide = false;
      } else if (numToFind < middleItem) {
        // check left side of the array
        lastIndex = arrayMiddleIndex;
        isLeftSide = true;
      }
    } else {
      // calculated index is larger than largest or smaller than the smallest index in array
      foundItem = undefined;
    }
  }

  return foundItem;
}

let ascArray: number[] = [];
for (let index = 0; index < 111111111; index++) {
  ascArray.push(index + 1);
}

const testNum = 111111111; // 111,111,111
const startTime = performance.now();

console.log(ascArray.find((num) => num === testNum));
// console.log(binarySearchNum(ascArray, testNum));

const endTime = performance.now();
const execTimeInMillis = endTime - startTime;
console.log(execTimeInMillis);
