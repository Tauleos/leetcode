/*
 * @lc app=leetcode.cn id=472 lang=javascript
 *
 * [472] 连接词
 *
 * https://leetcode-cn.com/problems/concatenated-words/description/
 *
 * algorithms
 * Hard (39.09%)
 * Likes:    200
 * Dislikes: 0
 * Total Accepted:    17K
 * Total Submissions: 35.6K
 * Testcase Example:  '["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]'
 *
 * 给你一个 不含重复 单词的字符串数组 words ，请你找出并返回 words 中的所有 连接词 。
 *
 * 连接词 定义为：一个完全由给定数组中的至少两个较短单词组成的字符串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：words =
 * ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
 * 输出：["catsdogcats","dogcatsdog","ratcatdogcat"]
 * 解释："catsdogcats" 由 "cats", "dog" 和 "cats" 组成;
 * ⁠    "dogcatsdog" 由 "dog", "cats" 和 "dog" 组成;
 * ⁠    "ratcatdogcat" 由 "rat", "cat", "dog" 和 "cat" 组成。
 *
 *
 * 示例 2：
 *
 *
 * 输入：words = ["cat","dog","catdog"]
 * 输出：["catdog"]
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= words.length <= 10^4
 * 0 <= words[i].length <= 1000
 * words[i] 仅由小写字母组成
 * 0 <= sum(words[i].length) <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
	const root = new Trie(),
		res = [];
	words.sort((a, b) => a.length - b.length);
	for (let w of words) {
		if (w.length === 0) {
			continue;
		}
		if (root.find(root, w)) {
			res.push(w);
		} else {
			root.insert(w);
		}
	}
	// console.log('root', root);
	return res;
};
class Trie {
	constructor() {
		this.children = new Array(26);
		this.isEnd = false;
	}
	insert(word) {
		let node = this;
		for (let i of word) {
			const idx = i.charCodeAt() - 'a'.charCodeAt();
			if (node.children[idx] === undefined) {
				node.children[idx] = new Trie();
			}
			node = node.children[idx];
		}
		node.isEnd = true;
	}
	find(root, word) {
		let node = root;
		for (let index = 0; index < word.length; index++) {
			if (node.isEnd) {
				if (this.find(root, word.substring(index, word.length))) {
					return true;
				}
			}
			const idx = word[index].charCodeAt() - 'a'.charCodeAt();
			if (node.children[idx] === undefined) {
				return false;
			}
			node = node.children[idx];
		}
		return node.isEnd;
	}
}
// console.log(findAllConcatenatedWordsInADict(['cat', 'cats']));
// @lc code=end
