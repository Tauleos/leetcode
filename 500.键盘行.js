/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 *
 * https://leetcode-cn.com/problems/keyboard-row/description/
 *
 * algorithms
 * Easy (70.92%)
 * Likes:    178
 * Dislikes: 0
 * Total Accepted:    46.1K
 * Total Submissions: 62.3K
 * Testcase Example:  '["Hello","Alaska","Dad","Peace"]'
 *
 * 给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词。键盘如下图所示。
 *
 * 美式键盘 中：
 *
 *
 * 第一行由字符 "qwertyuiop" 组成。
 * 第二行由字符 "asdfghjkl" 组成。
 * 第三行由字符 "zxcvbnm" 组成。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：words = ["Hello","Alaska","Dad","Peace"]
 * 输出：["Alaska","Dad"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：words = ["omk"]
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：words = ["adsdf","sfd"]
 * 输出：["adsdf","sfd"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 * words[i] 由英文字母（小写和大写字母）组成
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
	let res = [];
	const rowIndex = '12210111011122000010020202';
	for (let word of words) {
		let isValid = true;
		const idx = rowIndex[word[0].toLowerCase().charCodeAt() - 'a'.charCodeAt()];
		for (let i = 1; i < word.length; i++) {
			if (rowIndex[word[i].toLowerCase().charCodeAt() - 'a'.charCodeAt()] !== idx) {
				isValid = false;
				break;
			}
		}
		if (isValid) {
			res.push(word);
		}
	}
	return res;
};
// @lc code=end
