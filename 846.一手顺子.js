/*
 * @lc app=leetcode.cn id=846 lang=javascript
 *
 * [846] 一手顺子
 *
 * https://leetcode-cn.com/problems/hand-of-straights/description/
 *
 * algorithms
 * Medium (51.62%)
 * Likes:    184
 * Dislikes: 0
 * Total Accepted:    26.3K
 * Total Submissions: 46.7K
 * Testcase Example:  '[1,2,3,6,2,3,4,7,8]\n3'
 *
 * Alice 手中有一把牌，她想要重新排列这些牌，分成若干组，使每一组的牌数都是 groupSize ，并且由 groupSize 张连续的牌组成。
 *
 * 给你一个整数数组 hand 其中 hand[i] 是写在第 i 张牌，和一个整数 groupSize 。如果她可能重新排列这些牌，返回 true
 * ；否则，返回 false 。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
 * 输出：true
 * 解释：Alice 手中的牌可以被重新排列为 [1,2,3]，[2,3,4]，[6,7,8]。
 *
 * 示例 2：
 *
 *
 * 输入：hand = [1,2,3,4,5], groupSize = 4
 * 输出：false
 * 解释：Alice 手中的牌无法被重新排列成几个大小为 4 的组。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= hand.length <= 10^4
 * 0 <= hand[i] <= 10^9
 * 1 <= groupSize <= hand.length
 *
 *
 *
 *
 * 注意：此题目与 1296
 * 重复：https://leetcode-cn.com/problems/divide-array-in-sets-of-k-consecutive-numbers/
 *
 */

// @lc code=start
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
	const n = hand.length;
	if (n % groupSize !== 0) {
		return false;
	}
	hand.sort((a, b) => a - b);
	let map = new Map();
	for (let i of hand) {
		map.set(i, (map.get(i) || 0) + 1);
	}
	// console.log(map, hand);
	for (let i of hand) {
		if (!map.has(i)) {
			continue;
		}
		for (let j = 0; j < groupSize; j++) {
			const num = i + j;
			if (map.has(num)) {
				let v = map.get(num) - 1;
				if (v > 0) {
					map.set(num, v);
				} else {
					map.delete(num);
				}
			} else {
				return false;
			}
		}
	}
	return true;
};
// a = isNStraightHand([8, 10, 12], 3);
// a = isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3);
// console.log(a);
// @lc code=end
