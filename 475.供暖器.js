/*
 * @lc app=leetcode.cn id=475 lang=javascript
 *
 * [475] 供暖器
 *
 * https://leetcode-cn.com/problems/heaters/description/
 *
 * algorithms
 * Medium (33.95%)
 * Likes:    318
 * Dislikes: 0
 * Total Accepted:    37.9K
 * Total Submissions: 99.1K
 * Testcase Example:  '[1,2,3]\n[2]'
 *
 * 冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。
 *
 * 在加热器的加热半径范围内的每个房屋都可以获得供暖。
 *
 * 现在，给出位于一条水平线上的房屋 houses 和供暖器 heaters 的位置，请你找出并返回可以覆盖所有房屋的最小加热半径。
 *
 * 说明：所有供暖器都遵循你的半径标准，加热的半径也一样。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: houses = [1,2,3], heaters = [2]
 * 输出: 1
 * 解释: 仅在位置2上有一个供暖器。如果我们将加热半径设为1，那么所有房屋就都能得到供暖。
 *
 *
 * 示例 2:
 *
 *
 * 输入: houses = [1,2,3,4], heaters = [1,4]
 * 输出: 1
 * 解释: 在位置1, 4上有两个供暖器。我们需要将加热半径设为1，这样所有房屋就都能得到供暖。
 *
 *
 * 示例 3：
 *
 *
 * 输入：houses = [1,5], heaters = [2]
 * 输出：3
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
	let res = 0;
	const binarySearch = (nums, target) => {
		let left = 0;
		let right = nums.length - 1;
		if (nums[left] > target) {
			return -1;
		}
		while (left < right) {
			// console.log('left', left, 'right', right, target);
			const mid = Math.floor((right - left + 1) / 2) + left;
			if (nums[mid] > target) {
				right = mid - 1;
			} else {
				left = mid;
			}
		}
		return left;
	};
	heaters.sort((a, b) => a - b);
	for (let house of houses) {
		//找每个房子对应的最近的暖气片
		const i = binarySearch(heaters, house);
		console.log('i', i);
		let j = i + 1;
		let leftDistance = i < 0 ? Number.MAX_VALUE : house - heaters[i];
		let rightDistance = j >= heaters.length ? Number.MAX_VALUE : heaters[j] - house;
		// console.log('left', leftDistance, rightDistance);
		res = Math.max(res, Math.min(leftDistance, rightDistance));
	}
	return res;
};
console.log(findRadius([1, 2, 3, 4], [1, 4]));
// @lc code=end
