/*
 * @lc app=leetcode.cn id=930 lang=javascript
 *
 * [930] 和相同的二元子数组
 *
 * https://leetcode-cn.com/problems/binary-subarrays-with-sum/description/
 *
 * algorithms
 * Medium (41.35%)
 * Likes:    175
 * Dislikes: 0
 * Total Accepted:    22.8K
 * Total Submissions: 43.2K
 * Testcase Example:  '[1,0,1,0,1]\n2'
 *
 * 给你一个二元数组 nums ，和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。
 *
 * 子数组 是数组的一段连续部分。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,0,1,0,1], goal = 2
 * 输出：4
 * 解释：
 * 有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,0,0,0,0], goal = 0
 * 输出：15
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * nums[i] 不是 0 就是 1
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
	let map = new Map();
	let res = 0;
	let sum = 0;
	//前缀和
	for (let i of nums) {
		map.set(sum, (map.get(sum) || 0) + 1);
		sum += i;
		res += map.get(sum - goal) || 0;
		// console.log(map);
	}
	// console.log(map);
	return res;
};
// console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
// @lc code=end
