class BSTNode{
  val:number;
  left: BSTNode | null;
  right: BSTNode | null;
  constructor(val:number){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BSTree{
  root: BSTNode | null;
  constructor(root:BSTNode|null = null){
    this.root = root
  }
  addNode(val:number){
    const newNode = new BSTNode(val);
    let curr = this.root
    if (this.root === null){
      this.root = newNode;
    }
    while (curr){
      if (val > this.root?.val){
        if (curr?.right === null) {
          curr.right = newNode
          return;
        }
        curr = curr.right;
      }
      if (val < this.root?.val){
        if (curr?.left === null) {
          curr.left = newNode
          return;
        }
        curr = curr.left;
      }
      if (val == this.root.val){
        console.log(this.root.val);
      }
    } 
  }
  deleteNode(root:BSTNode, val:number){
    if (root==null) return null
    if (root.val = val){
      if (root.left == null && root.right == null){
        return null
      }
      else if (root.left == null){
        return root.right
      }else if (root.right == null){
        return root.left
      }
      while (root.left !== null){
        
      }
    }
  }
  search(val:number){
    let curr = this.root
    if (this.root === null){
      return;
    }
    while (curr){
      if (val > this.root?.val){
        curr = this.root?.right;
      }
      if (val > this.root?.val){
        curr = this.root?.left;
      }
      if (val == this.root.val){
        console.log(this.root.val);
        return;
      }
    }
  }
}

const myBST = new BSTree();
myBST.addNode(12);
myBST.addNode(13);
myBST.addNode(9);
myBST.addNode(15);
myBST.addNode(6);
myBST.addNode(3);

console.log(myBST.root)
