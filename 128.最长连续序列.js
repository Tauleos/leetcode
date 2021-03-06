/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 *
 * https://leetcode-cn.com/problems/longest-consecutive-sequence/description/
 *
 * algorithms
 * Hard (51.85%)
 * Likes:    586
 * Dislikes: 0
 * Total Accepted:    83.4K
 * Total Submissions: 159.7K
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * 给定一个未排序的整数数组，找出最长连续序列的长度。
 *
 * 要求算法的时间复杂度为 O(n)。
 *
 * 示例:
 *
 * 输入: [100, 4, 200, 1, 3, 2]
 * 输出: 4
 * 解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
	const map = new Map();
	let max = 0;
	for (let i of nums) {
		if (!map.has(i)) {
			let l = map.get(i - 1) || 0;
			let r = map.get(i + 1) || 0;
			let cur = l + 1 + r;
			map.set(i, cur);
			max = Math.max(max, cur);
			map.set(i - l, cur);
			map.set(i + r, cur);
		}
	}
	return max;
};
// @lc code=end
