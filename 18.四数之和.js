/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (38.34%)
 * Likes:    572
 * Dislikes: 0
 * Total Accepted:    109.2K
 * Total Submissions: 284.2K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
 * + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 *
 * 注意：
 *
 * 答案中不可以包含重复的四元组。
 *
 * 示例：
 *
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 *
 * 满足要求的四元组集合为：
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
	nums = nums.sort((a, b) => a - b);
	let n = nums.length;
	let result = [];
	for (let i = 0; i < n; i++) {
		let res = threeSum(nums, i + 1, target - nums[i]);
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
var threeSum = function (nums, start, target) {
	nums = nums.sort((a, b) => a - b);
	let n = nums.length;
	let result = [];
	for (let i = start; i < n; i++) {
		let res = twoSum(nums, i + 1, target - nums[i]);
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
