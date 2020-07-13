/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (42.54%)
 * Likes:    274
 * Dislikes: 0
 * Total Accepted:    84.3K
 * Total Submissions: 197.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 *
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 示例:
 *
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 返回它的最小深度  2.
 *
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
 * @return {number}
 */
var minDepth = function (root) {
	if (root === null) return 0;
	const queue = [root];
	let depth = 1;

	while (queue.length) {
		const size = queue.length;
		for (let i = 0; i < size; i++) {
			let cur = queue.shift();
			if (cur.left === null && cur.right === null) {
				return depth;
			}
			if (cur.left) {
				queue.push(cur.left);
			}
			if (cur.right) {
				queue.push(cur.right);
			}
		}
		depth++;
	}
	return depth;
};
console.log(
	'result',
	minDepth({
		val: 1,
		left: { val: 2, left: { val: 4, left: null, right: null }, right: null },
		right: { val: 3, left: null, right: { val: 5, left: null, right: null } },
	})
);
// @lc code=end
