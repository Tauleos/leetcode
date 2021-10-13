/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 *
 * https://leetcode-cn.com/problems/fizz-buzz/description/
 *
 * algorithms
 * Easy (67.41%)
 * Likes:    126
 * Dislikes: 0
 * Total Accepted:    84.9K
 * Total Submissions: 122.9K
 * Testcase Example:  '3'
 *
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
 *
 * 1. 如果 n 是3的倍数，输出“Fizz”；
 *
 * 2. 如果 n 是5的倍数，输出“Buzz”；
 *
 * 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
 *
 * 示例：
 *
 * n = 15,
 *
 * 返回:
 * [
 * ⁠   "1",
 * ⁠   "2",
 * ⁠   "Fizz",
 * ⁠   "4",
 * ⁠   "Buzz",
 * ⁠   "Fizz",
 * ⁠   "7",
 * ⁠   "8",
 * ⁠   "Fizz",
 * ⁠   "Buzz",
 * ⁠   "11",
 * ⁠   "Fizz",
 * ⁠   "13",
 * ⁠   "14",
 * ⁠   "FizzBuzz"
 * ]
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
	let res = [];
	for (let i = 1; i <= n; i++) {
		let t = String(i);
		if (i % 3 == 0 && i % 5 == 0) {
			t = 'FizzBuzz';
		} else if (i % 3 == 0) {
			t = 'Fizz';
		} else if (i % 5 == 0) {
			t = 'Buzz';
		}
		res.push(t);
	}
	return res;
};
// @lc code=end
