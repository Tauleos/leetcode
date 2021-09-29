/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 *
 * https://leetcode-cn.com/problems/path-sum-iii/description/
 *
 * algorithms
 * Medium (56.62%)
 * Likes:    1038
 * Dislikes: 0
 * Total Accepted:    107.7K
 * Total Submissions: 188.9K
 * Testcase Example:  '[10,5,-3,3,2,null,11,3,-2,null,1]\n8'
 *
 * 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
 *
 * 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
 * 输出：3
 * 解释：和等于 8 的路径有 3 条，如图所示。
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * 输出：3
 *
 *
 *
 *
 * 提示:
 *
 *
 * 二叉树的节点个数的范围是 [0,1000]
 * -10^9
 * -1000
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
	let res = 0;

	if (root === null) {
		return 0;
	}
	res += dfsRoot(root, targetSum);
	res += pathSum(root.left, targetSum);
	res += pathSum(root.right, targetSum);
	return res;
};
function dfsRoot(node, target) {
	let res = 0;

	if (node === null) {
		return 0;
	}
	// console.log('node', node.val, target);
	if (node.val === target) {
		res++;
	}
	res += dfsRoot(node.left, target - node.val);
	res += dfsRoot(node.right, target - node.val);
	return res;
}
// @lc code=end
