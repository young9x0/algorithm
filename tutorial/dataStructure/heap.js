const Heap = (function () {
  function Heap() {
    this.arr = [];
  }

  function reheapup(self, idx) {
    if (idx) {
      let parent = parseInt((idx - 1) / 2);
      //   console.log('self:', self, 'parent:', parent);
      if (self.arr[idx] > self.arr[parent]) {
        let temp = self.arr[idx];
        self.arr[idx] = self.arr[parent];
        self.arr[parent] = temp;
        reheapup(self, parent);
      }
    }
  }
  function reheapDown(self, idx) {
    let left = 0;
    let right = 0;
    let large;
    // console.log(
    //   'idx * 2 + 1:',
    //   idx * 2 + 1,
    //   ', self.arr.length:',
    //   self.arr.length,
    // );
    if (idx * 2 + 1 < self.arr.length) {
      //서브트리가 있는지 확인
      left = self.arr[idx * 2 + 1];
      if (idx * 2 + 2 < self.arr.length - 1) {
        right = self.arr[idx * 2 + 2];
      }
      //   console.log('left:', left, 'right:', right);
      if (left > right) {
        large = idx * 2 + 1;
      } else {
        large = idx * 2 + 2;
      }
      //   console.log(
      //     'self.arr[idx]:',
      //     self.arr[idx],
      //     ', self.arr[large]:',
      //     self.arr[large],
      //   );
      if (self.arr[idx] < self.arr[large]) {
        let temp = self.arr[idx];
        self.arr[idx] = self.arr[large];
        self.arr[large] = temp;
        console.log('self:', self, 'large:', large);
        reheapDown(self, large);
      }
    }
  }

  Heap.prototype.insert = function (number) {
    let last = this.arr.length;
    this.arr[last] = number;
    // console.log('this:', this, last);
    reheapup(this, last);
    return true;
  };

  Heap.prototype.delete = function () {
    if (this.arr.length === 0) {
      return false;
    }
    let del = this.arr[0];
    this.arr[0] = this.arr.pop(); //제일 첫 배열 값(빠지는 값)에 가장 마지막 배열 값을 넣는다
    console.log('this:', this);
    reheapDown(this, 0);
    return del;
  };

  Heap.prototype.sort = function () {
    let sort = [];
    let count = this.arr.length;
    for (let i = 0; i < count; i++) {
      sort.push(this.delete());
    }
    return sort;
  };
  return Heap;
})();
const heap = new Heap();
heap.insert(5);
heap.insert(3);
heap.insert(7);
heap.insert(4);
heap.insert(2);
heap.insert(6);
heap.insert(1);
heap.sort(); // [7,6,5,4,3,2,1]
// this: Heap { arr: [ 1, 4, 6, 3, 2, 5 ] }
// self: Heap { arr: [ 6, 4, 1, 3, 2, 5 ] } large: 2
// self: Heap { arr: [ 6, 4, 5, 3, 2, 1 ] } large: 5
// this: Heap { arr: [ 1, 4, 5, 3, 2 ] }
// self: Heap { arr: [ 5, 4, 1, 3, 2 ] } large: 2
// this: Heap { arr: [ 2, 4, 1, 3 ] }
// self: Heap { arr: [ 4, 2, 1, 3 ] } large: 1
// self: Heap { arr: [ 4, 3, 1, 2 ] } large: 3
// this: Heap { arr: [ 2, 3, 1 ] }
// self: Heap { arr: [ 3, 2, 1 ] } large: 1
// this: Heap { arr: [ 1, 2 ] }
// self: Heap { arr: [ 2, 1 ] } large: 1
// this: Heap { arr: [ 1 ] }
// this: Heap { arr: [ 1 ] }
