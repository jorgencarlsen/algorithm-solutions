/*
** Jump Game
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.
*/

var canJump = function(nums) {
  let lastGood = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
      if (i + nums[i] >= lastGood) {
          lastGood = i;
      }
  }
  return lastGood === 0;
};
