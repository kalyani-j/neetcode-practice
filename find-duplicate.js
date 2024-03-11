/**Program to check duplicates */
function findDuplicate(nums) {
  let dupNums = new Set();

  for (i = 0; i < nums.length; i++) {
    if (dupNums.has(nums[i])) return true;
    else dupNums.add(nums[i]);
  }
  return false;
}

console.log(findDuplicate([1, 2, 3, 1]));

console.log(findDuplicate([1, 2, 3]));

console.log(findDuplicate([1, 2, 3, 1, 111, 123455, 500444, 800, 7000, 144444000, 1234566, 1234566]));
