/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 *
 * https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/description/
 *
 * algorithms
 * Easy (42.02%)
 * Likes:    118
 * Dislikes: 0
 * Total Accepted:    57.2K
 * Total Submissions: 130.4K
 * Testcase Example:  '[3,6,1,0]'
 *
 * 给你一个整数数组 nums ，其中总是存在 唯一的 一个最大整数 。
 *
 * 请你找出数组中的最大元素并检查它是否 至少是数组中每个其他数字的两倍 。如果是，则返回 最大元素的下标 ，否则返回 -1 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [3,6,1,0]
 * 输出：1
 * 解释：6 是最大的整数，对于数组中的其他整数，6 大于数组中其他元素的两倍。6 的下标是 1 ，所以返回 1 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,3,4]
 * 输出：-1
 * 解释：4 没有超过 3 的两倍大，所以返回 -1 。
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1]
 * 输出：0
 * 解释：因为不存在其他数字，所以认为现有数字 1 至少是其他数字的两倍。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 * nums 中的最大元素是唯一的
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
	// let max = Math.max.apply(null, nums);
	// let idx = -1;
	// let n = nums.length;
	// // console.log(',ax', max, nums);
	// for (let i = 0; i < n; i++) {
	// 	if (nums[i] === max) {
	// 		idx = i;
	// 	} else if (max < 2 * nums[i]) {
	// 		return -1;
	// 	}
	// 	// console.log('mi,s[i', nums[i]);
	// }
	// return idx;

	//纪录最大值和次大值，进行比较
	let n = nums.length;
	if (n == 1) return 0;
	let a = -1,
		b = 0;
	for (let i = 1; i < n; i++) {
		if (nums[i] > nums[b]) {
			a = b;
			b = i;
		} else if (a == -1 || nums[i] > nums[a]) {
			a = i;
		}
	}
	return nums[b] >= nums[a] * 2 ? b : -1;
};
// @lc code=end
// console.log(dominantIndex([3, 6, 1, 0]));
