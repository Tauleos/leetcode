/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (76.14%)
 * Likes:    736
 * Dislikes: 0
 * Total Accepted:    137.1K
 * Total Submissions: 180K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 *
 * 示例:
 *
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	const len = nums.length;
	const result = [];
	if (len < 0) return [];
	back(nums, []);

	function back(nums, track) {
		//树的分支如果走完的话，证明这一条走完了
		if (!nums.length) {
			result.push([...track]);
			return;
		}
		for (let i of nums) {
			track.push(i);
			back(
				nums.filter((n) => n !== i),
				track
			);
			track.pop();
		}
	}
	return result;
};
// @lc code=end
