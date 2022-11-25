const countDown = (startingNum: number):void =>
{
  if(startingNum === 0)
  {
    console.log(0);
  }
  else
  {
    console.log(startingNum);
    countDown(--startingNum);
  }
}

countDown(10);

const sumRange = (startingNum: number): number =>
{
  if(startingNum === 1)
  {
    return 1;
  }
  return startingNum + sumRange(--startingNum);
}

console.log(sumRange(10));

const factorial = (startingNum: number): number =>
{
  if(startingNum === 1 || startingNum === 0)
  {
    return 1;
  }
  return startingNum * factorial(startingNum-1);
}

console.log(factorial(5));

// Help function example

// // Merge Sort Algorithm which is used to sort the Priority Queue in min heap mode
// const mergeSortMin = (arr) => {
//   // Base case element is its own array
//   if (arr.length < 2) {
//     return arr;
//   }
//   // Declare the midpoint of the array
//   let mid = arr.length / 2;
//   // Hold each side of the array
//   let left = arr.splice(0, mid);
//   return mergeHelperMin(mergeSortMin(left), mergeSortMin(arr));
// };

// // Helper function to sort in ascending order
// const mergeHelperMin = (left, right) => {
//   let sorted = [];
//   while (left.length && right.length) {
//     if (left[0] > right[0]) {
//       sorted.push(right.shift());
//     } else {
//       sorted.push(left.shift());
//     }
//   }
//   return [...sorted, ...left, ...right ]
// };

const collectOddValue = (nums: number[]): number[] =>
{
  let result: number[] = []

  const helper = (helperInput: number[]) =>
  {
    if(helperInput.length === 0)
    {
      return;
    }

    if(helperInput[0] % 2 !== 0)
    {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1))
  }

  helper(nums);

  return result;
}

const collectOddValue2 = (nums: number[]): number[] =>
{
  let newArray: number[] = [];

  if(nums.length === 0)
  {
    return newArray;
  }

  if(nums[0] % 2 !== 0)
  {
    newArray.push(nums[0]);
  }

  newArray = newArray.concat(collectOddValue2(nums.slice(1)));

  return newArray;
}

