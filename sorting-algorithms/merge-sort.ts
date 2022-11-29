// Merge Sort
// O(n * log(n)) time complexity worst case
// O(n * log(n)) time complexity average case
// O(n * log(n)) time complexity best case
// O(n) space complexity

// Sort the array by splitting it into mini arrays up until length 1 or 0 and then
// sorting the mini arrays and merging them up until you merge the original two halves

const mergeSort = (nums: number[]): number[] =>
{
  if(nums.length <= 1) return nums;

  let middle: number = Math.floor(nums.length/2);
  let left = mergeSort(nums.slice(0, middle));
  let right = mergeSort(nums.slice(middle));

  return merge(left, right);
}

const merge = (arr1: number[], arr2: number[]): number[] =>
{
  let results: number[] = [];
  let i: number = 0;
  let j: number = 0;
  while(i < arr1.length && j < arr2.length)
  {
    if(arr2[j] > arr1[i])
    {
      results.push(arr1[i]);
      i++;
    }
    else
    {
      results.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length)
  {
    results.push(arr1[i])
    i++
  }
  while(j < arr2.length)
  {
    results.push(arr2[i])
    j++
  }
  return results;
} 