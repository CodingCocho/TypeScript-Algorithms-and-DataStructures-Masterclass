// Radix Sort
// O(n * k) time complexity worst case
// O(n * k) time complexity average case
// O(n * k) time complexity best case
// O(n + k) space complexity

// n - length of the array
// k - number of digits(average)

const radixSort = (nums: number[]): number[] =>
{
  let mostDigitsCount: number = mostDigits(nums);
  
  for(let counter: number = 0; counter < mostDigitsCount; counter++)
  {
    let digitBuckets: number[][] = Array.from({length: 10}, () => []);
    for(let counter2: number = 0; counter2 < nums.length; counter2++)
    {
      let storageBucketIndex: number = getDigit(nums[counter2], counter);
      digitBuckets[storageBucketIndex].push(nums[counter2]);
    }
    nums = ([] as number[]).concat(...digitBuckets);
  }
  
  return nums;
}

const getDigit = (num: number, digit: number): number =>
{
  return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}

const digitCounter = (num: number): number =>
{
  if(num === 0) return 1;
  
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (nums: number[]): number =>
{
  let maxDigits: number = 0;
  
  if(!nums) return maxDigits;
  
  for(let counter: number =  0; counter < nums.length; counter++)
  {
    maxDigits = Math.max(maxDigits, digitCounter(nums[counter]))
  }
  
  return maxDigits;
}

console.log(radixSort([23, 24, 5467, 12, 2345, 9852, 9]));