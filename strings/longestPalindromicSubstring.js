/*
Find the longest plindromic substring in a string.
Time: 0(n^2)
Space: O(n)
*/

function longestPalindromicSubstring(string) {
	if (string.length = 0) return '';
	const longestPalindromeBoundries = [0, 1];
	let longestSubstringLength = 1;
	for (let i = 0; i < string.length; i++) {
		const evenPalindrome = checkForEvenPalidrome(i, string);
		const oddPalindrome = checkForOddPalidrome(i, string);
		const longestFound = evenPalindrome.length > oddPalindrome.length ? evenPalindrome : oddPalindrome;
		if (longestFound.length > longestSubstringLength) {
			longestPalindromeBoundries[0] = longestFound.boundries[0];
			longestPalindromeBoundries[1] = longestFound.boundries[1];
			longestSubstringLength = longestFound.length;
		}
	}
	return string.slice(longestPalindromeBoundries[0], longestPalindromeBoundries[1]);
}

function checkForOddPalidrome (i, string) {
	let left = i;
	let right = i;
	while (left >= 0 && right < string.length) {
		if (string[left] !== string[right]) {
			return {
				boundries: [left + 1, right],
				length: right - left + 1,
			}
		}
		left--;
		right++;
	}
	return {
		boundries: [left + 1, right],
		length: right - left + 1,
	}
}

function checkForEvenPalidrome (i, string) {
	let left = i;
	let right = i + 1;
	while (left >= 0 && right < string.length) {
		if (string[left] !== string[right]) {
			return {
				boundries: [left + 1, right],
				length: right - left + 1,
			}
		}
		left--;
		right++;
	}
	return {
		boundries: [left + 1, right],
		length: right - left + 1,
	}
}