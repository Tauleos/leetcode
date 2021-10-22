/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 *
 * https://leetcode-cn.com/problems/majority-element-ii/description/
 *
 * algorithms
 * Medium (46.40%)
 * Likes:    444
 * Dislikes: 0
 * Total Accepted:    44.8K
 * Total Submissions: 91.1K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：[3,2,3]
 * 输出：[3]
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1]
 * 输出：[1]
 *
 *
 * 示例 3：
 *
 *
 * 输入：[1,1,1,3,3,2,2,2]
 * 输出：[1,2]
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 *
 *
 *
 *
 * 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1)的算法解决此问题。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
	const n = nums.length;
	const target = n / 3;
	const map = new Map();
	let res = [];
	for (let i = 0; i < n; i++) {
		if (map.has(nums[i])) {
			map.set(nums[i], map.get(nums[i]) + 1);
		} else {
			map.set(nums[i], 1);
		}
	}
	for (let [key, v] of map.entries()) {
		if (v > target) {
			res.push(key);
		}
	}
	return res;
};
// console.log(majorityElement([3, 2, 3]));
// @lc code=end
