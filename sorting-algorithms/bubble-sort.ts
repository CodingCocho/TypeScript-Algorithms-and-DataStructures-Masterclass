// Bubble Sort 
// O(n^2) time complexity worst case
// O(n^2) time complexity average case
// O(n) time complexity best case
// O(1) space complexity

// Use comparison to bubble the largest or smallest element to the right

const bubbleSort = (nums: number[]): number[] =>
{
  // Short circuit flag
  let didSwap: boolean | undefined;

  // Loop through array which is size n
  for(let outerCounter: number = 0; outerCounter < nums.length-1; outerCounter++)
  {

    // Reset our short circuit flag
    didSwap = false;

    // Loop through through the rest of the array which is n-1 
    for(let innerCounter: number = outerCounter + 1; innerCounter < nums.length; innerCounter++)
    {

      // Make the appropriate comparison 
      if(nums[outerCounter] > nums[innerCounter])
      {

        // Swap the elements
        let swapHelper: number = nums[outerCounter];
        nums[outerCounter] = nums[innerCounter];
        nums[innerCounter] = swapHelper;
        didSwap = true;
      }
    }

    // Short circuit loop if the array is already sorted
    if(!didSwap) break;
  }
  return nums;
}

