/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 *
 * https://leetcode-cn.com/problems/permutation-in-string/description/
 *
 * algorithms
 * Medium (35.92%)
 * Likes:    163
 * Dislikes: 0
 * Total Accepted:    38K
 * Total Submissions: 102.9K
 * Testcase Example:  '"ab"\n"eidbaooo"'
 *
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
 *
 * 换句话说，第一个字符串的排列之一是第二个字符串的子串。
 *
 * 示例1:
 *
 *
 * 输入: s1 = "ab" s2 = "eidbaooo"
 * 输出: True
 * 解释: s2 包含 s1 的排列之一 ("ba").
 *
 *
 *
 *
 * 示例2:
 *
 *
 * 输入: s1= "ab" s2 = "eidboaoo"
 * 输出: False
 *
 *
 *
 *
 * 注意：
 *
 *
 * 输入的字符串只包含小写字母
 * 两个字符串的长度都在 [1, 10,000] 之间
 *
 *
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	let left = 0,
		right = 0;
	let need = new Map();
	let window = new Map();
	let valid = 0;
	for (let i = 0; i < s1.length; i++) {
		const value = need.has(s1[i]) ? need.get(s1[i]) + 1 : 1;
		need.set(s1[i], value);
	}
	while (right < s2.length) {
		const c = s2[right];
		right++;
		if (need.has(c)) {
			window.set(c, window.has(c) ? window.get(c) + 1 : 1);
			if (window.get(c) === need.get(c)) {
				valid++;
			}
		}
		while (right - left >= s1.length) {
			if (valid === need.size) {
				return true;
			}
			const l = s2[left];
			left++;
			if (need.has(l)) {
				if (window.get(l) === need.get(l)) {
					valid--;
				}
				window.set(l, window.get(l) - 1);
			}
		}
	}
	return false;
};
console.log(checkInclusion('ab', 'eidbaooo'));
// @lc code=end
