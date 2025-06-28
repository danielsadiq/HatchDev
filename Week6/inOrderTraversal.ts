 class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
 }
function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null){
    return []
  }
  const left = inorderTraversal(root.left);
  console.log(root.val)
  const right = inorderTraversal(root.right)
  return [...left, root.val, ...right]
};