/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first){
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.first){
      throw new Error("Queue is empty");
    } 
    const removedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return removedNode.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (!this.first) {
      throw new Error("Queue is empty");
    }
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}


//---------------------------------------------------------------------


const queue = new Queue();

// Enqueue 3 nodes to our queue.
queue.enqueue('firstttt is Tom');
queue.enqueue('SECOND in nancy');
queue.enqueue('thurd is choncy');

//check size
console.log("Queue size:", queue.size); // 3

//Dequeue first node
console.log("Dequeued:", queue.dequeue()); // Output: Dequeued: 'firstttt is Tom'

console.log("Queue size:", queue.size); // 2?



// Output the first element without removing it
console.log("First element:", queue.peek()); // Output: First element: should be "SECOND is nancy"


console.log(queue.dequeue()) // nancy

console.log(queue.peek()) // choncy

// check size
console.log(queue.size) // should be 1




module.exports = Queue;
