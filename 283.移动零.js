/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (63.96%)
 * Likes:    1285
 * Dislikes: 0
 * Total Accepted:    521.6K
 * Total Submissions: 815.4K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 示例:
 *
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 * 说明:
 *
 *
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	//快慢指针进行筛选，把所有的非零数据都提前
	let slow = 0,
		fast = 0;
	let n = nums.length;
	while (fast < n) {
		if (nums[fast] !== 0) {
			nums[slow] = nums[fast];
			slow++;
		}
		fast++;
	}
	for (; slow < n; slow++) {
		nums[slow] = 0;
	}
	// return nums;
};
// @lc code=end
