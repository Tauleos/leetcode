/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (27.19%)
 * Likes:    2184
 * Dislikes: 0
 * Total Accepted:    233K
 * Total Submissions: 854.7K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？请你找出所有满足条件且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 *
 * 示例：
 *
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 *
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	nums = nums.sort((a, b) => a - b);
	let n = nums.length;
	let result = [];
	for (let i = 0; i < n; i++) {
		let res = twoSum(nums, i + 1, 0 - nums[i]);
		for (let v of res) {
			v.unshift(nums[i]);
			result.push(v);
		}
		while (i < n - 1 && nums[i] == nums[i + 1]) {
			i++;
		}
	}
	return result;
};

function twoSum(nums, start, target) {
	let lo = start;
	let hi = nums.length - 1;
	let res = [];
	while (lo < hi) {
		let sum = nums[lo] + nums[hi];
		let left = nums[lo];
		let right = nums[hi];
		if (sum < target) {
			while (lo < hi && nums[lo] == left) {
				lo++;
			}
		} else if (sum > target) {
			while (lo < hi && nums[hi] == right) {
				hi--;
			}
		} else {
			res.push([left, right]);
			while (lo < hi && nums[lo] == left) {
				lo++;
			}
			while (lo < hi && nums[hi] == right) {
				hi--;
			}
		}
	}
	return res;
}
// @lc code=end

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
