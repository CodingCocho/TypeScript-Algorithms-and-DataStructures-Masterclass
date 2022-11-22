interface frequencyCounter
{
  [key: string]: number;
}

const sameFrequency = (num1: number, num2: number): boolean =>
{
  // Not same amount of digits case
  if(num1.toString().length !== num2.toString().length)
  {
    return false;
  }

  let digitCounter1: frequencyCounter = {};
  let digitCounter2: frequencyCounter = {};

  let stringNum1 = num1.toString();
  let stringNum2 = num2.toString();
  
  for(let counter: number = 0; counter < stringNum1.length; counter++)
  {
    digitCounter1[stringNum1[counter]] = (parseInt(stringNum1[counter]) || 0) + 1;   
  }

  for(let counter: number = 0; counter < stringNum2.length; counter++)
  {
    digitCounter2[stringNum2[counter]] = (parseInt(stringNum2[counter]) || 0) + 1;   
  }

  for(let key in digitCounter1)
  {
    if(!(key in digitCounter2))
    {
      return false;
    }
    if(digitCounter1[key] !== digitCounter2[key])
    {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182745666, 682716465));

const areThereDuplications = (arr: number[] | string[]): boolean =>
{
  let duplicateCounter: frequencyCounter = {};
  for(let counter: number = 0; counter < arr.length; counter++)
  {
    if(arr[counter].toString() in duplicateCounter)
    {
      return true;
    }
    else
    {
      duplicateCounter[arr[counter].toString()] = 1;
    }
  }
  return false;
}

console.log(areThereDuplications(['a', 'b', 'c', 'd', 't', 'u', 'x', 'b']));
console.log(areThereDuplications(['a', 'b', 'c', 'd', 't', 'u', 'x']));

const averagePair = (arr: number[], average: number): boolean =>
{
  if(!arr)
  {
    return false;
  }
  if(arr.length < 2)
  {
    return false;
  }
  let pointer1: number = 0;
  let pointer2: number = arr.length-1;
  let restriction: number = average * 2;
  while(pointer1 !== pointer2)
  {
    if(arr[pointer1] + arr[pointer2] === restriction)
    {
      return true;
    }
    else if(arr[pointer2] + arr[pointer1] > restriction)
    {
      pointer2--;
    }
    else
    {
      pointer1++;
    }
  }
  return false;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19],8));

const isSubsequence = (string1: string, string2: string): boolean =>
{
  if(string1.length >= string2.length)
  {
    return false;
  }

  let pointer1: number = 0;
  let pointer2: number = 0;
  let dummyString: string = '';
  while(pointer2 !== string2.length)
  {
    if(string1[pointer1] === string2[pointer2])
    {
      pointer2++;
      pointer1++;
      if(pointer1 === string1.length)
      {
        return true;
      }
    }
    else
    {
      pointer2++;
    }
  }

  return false;
}

console.log(isSubsequence('abc', 'abracadabra'));

const maxSubarraySum3 = (arr: number[], length: number): number | null =>
{
  if(arr.length < length)
  {
    return null;
  }
  let solution: number = 0;
  let tempSolution: number = 0;
  for(let counter: number = 0; counter < length; counter++)
  {
    solution += arr[counter];
    tempSolution = solution;
  }

  for(let counter: number = 1; counter < arr.length - length; counter++)
  {
    tempSolution = tempSolution - arr[counter-1] + arr[counter + length - 1]
    if(tempSolution > solution)
    {
      solution = tempSolution;
    }
  }

  return solution;
}
