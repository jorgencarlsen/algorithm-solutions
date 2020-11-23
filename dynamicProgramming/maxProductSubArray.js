// Find the maximum product subarray of an array.
// https://leetcode.com/problems/maximum-product-subarray/

var maxProduct = function(nums) {
  let maxProd = nums[0];
  let previousMax = nums[0];
  let previousAsMin = nums[0];
  for (let i = 1; i < nums.length; i++) {
      let tempMax = Math.max(previousMax * nums[i],
                             nums[i],
                             previousAsMin * nums[i]
                            );

      previousAsMin = Math.min(previousMax * nums[i],
                             nums[i],
                             previousAsMin * nums[i]);
      previousMax = tempMax;
      maxProd = Math.max(maxProd, previousMax);
  }
  return maxProd;
};
