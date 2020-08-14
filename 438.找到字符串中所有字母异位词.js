/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 *
 * https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Medium (45.75%)
 * Likes:    342
 * Dislikes: 0
 * Total Accepted:    35K
 * Total Submissions: 76.4K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
 *
 * 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
 *
 * 说明：
 *
 *
 * 字母异位词指字母相同，但排列不同的字符串。
 * 不考虑答案输出的顺序。
 *
 *
 * 示例 1:
 *
 *
 * 输入:
 * s: "cbaebabacd" p: "abc"
 *
 * 输出:
 * [0, 6]
 *
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
 *
 *
 * 示例 2:
 *
 *
 * 输入:
 * s: "abab" p: "ab"
 *
 * 输出:
 * [0, 1, 2]
 *
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
	let left = 0,
		right = 0,
		valid = 0,
		need = new Map(),
		window = new Map(),
		res = [];
	for (let i = 0; i < p.length; i++) {
		const value = need.has(p[i]) ? need.get(p[i]) + 1 : 1;
		need.set(p[i], value);
	}
	while (right < s.length) {
		const c = s[right];
		right++;
		if (need.has(c)) {
			window.set(c, window.has(c) ? window.get(c) + 1 : 1);
			// console.log('need', window, right, left);
			if (window.get(c) === need.get(c)) {
				valid++;
			}
		}
		// console.log('map', valid, need, left, right);
		if (right - left >= p.length) {
			if (valid === need.size) {
				res.push(left);
			}
			const l = s[left];
			left++;
			if (need.has(l)) {
				if (window.get(l) === need.get(l)) {
					valid--;
				}
				window.set(l, window.get(l) - 1);
			}
		}
	}
	return res;
};
// console.log(findAnagrams('baa', 'aa'));
// @lc code=end
