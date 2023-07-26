function buildGraph(tickets) {
    const graph = {};
  
    for (const [from, to] of tickets) {
      if (!graph[from]) {
        graph[from] = [];
      }
      graph[from].push(to);
    }
    for (const airport in graph) {
      graph[airport].sort();
    }
  
    return graph;
  }
  
  function dfs(graph, node, itinerary) {
    const destinations = graph[node];
  
    while (destinations && destinations.length) {
      const nextNode = destinations.shift();
      dfs(graph, nextNode, itinerary);
    }
    itinerary.unshift(node);
  }
  
  function findPath(tickets) {
    const graph = buildGraph(tickets);
    const itinerary = [];
  
    dfs(graph, "A", itinerary);
  
    return itinerary;
  }
  
 
  console.log(findPath([["C", "F"], ["A", "C"], ["I", "Z"], ["F", "I"]])); 
  console.log(findPath([["A","C"],["A","B"],["C","B"],["B","A"],["B","C"]]));
  console.log(findPath([["Y", "L"], ["D", "A"],["A", "D"], ["R", "Y"], ["A", "R"]])); 
  