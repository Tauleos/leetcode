/*
 * @lc app=leetcode.cn id=391 lang=javascript
 *
 * [391] 完美矩形
 *
 * https://leetcode-cn.com/problems/perfect-rectangle/description/
 *
 * algorithms
 * Hard (36.15%)
 * Likes:    135
 * Dislikes: 0
 * Total Accepted:    8.7K
 * Total Submissions: 20.5K
 * Testcase Example:  '[[1,1,3,3],[3,1,4,2],[3,2,4,4],[1,3,2,4],[2,3,3,4]]'
 *
 * 给你一个数组 rectangles ，其中 rectangles[i] = [xi, yi, ai, bi]
 * 表示一个坐标轴平行的矩形。这个矩形的左下顶点是 (xi, yi) ，右上顶点是 (ai, bi) 。
 *
 * 如果所有矩形一起精确覆盖了某个矩形区域，则返回 true ；否则，返回 false 。
 *
 *
 * 示例 1：
 *
 *
 * 输入：rectangles = [[1,1,3,3],[3,1,4,2],[3,2,4,4],[1,3,2,4],[2,3,3,4]]
 * 输出：true
 * 解释：5 个矩形一起可以精确地覆盖一个矩形区域。
 *
 *
 * 示例 2：
 *
 *
 * 输入：rectangles = [[1,1,2,3],[1,3,2,4],[3,1,4,2],[3,2,4,4]]
 * 输出：false
 * 解释：两个矩形之间有间隔，无法覆盖成一个矩形。
 *
 * 示例 3：
 *
 *
 * 输入：rectangles = [[1,1,3,3],[3,1,4,2],[1,3,2,4],[3,2,4,4]]
 * 输出：false
 * 解释：图形顶端留有空缺，无法覆盖成一个矩形。
 *
 * 示例 4：
 *
 *
 * 输入：rectangles = [[1,1,3,3],[3,1,4,2],[1,3,2,4],[2,2,4,4]]
 * 输出：false
 * 解释：因为中间有相交区域，虽然形成了矩形，但不是精确覆盖。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= rectangles.length <= 2 * 10^4
 * rectangles[i].length == 4
 * -10^5 <= xi, yi, ai, bi <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function (rectangles) {
	// 计算每个小矩形面积是否等于大矩形面积
	// 看每个顶点出现的次数，如果最后出现一次的顶点不是四个，则说明不符合完美矩形
	let area = 0;
	let a1 = Number.MAX_VALUE,
		b1 = Number.MAX_VALUE,
		a2 = Number.MIN_VALUE,
		b2 = Number.MIN_VALUE;
	let set = new Set();
	const record = (x1, y1) => {
		// 记录顶点出现的次数，如果一个顶点出现偶数次，则移除
		let keys = key(x1, y1);
		if (set.has(keys)) {
			set.delete(keys);
		} else {
			set.add(keys);
		}
	};
	const key = (x, y) => {
		return `x=${x}&y=${y}`;
	};
	for (let rec of rectangles) {
		let x1 = rec[0],
			y1 = rec[1],
			x2 = rec[2],
			y2 = rec[3];
		if (x1 < a1 || y1 < b1) {
			a1 = x1;
			b1 = y1;
		}
		if (x2 > a2 || y2 > b2) {
			a2 = x2;
			b2 = y2;
		}
		area += (x2 - x1) * (y2 - y1);
		record(x1, y1);
		record(x1, y2);
		record(x2, y1);
		record(x2, y2);
	}
	let totalArea = (a2 - a1) * (b2 - b1);
	// console.log('totalArea', totalArea, area);
	// 如果两个面积不相等，直接返回false
	if (area !== totalArea) {
		// console.log('aaa');
		return false;
	}
	// 四个为1的顶点正好是大矩形的四个顶点
	return set.size === 4 && set.has(key(a1, b1)) && set.has(key(a2, b2)) && set.has(key(a1, b2)) && set.has(key(a2, b1));
};
// @lc code=end
