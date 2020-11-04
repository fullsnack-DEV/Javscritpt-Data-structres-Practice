//To Merge the sorted Array Produce a Optimize solution

// [3,5,6,10,11,12,20]
//[1,2,7,8,15,19]
const Sortedarray = (arr1 = [], arr2 = []) => {
  let result = [];

  while (arr1.length && arr2.length) {
    //will create a variable next and then we will compare the O th index element and so on
    //then we will put the small elemnt in the result array

    const next = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();

    result.push(next);
  }

  if (arr1.length) {
    result = result.concat(arr1);
  }
  if (arr2.length) {
    result = result.concat(arr2);
  }
  console.log(result);
};

Sortedarray([3, 5, 6, 10, 11, 12, 20], [1, 2, 7, 8, 15, 19]);

//so what we are doing here is we are comparing the 0th index elemnt of the both arrays a
//and if we found a small elemnt in any of the array we are shifting that array and putting that
// element in the resulr array.

//Time complexity is O(n)
