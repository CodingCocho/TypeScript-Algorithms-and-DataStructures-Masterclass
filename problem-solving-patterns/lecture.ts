// Patterns of solving problems

/*
Frequency Counter
Multiple Pointers
Sliding Window
Divide and Conquer
Dynamic Programming
Greedy Algorithms
Backtracking
*/

// Frequency Counter 
// Idea: Use an object to keep of track of frequencies
// Purpose: Avoid nested loops which can result in O(n^2) time complexity

// Naive Solution O(n^2)
const same = (arr1: number[], arr2:number[]): boolean =>
{
  if(arr1.length !== arr2.length)
  {
    return false;
  }

  for(let counter: number = 0; counter < arr1.length; counter++)
  {
    let correctIndex: number = arr2.indexOf(arr1[counter] ** 2);
    if(correctIndex === -1)
    {
      return false;
    }
    console.log(arr2)
    arr2.splice(correctIndex, 1)
  }
  return true;
}

same([1, 2, 3, 2], [1, 9, 4, 4]);

// Frequency Counter Solution O(n + m + (n+m)) = O(2n + 2m) & let n+m = x ∴ O(2n+2m) = O(x)
interface frequencyCounter
{
  [key: number]: number;
}
const same2 = (arr1: number[], arr2:number[]): boolean =>
{
  if(arr1.length !== arr2.length)
  {
    return false;
  }
  let frequencyCounter1: frequencyCounter = {};
  let frequencyCounter2: frequencyCounter = {};
  
  // O(n)
  for(let val of arr1)
  {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }

  // O(n)
  for(let val of arr2)
  {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  console.log(frequencyCounter1)
  console.log(frequencyCounter2)

  // O(n)
  for(let key in frequencyCounter1)
  {
    if(!(parseInt(key) ** 2 in frequencyCounter2))
    {
      return false;
    }
    if(frequencyCounter2[parseInt(key) ** 2] !== frequencyCounter1[key])
    {
      return false;
    }
  }
  
  return true;
}

same2([1, 2, 3, 2], [1, 9, 4, 4]);
same2([1, 2, 3, 2, 4], [1, 9, 4, 4, 25]);
same2([1, 2, 3, 2, 5], [1, 9, 4, 4, 25]);

interface AnagramCounter
{
  [key: string]: number
}

const validAnagram = (word1: string, word2:string): boolean =>
{
  
  if(word1.length !== word2.length)
  {
    return false;
  }

  let word1Counter: AnagramCounter = {};
  
  for(let char of word1)
  {
    word1Counter[char] = (word1Counter[char] || 0) + 1;
  }

  let word2Counter: AnagramCounter = {};
  
  for(let char of word2)
  {
    word2Counter[char] = (word2Counter[char] || 0) + 1;
  }

  for(let key in word1Counter)
  {
    if(!(key in word2Counter))
    {
      return false;
    }
    if(word1Counter[key] !== word2Counter[key])
    {
      return false;
    }
  }

  return true;
}

console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'))
console.log(validAnagram('texttwisttime', 'timetwisttext'))

// Multiple Pointer
// Idea: Use two pointers to locate data and apply conditions to their movement
// Purpose: Avoid nested loops which can result in O(n^2) time complexity

// Naive Solution O(n^2)
const sumZero = (nums: number[]): boolean =>
{
  for(let counter: number = 0; counter < nums.length; counter++)
  {
    for(let counter2: number = counter + 1; counter2 < nums.length; counter2++)
    {
      if(nums[counter] + nums[counter2] === 0)
      {
        return true;
      }
    }
  }
  return false;
}

// Multiple pointer solution O(n)
const sumZero2 = (nums: number[]): boolean =>
{
  let leftIndex: number = 0;
  let rightIndex: number = nums.length -1;
  while(leftIndex < rightIndex)
  {
    console.log('Left Index ' + leftIndex + ' Right Index ' + rightIndex)
    let sum: number = nums[leftIndex] + nums[rightIndex]
    if(sum === 0)
    {
      return true;
    }
    else if(sum > 0)
    {
      rightIndex--;
    }
    else
    {
      leftIndex++;
    }
  }
  return false;
}

console.log(sumZero2([-4, -3, -2, 0, 1, 2, 3, 5, 10]))
console.log(sumZero2([-4, -3, -2, 0, 1, 5, 10]))

const countUniqueValues = (nums: number[]): number =>
{
  if(nums.length === 0)
  {
    return 0;
  }
  let solution: number = 1;
  let locationPointer: number = 0;
  let traversingPointer: number = 1;
  while(traversingPointer !== nums.length)
  {
    // New number
    if(nums[traversingPointer] !== nums[locationPointer])
    {
      locationPointer = traversingPointer;
      solution++;
    }
    traversingPointer++;
  }
  return solution;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([-2,-1,-1,0,1]));

// Sliding Window 
// Idea: Create a range of data that is reused to determine our end goal
// Purpose: Avoid nested loops which can result in O(n^2) time complexity

const maxSubarraySum = (arr: number[], num: number): number | null =>
{
  if(num > arr.length)
  {
    return null;
  }
  let max: number = -Infinity
  for(let counter: number = 0; counter < arr.length - num + 1; counter++)
  {
    let temp: number = 0;
    for(let counter2: number = 0; counter < num; counter++)
    {
      temp += arr[counter + counter2];
    }
    if(temp > max)
    {
      max = temp;
    }
  }
  return max;
}

const maxSubarraySum2 = (arr:number [], num: number): number| null =>
{
  if(num > arr.length)
  {
    return null;
  }
  let max = 0;
  let tempMax: number = 0;
  for(let counter: number = 0; counter < num; counter++)
  {
    max += arr[counter];
  }
  tempMax = max;
  for(let counter: number = num; counter < arr.length; counter++)
  {
    tempMax = tempMax - arr[counter-num] + arr[counter];
    max = Math.max(max, tempMax);
  }
  return max;
}

console.log(maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
console.log(maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3, 10, 1, 34, 40, 2, 19, 22, 20, 2, 9, 19, 10, 20, 11, 30, 19, 19, 19, 2, 32, 10, 19, 9, 22, 9, 5, 19], 6));
console.log(maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3, 1, 2, 6, 10, 2, 1, 2, 7, 9, 1, 3, 9, 8], 4));

// Divide and Conquer
// Idea: Divide data into subdatas 
// Purpose: Avoid inner loops which results in O(n^2) time complexity

// const binarySearch = (arr: number[], val: number): number =>
// {
//   let min: number = 0;
//   let max: number = arr.length -1;
//   while(min <= max)
//   {
//     let middle: number = Math.floor((min+max)/2);
//     let currentElement: number = arr[middle];
//     if(arr[middle] < val)
//     {
//       min = middle+1;
//     }
//     else if(arr[middle] > val)
//     {
//       max = middle - 1;
//     }
//     else
//     {
//       return middle
//     }
//   }
//   return -1;
// }

