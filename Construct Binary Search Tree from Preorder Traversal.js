class TreeNode {
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  const rootNode = new TreeNode(preorder[0])
  let currntNode = rootNode

  for (let i = 1; i < preorder.length; i++) {
    while(true) {
      if (currntNode.val > preorder[i]) {
        if (!currntNode.left) {
          currntNode.left = new TreeNode(preorder[i])
          currntNode = rootNode
          break
        } else {
          currntNode = currntNode.left
        }
      }
      else {
        if (!currntNode.right) {
          currntNode.right = new TreeNode(preorder[i])
          currntNode = rootNode
          break
        } else {
          currntNode = currntNode.right
        }
      }
    }
  }
  return rootNode
};

console.log(bstFromPreorder([8,5,1,7,10,12]))