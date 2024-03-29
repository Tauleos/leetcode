/*
 * @lc app=leetcode.cn id=223 lang=javascript
 *
 * [223] 矩形面积
 *
 * https://leetcode-cn.com/problems/rectangle-area/description/
 *
 * algorithms
 * Medium (46.36%)
 * Likes:    140
 * Dislikes: 0
 * Total Accepted:    28.6K
 * Total Submissions: 57.1K
 * Testcase Example:  '-3\n0\n3\n4\n0\n-1\n9\n2'
 *
 * 给你 二维 平面上两个 由直线构成的 矩形，请你计算并返回两个矩形覆盖的总面积。
 *
 * 每个矩形由其 左下 顶点和 右上 顶点坐标表示：
 *
 *
 *
 * 第一个矩形由其左下顶点 (ax1, ay1) 和右上顶点 (ax2, ay2) 定义。
 * 第二个矩形由其左下顶点 (bx1, by1) 和右上顶点 (bx2, by2) 定义。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
 * 输出：45
 *
 *
 * 示例 2：
 *
 *
 * 输入：ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 =
 * 2
 * 输出：16
 *
 *
 *
 *
 * 提示：
 *
 *
 * -10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
	let aArea = (ax2 - ax1) * (ay2 - ay1);
	let bArea = (bx2 - bx1) * (by2 - by1);
	let repeatWidth = Math.min(ax2, bx2) - Math.max(bx1, ax1);
	let repeatHeight = Math.min(ay2, by2) - Math.max(ay1, by1);
	// console.log(repeatWidth, repeatHeight);
	let repeat = Math.max(0, repeatHeight) * Math.max(repeatWidth, 0);
	// console.log(aArea, bArea, repeat);
	return aArea + bArea - repeat;
};
// console.log(computeArea(-2, -2, 2, 2, 3, 3, 4, 4));
// @lc code=end
