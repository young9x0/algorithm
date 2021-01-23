const Stack = (function () {
  function Stack() {
    this.top = null;
    this.count = 0;
  }
  function Node(data) {
    this.data = data;
    this.next = null;
  }
  Stack.prototype.push = function (data) {
    let node = new Node(data);
    node.next = this.top;
    this.top = node;
    console.log(this.top);
    // Node { data: 1, next: null }
    // Node { data: 2, next: Node { data: 1, next: null } }
    // Node {
    //   data: 3,
    //   next: Node { data: 2, next: Node { data: 1, next: null } }
    // }
    return ++this.count;
  };
  Stack.prototype.pop = function () {
    if (!this.top) {
      return false;
    }
    let data = this.top.data;
    this.top = this.top.next;
    this.count--;
    return data;
  };
  Stack.prototype.stackTop = function () {
    return this.top.data;
  };
  return Stack;
})();
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
