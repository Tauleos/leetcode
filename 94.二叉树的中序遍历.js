/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  // 基础的递归算法
  /* const res = [];
  function walkTree (node){
    node.left && walkTree(node.left);
    node.val && res.push(node.val);
    node.right && walkTree(node.right);
  }
  root && walkTree(root);
  return res; */
  // 迭代算法
  const stack = [];
  const res = [];
  let cur = root;
  while(!!cur || stack.length){
    if(!!cur){
      stack.push(cur);
      cur = cur.left;
    }else{
      cur = stack.pop();
      res.push(cur.val);
      cur = cur.right;
    }
  }
  return res;

};
// @lc code=end

