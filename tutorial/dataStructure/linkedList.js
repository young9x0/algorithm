const LinkedList = (function () {
  function LinkedList() {
    this.length = 0;
    this.head = null;
  }
  function Node(data) {
    this.data = data;
    this.next = null;
  }
  LinkedList.prototype.add = function (value) {
    let node = new Node(value);
    let current = this.head;
    if (!current) {
      this.head = node;
      this.length++;
      return node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      //   console.log('current', current);
      //current Node { data: 2, next: Node { data: 3, next: null } }
      this.length++;
      return node;
    }
  };
  LinkedList.prototype.search = function (position) {
    let current = this.head;
    let count = 0;
    // console.log('current', current);
    while (count < position) {
      current = current.next;
      count++;
    }

    return current.data;
  };
  LinkedList.prototype.remove = function (position) {
    let current = this.head;
    let before, remove;
    let count = 0;
    if (position == 0) {
      remove = this.head;
      this.head = this.head.next;
      this.length--;
      return remove;
    } else {
      while (count < position) {
        before = current;
        count++;
        current = current.next;
      }
      remove = current;
      //   console.log(before);
      //   Node {
      //     data: 2,
      //     next: Node { data: 3, next: Node { data: 4, next: null } }
      //   }
      before.next = remove.next;
      this.length--;
      return remove;
    }
  };
  return LinkedList;
})();
const list = new LinkedList();
list.add(2);
list.add(3);
list.add(4);
list.search(1);
list.remove(1);
