// Suffix Trie Construction

class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
		for (let i = 0; i < string.length; i++) {
			let index = i;
			let currentNode = this.root;
			while (index < string.length) {
				if (currentNode[string[index]] === undefined) {
					currentNode[string[index]] = {};
					currentNode = currentNode[string[index]];
					index++;
				} else {
					currentNode = currentNode[string[index]];
					index++;
				}
			}
			currentNode[this.endSymbol] = true;
		}
		return this.root;
  }

  contains(string) {
		let currentNode = this.root;
		for (let char of string) {
			if (currentNode[char] === undefined) return false;
			currentNode = currentNode[char];
		}
		return currentNode[this.endSymbol] !== undefined;
  }
}
