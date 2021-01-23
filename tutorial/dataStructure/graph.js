const Graph = (function () {
  function Vertex(key) {
    this.next = null;
    this.arc = null;
    this.key = key;
    this.inTree = null;
  }
  function Arc(data, dest, capacity) {
    this.nextArc = null;
    this.destination = dest;
    this.data = data;
    this.capacity = capacity;
    this.inTree = null;
  }
  function Graph() {
    this.count = 0;
    this.first = null;
  }
  Graph.prototype.insertVertex = function (key) {
    const vertex = new Vertex(key);
    let last = this.first;

    if (last) {
      while (last.next !== null) {
        last = last.next;
      }
      last.next = vertex;
    } else {
      this.first = vertex;
    }
    this.count++;
  };
  Graph.prototype.deleteVertex = function (key) {
    let vertex = this.first;
    let prev = null;
    // console.log('vertex:', vertex, ', key:', key);
    while (vertex.key !== key) {
      prev = vertex;
      vertex = vertex.next;
    }
    // console.log(', prev:', prev);
    if (!vertex) return false;
    if (!vertex.arc) return false;
    if (prev) {
      prev.next = vertex.next;
    } else {
      this.first = vertex.next;
    }
    this.count--;
  };
  Graph.prototype.insertArc = function (data, fromKey, toKey, capacity) {
    let from = this.first;
    let to = this.first;
    // console.log('from:', from, ', to:', to, ', fromKey:', fromKey);
    while (from && from.key !== fromKey) {
      from = from.next;
    }
    while (to && to.key !== toKey) {
      to = to.next;
    }
    if (!from || !to) return false;
    const arc = new Arc(data, to, capacity);
    let fromLast = from.arc;
    // console.log('1', fromLast);
    if (fromLast) {
      //   console.log('2', fromLast.nextArc);
      while (fromLast.nextArc != null) {
        fromLast = fromLast.nextArc;
      }
      fromLast.nextArc = arc;
      //   console.log('3', fromLast);
    } else {
      from.arc = arc;
    }
  };
  Graph.prototype.deleteArc = function (fromKey, toKey) {
    let from = this.first;
    console.log('from:', from, fromKey, toKey);
    while (from !== null) {
      if (from.key === fromKey) break;
      from = from.next;
    }
    if (!from) return false;
    let fromArc = from.arc;
    let preArc;
    while (fromArc != null) {
      if (toKey === fromArc.destination.key) break;
      preArc = fromArc;
      fromArc = fromArc.next;
      console.log('1.preArc:', preArc, ', fromArc:', fromArc);
    }
    if (!fromArc) return false;
    if (preArc) {
      console.log('2.preArc:', preArc);
      preArc.nextArc = fromArc.nextArc;
    } else {
      from.arc = fromArc.nextArc;
    }
  };
  return Graph;
})();
const graph = new Graph();
graph.insertVertex('A');
graph.insertVertex('B');
graph.insertVertex('C');
graph.insertVertex('D');
graph.insertVertex('E');
graph.insertVertex('F');
graph.insertArc(1, 'A', 'B');
graph.insertArc(1, 'B', 'C');
graph.insertArc(1, 'B', 'E');
graph.insertArc(1, 'C', 'E');
graph.deleteArc('C', 'E');
graph.deleteArc('A', 'B');
graph.deleteArc('B', 'E');
graph.insertArc(1, 'C', 'D');
graph.insertArc(1, 'E', 'D');
graph.insertArc(1, 'E', 'F');
