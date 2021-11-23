/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 *
 * https://leetcode-cn.com/problems/buddy-strings/description/
 *
 * algorithms
 * Easy (30.45%)
 * Likes:    193
 * Dislikes: 0
 * Total Accepted:    36.6K
 * Total Submissions: 114.1K
 * Testcase Example:  '"ab"\n"ba"'
 *
 * 给你两个字符串 s 和 goal ，只要我们可以通过交换 s 中的两个字母得到与 goal 相等的结果，就返回 true ；否则返回 false 。
 *
 * 交换字母的定义是：取两个下标 i 和 j （下标从 0 开始）且满足 i != j ，接着交换 s[i] 和 s[j] 处的字符。
 *
 *
 * 例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "ab", goal = "ba"
 * 输出：true
 * 解释：你可以交换 s[0] = 'a' 和 s[1] = 'b' 生成 "ba"，此时 s 和 goal 相等。
 *
 * 示例 2：
 *
 *
 * 输入：s = "ab", goal = "ab"
 * 输出：false
 * 解释：你只能交换 s[0] = 'a' 和 s[1] = 'b' 生成 "ba"，此时 s 和 goal 不相等。
 *
 * 示例 3：
 *
 *
 * 输入：s = "aa", goal = "aa"
 * 输出：true
 * 解释：你可以交换 s[0] = 'a' 和 s[1] = 'a' 生成 "aa"，此时 s 和 goal 相等。
 *
 *
 * 示例 4：
 *
 *
 * 输入：s = "aaaaaaabc", goal = "aaaaaaacb"
 * 输出：true
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length, goal.length <= 2 * 10^4
 * s 和 goal 由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
//当 ss 与 goalgoal 长度 或 词频不同，必然不为亲密字符；
//当「ss 与 goalgoal 不同的字符数量为 22（能够相互交换）」或「ss 与 goalgoal 不同的字符数量为 00，但同时 ss 中有出现数量超过 22 的字符（能够相互交换）」时，两者必然为亲密字符。

var buddyStrings = function (s, goal) {
	let n = s.length,
		m = goal.length;
	if (n !== m) return false;

	let arr1 = new Array(26).fill(0),
		arr2 = new Array(26).fill(0);
	let sum = 0;
	let aChar = 'a'.charCodeAt();
	// console.log('achar', aChar);
	for (let i = 0; i < n; i++) {
		let a = s[i].charCodeAt() - aChar;
		let b = goal[i].charCodeAt() - aChar;
		arr1[a]++;
		arr2[b]++;
		// console.log('a', a, 'b', b, goal[i].charCodeAt() - aChar);
		if (a !== b) {
			sum++;
		}
	}
	let ok = false;
	// console.log('arr1', sum, arr1, arr2);
	for (let i = 0; i < 26; i++) {
		if (arr1[i] != arr2[i]) return false;
		if (arr1[i] > 1) ok = true;
	}
	return sum == 2 || (sum == 0 && ok);
};
// console.log(buddyStrings('ab', 'ba'));
// @lc code=end
