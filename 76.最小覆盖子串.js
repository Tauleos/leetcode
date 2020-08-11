/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode-cn.com/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (37.79%)
 * Likes:    692
 * Dislikes: 0
 * Total Accepted:    70.1K
 * Total Submissions: 181.7K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 S、一个字符串 T 。请你设计一种算法，可以在 O(n) 的时间复杂度内，从字符串 S 里面找出：包含 T 所有字符的最小子串。
 *
 *
 *
 * 示例：
 *
 * 输入：S = "ADOBECODEBANC", T = "ABC"
 * 输出："BANC"
 *
 *
 *
 * 提示：
 *
 *
 * 如果 S 中不存这样的子串，则返回空字符串 ""。
 * 如果 S 中存在这样的子串，我们保证它是唯一的答案。
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
	const window = {};
	const need = {};
	for (let i = 0; i < t.length; i++) {
		need[t[i]] = (need[t[i]] || 0) + 1;
	}
	let left = 0,
		right = 0,
		valid = 0;
	let start = 0,
		len = Infinity;
	while (right < s.length) {
		const rightStr = s[right];
		right++;
		if (need[rightStr]) {
			window[rightStr] = (window[rightStr] || 0) + 1;
			if (window[rightStr] == need[rightStr]) {
				console.log('valid');
				valid++;
			}
		}
		while (valid === Object.keys(need).length) {
			if (right - left < len) {
				start = left;
				len = right - left;
			}
			const leftStr = s[left];
			left++;
			if (need[leftStr]) {
				if (window[leftStr] == need[leftStr]) {
					valid--;
				}
				window[leftStr]--;
			}
		}
	}
	console.log('final', len);
	return len === Infinity ? '' : s.substr(start, len);
};
console.log('234', minWindow('aa', 'aa'));
// @lc code=end
