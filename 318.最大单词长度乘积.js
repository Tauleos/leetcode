/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 *
 * https://leetcode-cn.com/problems/maximum-product-of-word-lengths/description/
 *
 * algorithms
 * Medium (68.90%)
 * Likes:    229
 * Dislikes: 0
 * Total Accepted:    28.4K
 * Total Submissions: 39.7K
 * Testcase Example:  '["abcw","baz","foo","bar","xtfn","abcdef"]'
 *
 * 给定一个字符串数组 words，找到 length(word[i]) * length(word[j])
 * 的最大值，并且这两个单词不含有公共字母。你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: ["abcw","baz","foo","bar","xtfn","abcdef"]
 * 输出: 16
 * 解释: 这两个单词为 "abcw", "xtfn"。
 *
 * 示例 2:
 *
 *
 * 输入: ["a","ab","abc","d","cd","bcd","abcd"]
 * 输出: 4
 * 解释: 这两个单词为 "ab", "cd"。
 *
 * 示例 3:
 *
 *
 * 输入: ["a","aa","aaa","aaaa"]
 * 输出: 0
 * 解释: 不存在这样的两个单词。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 2
 * 1
 * words[i] 仅包含小写字母
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
	let map = new Map();
	for (let word of words) {
		let t = 0;
		for (let w of word) {
			t |= 1 << (w.charCodeAt() - 'a'.charCodeAt());
		}
		if (word.length > (map.get(t) || 0)) {
			map.set(t, word.length);
		}
	}
	let res = 0;
	for (let i of map.keys()) {
		for (let j of map.keys()) {
			if ((i & j) == 0) {
				res = Math.max(res, map.get(i) * map.get(j));
			}
		}
	}
	return res;
};
// @lc code=end
