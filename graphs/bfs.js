// Implement breadth first search on a graph node class.

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    const queue = [this];
		while (queue.length) {
			const vertex = queue.shift();
			array.push(vertex.name);
			vertex.children.forEach(child => {
				queue.push(child);
			});
		}
		return array;
	}
}
