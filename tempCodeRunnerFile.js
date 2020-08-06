/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (39.61%)
 * Likes:    533
 * Dislikes: 0
 * Total Accepted:    117.1K
 * Total Submissions: 292.2K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 *
 * 你的算法时间复杂度必须是 O(log n) 级别。
 *
 * 如果数组中不存在目标值，返回 [-1, -1]。
 *
 * 示例 1:
 *
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 *
 * 示例 2:
 *
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	let midL, midR;
	// 右侧边界搜索
	function searchR(left, right, target) {
		while (left <= right) {
			let mid = (left + right) / 2;
			if (nums[mid] < target) {
				left = mid + 1;
			} else if (nums[mid] > target) {
				right = mid - 1;
			} else if (nums[mid] === target) {
				rleft = mid + 1;
			}
		}
	}
	// 左侧边界搜索
	function searchL(left, right, target) {
		while (left <= right) {
			const mid = (left + right) / 2;
			if (nums[mid] >= target) {
				right = mid - 1;
			} else if (nums[mid] < target) {
				left = mid + 1;
			}
		}
		return left;
	}
	midL = searchL(0, nums.length - 1, target);
	if (midL >= nums.length || nums[midL] !== target) return [-1, -1];
	midR = searchL(midL + 1, nums.length - 1, target);
	return [midL, midR];
};
console.log(searchRange([5,7,7,8,8,10],8))
// @lc code=end
