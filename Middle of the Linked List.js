class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let length = 0
  let currNode = head
  while(currNode = currNode.next) {
    length++
  }
  
  const halfIndex = parseInt(length/2) === length/2 ? length/2 : parseInt(length/2) + 1
  
  currNode = head
  for (let index = 0; index < halfIndex; index++) {
    currNode = currNode.next
  }
  return currNode
};

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)

// console.log()
middleNode(head)