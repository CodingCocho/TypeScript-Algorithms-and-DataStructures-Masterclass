// Selection Sort
// O(n^2) time complexity worst case
// O(n^2) time complexity average case
// O(n^2) time complexity best case
// O(1) space complexity

// Use a selected index where the largest or smallest element will be placed and swap
// the elements

const selectionSort = (nums: number[]): number[] =>
{

  // Loop through the array which is size n-1 
  for(let outerCounter: number = 0; outerCounter < nums.length-1; outerCounter++)
  {
    
    // Hold the lowest position starting with the outer index
    let lowestPosition: number = outerCounter;

    // Loop through through the rest of the array which is n-1 
    for(let innerCounter: number = outerCounter + 1; innerCounter < nums.length; innerCounter++)
    {

      // Make the appropriate comparison 
      if(nums[lowestPosition] > nums[innerCounter])
      {

        // Hold the new lowest position
        lowestPosition = innerCounter;
      }
    }

    // Swap the lowest element to the beginning 
    let swapHolder: number = nums[outerCounter];
    nums[outerCounter] = nums[lowestPosition];
    nums[lowestPosition] = swapHolder;
  }
  return nums;
}

console.log(selectionSort([1, 4, 2, 3, 9]));