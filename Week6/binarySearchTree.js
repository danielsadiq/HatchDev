"use strict";
// class BSTNode{
//   val:number;
//   left: BSTNode | null;
//   right: BSTNode | null;
//   constructor(val:number){
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// class BSTree{
//   root: BSTNode | null;
//   constructor(root:BSTNode|null = null){
//     this.root = root
//   }
//   addNode(val:number){
//     const newNode = new BSTNode(val);
//     let curr = this.root
//     while (curr){
//       if (this.root === null){
//         this.root = newNode;
//       }
//       if (val > this.root?.val){
//         curr = this.root?.right;
//         // if (curr?.right === null) curr.right = newNode
//         curr?.right === null ?  curr.right = newNode : undefined
//       }
//       if (val > this.root?.val){
//         curr = this.root?.left;
//         if (curr?.left === null) curr.left = newNode
//       }
//       if (val == this.root.val){
//         console.log(this.root.val);
//       }
//     } 
//   }
//   search(val:number){
//     let curr = this.root
//     if (this.root === null){
//       return;
//     }
//     while (curr){
//       if (val > this.root?.val){
//         curr = this.root?.right;
//       }
//       if (val > this.root?.val){
//         curr = this.root?.left;
//       }
//       if (val == this.root.val){
//         console.log(this.root.val);
//         return;
//       }
//     }
//   }
// }
// const myBST = new BSTree();
// myBST.addNode(12);
// myBST.addNode(13);
// myBST.addNode(9);
// myBST.addNode(15);
// myBST.addNode(6);
