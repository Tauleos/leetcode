/*
 * @lc app=leetcode.cn id=869 lang=javascript
 *
 * [869] 重新排序得到 2 的幂
 *
 * https://leetcode-cn.com/problems/reordered-power-of-2/description/
 *
 * algorithms
 * Medium (55.33%)
 * Likes:    94
 * Dislikes: 0
 * Total Accepted:    16.1K
 * Total Submissions: 25.6K
 * Testcase Example:  '1'
 *
 * 给定正整数 N ，我们按任何顺序（包括原始顺序）将数字重新排序，注意其前导数字不能为零。
 *
 * 如果我们可以通过上述方式得到 2 的幂，返回 true；否则，返回 false。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 * 输入：1
 * 输出：true
 *
 *
 * 示例 2：
 *
 * 输入：10
 * 输出：false
 *
 *
 * 示例 3：
 *
 * 输入：16
 * 输出：true
 *
 *
 * 示例 4：
 *
 * 输入：24
 * 输出：false
 *
 *
 * 示例 5：
 *
 * 输入：46
 * 输出：true
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= N <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
	//我们可以预处理其十进制表示的字符数组中从 0 到 9 每个字符的出现次数，
	//记在一个长度为 1010 的数组中，并用一哈希表记录这些数组。
	//对于数字 n，我们同样统计其十进制表示的字符数组中从 0 到 }9 每个字符的出现次数，
	//然后去哈希表中查找，若存在则说明 n 可以通过重排得到 2 的幂，否则不能。
	const countDigitals = (n) => {
		const cnt = new Array(10).fill(0);
		while (n) {
			cnt[n % 10]++;
			n = Math.floor(n / 10);
		}
		return cnt.join('');
	};
	const set = new Set();
	for (let i = 1; i <= 1e9; i = i << 1) {
		set.add(countDigitals(i));
	}
	return set.has(countDigitals(n));
};
// @lc code=end
