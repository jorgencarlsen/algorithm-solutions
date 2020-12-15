/*
Maximum Points You Can Obtain From Cards

There are several cards arranged in a row, and each card has an associated number of points The points are given in the integer array cardPoints.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

Time: O(n)
Space: 0(1)
*/
var maxScore = function(cardPoints, k) {
  let currentPoints = 0;
  for (let i = 0; i < k; i++) {
      currentPoints += cardPoints[i];
  }
  let maxPoints = currentPoints;
  let left = k - 1;
  let right = cardPoints.length - 1;

  while (left >= 0) {
      let entering = cardPoints[right];
      let exiting = cardPoints[left];
      currentPoints = currentPoints - exiting + entering
      maxPoints = Math.max(currentPoints, maxPoints);
      left--;
      right--;
  }

  return maxPoints;
}