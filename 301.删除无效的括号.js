/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 *
 * https://leetcode-cn.com/problems/remove-invalid-parentheses/description/
 *
 * algorithms
 * Hard (52.33%)
 * Likes:    555
 * Dislikes: 0
 * Total Accepted:    39K
 * Total Submissions: 72.8K
 * Testcase Example:  '"()())()"'
 *
 * 给你一个由若干括号和字母组成的字符串 s ，删除最小数量的无效括号，使得输入的字符串有效。
 *
 * 返回所有可能的结果。答案可以按 任意顺序 返回。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "()())()"
 * 输出：["(())()","()()()"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "(a)())()"
 * 输出：["(a())()","(a)()()"]
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = ")("
 * 输出：[""]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 由小写英文字母以及括号 '(' 和 ')' 组成
 * s 中至多含 20 个括号
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
	const res = [];
	let currSet = new Set();
	currSet.add(s);
	while (true) {
		for (let s of currSet) {
			if (isValid(s)) {
				res.push(s);
			}
		}
		if (res.length) {
			return res;
		}
		const nextSet = new Set();
		for (let s of currSet) {
			for (let i = 0; i < s.length; i++) {
				if (i > 0 && s[i - 1] === s[i]) {
					continue;
				}
				if (s[i] === '(' || s[i] === ')') {
					nextSet.add(s.substring(0, i) + s.substring(i + 1));
				}
			}
		}
		currSet = nextSet;
	}
};
function isValid(str) {
	let count = 0;
	for (let i of str) {
		if (i === '(') {
			count++;
		} else if (i === ')') {
			count--;
			if (count < 0) {
				return false;
			}
		}
	}
	return count === 0;
}
// @lc code=end
