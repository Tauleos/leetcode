/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第 N 位数字
 *
 * https://leetcode-cn.com/problems/nth-digit/description/
 *
 * algorithms
 * Medium (41.93%)
 * Likes:    222
 * Dislikes: 0
 * Total Accepted:    25.3K
 * Total Submissions: 57.8K
 * Testcase Example:  '3'
 *
 * 给你一个整数 n ，请你在无限的整数序列 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...] 中找出并返回第 n
 * 位数字。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：3
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 11
 * 输出：0
 * 解释：第 11 位数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是 0 ，它是 10 的一部分。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
	let cur = 1;
	base = 9;
	while (n > cur * base) {
		n -= cur * base;
		cur++;
		base *= 10;
		if (Number.MAX_SAFE_INTEGER / base < cur) {
			break;
		}
	}
	console.log('cur', cur, 'base', base, 'n', n);
	n--;
	const num = Math.pow(10, cur - 1) + Math.floor(n / cur),
		idx = n % cur;
	return Math.floor(num / Math.pow(10, cur - 1 - idx)) % 10;
};
console.log(findNthDigit(200));
// @lc code=end
