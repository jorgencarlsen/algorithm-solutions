// Number of Connected Componenets in an Undirected Graph
// Time: O(n^2)
// Space: O(n + e)

function countComponents(n, edges) {
  for (let node = 0; node < n; node++) {
      graph[node] = [];
  }

  for (let edge of edges) {
      graph[edge[0]].push(edge[1]);
      graph[edge[1]].push(edge[0]);
  }

  let count = 0;
  const visited = {};

  for (let node = 0; node < n; node++) {
      if (!(visited.hasOwnProperty(node))) {
          count += 1;
          dfs(node, graph, visited);
      }
  }

  return count;
};

function dfs(node, graph, visited) {
  const queue = [node];

  while (queue.length) {
      let currentNode = queue.shift();
      visited[currentNode] = true;

      for (let node of graph[currentNode]) {
          if (!(visited.hasOwnProperty(node))) {
              queue.push(node);
          }
      }
  }
}