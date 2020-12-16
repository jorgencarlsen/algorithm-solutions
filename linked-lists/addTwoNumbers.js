/*
Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Time: O(Max(n, m))
Space: O(Max(n, m))
*/

const addTwoNumbers = function(l1, l2) {
  let returnListHead = null;
  let returnListTail = null;
  //iterate through the linked lists
  let l1Current = l1;
  let l2Current = l2;
  let remainder = 0;
  while (l1Current || l2Current) {
      let l1Value = l1Current ? l1Current.val : 0;
      let l2Value = l2Current ? l2Current.val : 0;
      let total = l1Value + l2Value + remainder;
      remainder = total > 9 ? 1 : 0;
      let digit = total % 10;

      const node = new ListNode(digit);

      if (!returnListHead) {
          returnListHead = node;
          returnListTail = node;
      } else {
          returnListTail.next = node;
          returnListTail = node;
      }
      l1Current = l1Current ? l1Current.next : null;
      l2Current = l2Current ? l2Current.next : null;
  }
  returnListTail.next = remainder === 1 ? new ListNode(1) : null;
  return returnListHead;
};