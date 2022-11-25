// Linear Search

const linearSearch = (nums: number[], target: number): number =>
{
  for(let counter: number = 0; counter < nums.length; counter++)
  {
    if(target === nums[counter]) return counter;
  }
  return -1;
}

const binarySearch = (nums: number[], target: number): number =>
{
  let start: number = 0;
  let end: number = nums.length-1;
  let middle: number = Math.floor((start + end) / 2);
  
  while(nums[middle] !== target && start <= end)
  {
    if(target < nums[middle]) end = middle-1;
    else start = middle+1;
    middle = Math.floor((start + end) / 2);
  }
  
  return nums[middle] === target ? middle : -1;
}

// String search

const naiveStringSearch = (longString: string, pattern: string): number =>
{
  let count: number = 0;
  for(let counter: number = 0; counter < longString.length; counter++)
  {
    for(let counter2: number = 0; counter2 < pattern.length; counter2++)
    {
      if(pattern[counter] !== longString[counter+counter2]) break;
      if(counter2 === pattern.length-1) count++
    }
  }
  return count;
}

