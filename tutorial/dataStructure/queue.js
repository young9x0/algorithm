const Queue = (function () {
  function Queue() {
    this.count = 0;
    this.head = null;
    this.rear = null;
  }
  function Node(data) {
    this.data = data;
    this.next = null;
  }
  Queue.prototype.enqueue = function (data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }
    // console.log(this.rear);
    this.rear = node;

    return ++this.count;
  };
  Queue.prototype.dequeue = function () {
    if (!this.head) {
      return false;
    }
    let data = this.head.data;
    this.head = this.head.next;
    --this.count;
    console.log(this.head);
    return data;
  };
  Queue.prototype.front = function () {
    return this.head && this.head.data;
  };
  return Queue;
})();
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(5);
// queue.dequeue();
console.log(queue.front());
