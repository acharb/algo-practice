class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(node) {
    // init stuff
    if (!this.head) {
      this.head = node;
    }
    if (!this.tail) {
      this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  prepend(node) {
    const hold = this.head;
    this.head = node;
    this.head.next = hold;
  }

  print() {
    let n = this.head;
    while (n) {
      console.log(n.value);
      n = n.next;
    }
  }
}

const ll = new LinkedList();

ll.add(new Node(5));
ll.add(new Node(10));
ll.add(new Node(7));
ll.add(new Node(2));
ll.add(new Node(15));
ll.add(new Node(29));

ll.prepend(new Node(-1));

ll.add(new Node(236));

ll.print();
