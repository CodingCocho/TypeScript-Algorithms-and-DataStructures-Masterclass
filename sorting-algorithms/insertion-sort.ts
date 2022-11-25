// Insertion Sort
// O(n^2) time complexity worst case
// O(n^2) time complexity average case
// O(n) time complexity best case
// O(1) space complexity

// Divide the array into a sorted and unsorted portion and insert the unsorted data
// in the sorted array

// Key use case: When data is being inputted into the array

const insertionSort = (nums: number[]): number[] =>
{

  // Loop through the array which is size n--1
  for(let outerLoop: number = 1; outerLoop < nums.length; outerLoop++)
  {

    // Hold the current value of right side array
    let currentValue: number = nums[outerLoop];

    // Loop through the sorted array which is size n-1
    // Short circuit if the new value is in the current location
    for(let innerLoop: number = outerLoop - 1; innerLoop >= 0 && nums[innerLoop] > currentValue; innerLoop--)
    {

      // Swap the elements
      nums[innerLoop + 1] = nums[innerLoop];
      nums[innerLoop ] = currentValue;
    }
  }

  return nums;
}

console.log(insertionSort([1, 4, 2, 3, 9]));