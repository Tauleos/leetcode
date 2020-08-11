/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (34.65%)
 * Likes:    4107
 * Dislikes: 0
 * Total Accepted:    601.5K
 * Total Submissions: 1.7M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 示例 1:
 *
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 * 示例 2:
 *
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let left = 0;
	let right = 0;
	let res = 0;
	let map = new Map();
	while (right < s.length) {
		const indexStr = s[right];
		right++;
		let value = 1;
		if (map.has(indexStr)) {
			value += map.get(indexStr);
		}
		map.set(indexStr, value);
		// console.log('map', map, left, right, indexStr);
		while (map.get(indexStr) > 1) {
			const leftStr = s[left];
			left++;
			let value = map.get(leftStr) - 1;
			map.set(leftStr, value);
			// console.log('mapleft', map, left, right, leftStr);
		}
		res = Math.max(res, right - left);
	}
	return res;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
// @lc code=end
