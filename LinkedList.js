// example
//   20-->10 --> 5 --> 16

//Lets create a basic strcture first
// Link list have a Head and tail
// head points to the next node and tail always points towards to the Null
// lets assume head as head and the head value is val and the pointer to the next
//location is next

// let linkedList = {
//   head: {
//     val: 10,
//     next: {
//       //this is the pointer which points towards the next memory location
//       val: 5,
//       next: {
//         // this ponits towards the tail in our example
//         val: 16,
//         next: null,
//       },
//     },
//   },
// };
//using this above structure we going to create a class

class LinkedList {
  constructor(value) {
    //this runs very beginning when we create a linkedlist
    this.head = {
      value: value,
      next: null, //bcz at he beginning we only have a one node
    };

    this.tail = this.head;
    this.length = 1;
  }

  // to append some thing to the list create a append method

  append(val) {
    const NewNode = {
      value: val,
      next: null,
    };

    //now putting this into the next of our old tail
    this.tail.next = NewNode;
    //now making this is as our new tail
    this.tail = NewNode;
    this.length++;
    return this;
  }

  prepend(val) {
    const NewNode = {
      value: val,
      next: null,
    };
    NewNode.next = this.head;
    this.head = NewNode;
    this.length++;
    return this;
  }
}

const MyLinkedList = new LinkedList(10);
MyLinkedList.append(15);
MyLinkedList.append(18);
MyLinkedList.prepend(20);

//  20--> 10--> 15--> --> 8
