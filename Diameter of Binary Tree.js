class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

/** @param {TreeNode} node */
/** @param {Number} depth */
/** @return {Number} maxDepth */
function height(node) {
  if (!Boolean(node)) return 0
  const rDepth = height(node.right)
  const lDepth = height(node.left)
  
  return Math.max(rDepth, lDepth) + 1;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  if (!root) return 0;
  const hR = height(root.right)
  const hL = height(root.left)

  const dR = diameterOfBinaryTree(root.right)
  const dL = diameterOfBinaryTree(root.left)

  return Math.max(hR+hL, Math.max(dR,dL))
};

const n = new TreeNode(1)
n.right = new TreeNode(3)
n.left = new TreeNode(2)
n.left.right = new TreeNode(5)
n.left.left = new TreeNode(4)

console.log(diameterOfBinaryTree(n, 0))
