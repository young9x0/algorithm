const Tree = (function () {
  function Tree() {
    this.count = 0;
    this.root;
  }
  function Node(data) {
    this.data = data;
    this.left;
    this.right;
  }
  function _insert(root, node) {
    if (!root) return node;
    // console.log('node:', node, 'root:', root);
    if (node.data < root.data) {
      //   console.log('root.left:', root.left);
      root.left = _insert(root.left, node);
      return root;
    } else {
      root.right = _insert(root.right, node);
      return root;
    }
    return root;
  }
  Tree.prototype.add = function (data) {
    let node = new Node(data);
    if (this.count == 0) {
      this.root = node;
    } else {
      _insert(this.root, node);
    }
    return ++this.count;
  };
  function _get(data, node) {
    if (node) {
      if (data < node.data) {
        return _get(data, node.left);
      } else if (data > node.data) {
        return _get(data, node.right);
      } else {
        return node;
      }
    } else {
      return null;
    }
  }
  Tree.prototype.get = function (data) {
    if (this.root) {
      return _get(data, this.root);
    } else {
      return null;
    }
  };
  function _remove(root, data) {
    let newRoot, exchange, temp;
    console.log('data:', data, 'root:', root);
    if (!root) return false;

    if (data < root.data) {
      root.left = _remove(root.left, data);
      console.log('1.root.left:', root.left);
      //data: 3, root: Node { data: 3, right: Node { data: 4 }, left: Node { data: 2 } }
    } else if (data > root.data) {
      root.right = _remove(root.right, data);
    } else {
      if (!root.left) {
        newRoot = root.right;
        console.log('newRoot:', newRoot);
        return newRoot;
      } else if (!root.right) {
        newRoot = root.left;
        console.log('newRoot:', newRoot);
        return newRoot;
      } else {
        exchange = root.left;
        console.log('exchange:', exchange);
        while (exchange.right) exchange = exchange.right;
        temp = root.data;
        root.data = exchange.data;
        exchange.data = temp;
        console.log('2.root.left:', root.left, 'exchange.data:', exchange.data);
        root.left = _remove(root.left, exchange.data);
        console.log('3.root.left:', root.left);
      }
    }
    console.log('final:', root);
    return root;
  }
  Tree.prototype.remove = function (key) {
    let node = _remove(this.root, key);
    console.log('node:', node);
    if (node) {
      this.root = node;
      this.count--;
      if (this.count == 0) this.root = null;
    }
    return true;
  };
  return Tree;
})();
let tree = new Tree();
tree.add(5); // 1
tree.add(3); // 2
tree.add(4); // 3
tree.add(2); // 4
tree.add(7); // 5
tree.add(6); // 6
// console.log(tree.get(5));
tree.remove(3);
// data: 3 root: Node {
//     data: 5,
//     left: Node { data: 3, right: Node { data: 4 }, left: Node { data: 2 } },
//     right: Node { data: 7, left: Node { data: 6 } }
//   }
//   data: 3 root: Node { data: 3, right: Node { data: 4 }, left: Node { data: 2 } }
//   exchange: Node { data: 2 }
//   2.root.left: Node { data: 3 } exchange.data: 3
//   data: 3 root: Node { data: 3 }
//   newRoot: undefined
//   3.root.left: undefined
//   final: Node { data: 2, right: Node { data: 4 }, left: undefined }
//   1.root.left: Node { data: 2, right: Node { data: 4 }, left: undefined }
//   final: Node {
//     data: 5,
//     left: Node { data: 2, right: Node { data: 4 }, left: undefined },
//     right: Node { data: 7, left: Node { data: 6 } }
//   }
//   node: Node {
//     data: 5,
//     left: Node { data: 2, right: Node { data: 4 }, left: undefined },
//     right: Node { data: 7, left: Node { data: 6 } }
//   }
