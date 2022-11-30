// Quick Sort
// O(n^2) time complexity worst case
// O(n * log(n)) time complexity average case
// O(n * log(n)) time complexity best case
// O(log n) space complexity

// Use a pivot point to divide the array into subarrays and sort both sides of the 
// pivot point finding new pivot points. 

// Note: Worst case happens when the array is sorted so in theory we can make quick sort O(n) 

// In theory Quick Sort is the fastest algorithm since worse case is O(n) with O(1) space

const quickSort = (nums: number[], left: number, right:number): number[] =>
{
  if(left < right)
  {
    let pivotIndex: number = pivot(nums, left, right)
    quickSort(nums, left, pivotIndex-1);
    quickSort(nums, pivotIndex+1, right); 
  }
  return nums;
}

const pivot = (nums: number[], left: number, right: number): number =>
{
  let pivot: number = nums[left];
  let swapIndex: number = left;
  for(let counter: number = left + 1; counter < nums.length; counter++)
  {
    if(pivot > nums[counter])
    {
      swapIndex++;
      swap(nums, swapIndex, counter);
    }
  }
  swap(nums, left, swapIndex);
  return swapIndex;
}

const swap = (nums: number[], index1: number, index2: number): void =>
{
  let temp: number = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = temp;
}

let test1: number[] = [1, 9, 2, 3,4, 7, 13, 5, 0]
console.log(quickSort(test1, 0, test1.length-1))