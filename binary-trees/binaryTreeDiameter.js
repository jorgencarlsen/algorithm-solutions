// Find diameter of binary tree.

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
	const [maxBranch, maxRunningLength] = helper(tree, 0);
	return maxRunningLength;
}

function helper(tree) {
	if (!tree) return [0, 0];

	const [heightLeft, maxDiameterLeft] = helper(tree.left);
	const [heightRight, maxDiameterRight] = helper(tree.right);

	const maxWithRoot =  heightLeft + heightRight;
	const height = Math.max(heightLeft, heightRight) + 1;
	const diameter = Math.max(maxDiameterLeft, maxDiameterRight, maxWithRoot);

	return [height, diameter];
}
