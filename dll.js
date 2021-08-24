export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Push a new value to the tail of the linked list.
   */

  push(value) {}

  /**
   * Remove an item from the end of the linked list.
   */
  pop() {}

  /**
   * Remove a node from the beginning of the list.
   */
  shift() {}

  /**
   * Add a node to the head of the linked list.
   */
  unshift(value) {}

  /**
   * Get a Node at a specific index
   */
  getNodeAtIndex(index) {
    //PSUEDO CODE
    //If index
    //then the specific node related to that index
    //Take value set it to itself

    //Take the index and loop through the list and look for the desired value
    // if (index == this.value) {
    //   return this.value;
    // }
    // //or next
    // if (index == this.value.next) {
    //   return this.value.next;
    // }
    // //or prev
    // if (index == this.value.prev) {
    //   return this.value.prev;
    // }
    //I know that I have to corellate the index with the value

    //My actual code so far:
    if (index == this.length) {
      let currentNode = this.head; //I have to set the head because code doesn't know what the head or tail is
      while (currentNode != index) {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }

  /**
   * Set a node at a specific index.
   */
  setNodeAtIndex(index, value) {}

  /**
   *  Insert a node at a specific index.
   */
  insertAtIndex(index, val) {}

  /**
   * Remove a node at a specific index.
   */
  removeAtIndex(index) {}
}
