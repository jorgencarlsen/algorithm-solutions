/*
Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any node sequence from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.
*/

// Time: O(n) where n is the number of nodes.
// Space: 0(h) where h is the height of the tree.

var maxPathSum = function(root) {
  const [_, maxSum] = maxPathHelper(root);
  return maxSum;
};

function maxPathHelper(node, runningMaxPath) {

  if (!node) return [0, -Infinity];
  const [maxAsBranchLeft, maxSumLeft] = maxPathHelper(node.left);
  const [maxAsBranchRight, maxSumRight] = maxPathHelper(node.right);
  const maxChildBranch = Math.max(Math.max(maxAsBranchLeft, maxAsBranchRight))
  const maxBranch = Math.max(maxChildBranch + node.val, node.val);
  const maxWithRoot = maxAsBranchLeft + maxAsBranchRight + node.val;
  const maxAtNode = Math.max(maxBranch, maxWithRoot, maxSumLeft, maxSumRight);


  return [maxBranch, maxAtNode];
}
