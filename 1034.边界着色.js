/*
 * @lc app=leetcode.cn id=1034 lang=javascript
 *
 * [1034] 边界着色
 *
 * https://leetcode-cn.com/problems/coloring-a-border/description/
 *
 * algorithms
 * Medium (43.85%)
 * Likes:    69
 * Dislikes: 0
 * Total Accepted:    9.6K
 * Total Submissions: 19K
 * Testcase Example:  '[[1,1],[1,2]]\n0\n0\n3'
 *
 * 给你一个大小为 m x n 的整数矩阵 grid ，表示一个网格。另给你三个整数 row、col 和 color
 * 。网格中的每个值表示该位置处的网格块的颜色。
 *
 * 当两个网格块的颜色相同，而且在四个方向中任意一个方向上相邻时，它们属于同一 连通分量 。
 *
 * 连通分量的边界 是指连通分量中的所有与不在分量中的网格块相邻（四个方向上）的所有网格块，或者在网格的边界上（第一行/列或最后一行/列）的所有网格块。
 *
 * 请你使用指定颜色 color 为所有包含网格块 grid[row][col] 的 连通分量的边界 进行着色，并返回最终的网格 grid 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：grid = [[1,1],[1,2]], row = 0, col = 0, color = 3
 * 输出：[[3,3],[3,2]]
 *
 * 示例 2：
 *
 *
 * 输入：grid = [[1,2,2],[2,3,2]], row = 0, col = 1, color = 3
 * 输出：[[1,3,3],[2,3,3]]
 *
 * 示例 3：
 *
 *
 * 输入：grid = [[1,1,1],[1,1,1],[1,1,1]], row = 1, col = 1, color = 2
 * 输出：[[2,2,2],[2,1,2],[2,2,2]]
 *
 *
 *
 * 提示：
 *
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 50
 * 1 <= grid[i][j], color <= 1000
 * 0 <= row < m
 * 0 <= col < n
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function (grid, row, col, color) {
	let area = [
		[-1, 0],
		[0, -1],
		[1, 0],
		[0, 1],
	];
	let m = grid.length,
		n = grid[0].length;
	const visited = new Array(m).fill(0).map(() => new Array(n).fill(0));
	const map = new Map();
	const paint = (row, col) => {
		if (row < 0 || col < 0 || row >= m || col >= n) {
			return;
		}

		let isBorder = false;
		for (let i of area) {
			let newRow = row + i[0],
				newCol = col + i[1];

			if (!(newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && grid[row][col] === grid[newRow][newCol])) {
				isBorder = true;
			} else if (!visited[newRow][newCol]) {
				visited[newRow][newCol] = true;
				paint(newRow, newCol);
			}
		}
		if (isBorder) {
			map.set(`${row}-${col}`, true);
		}
	};
	paint(row, col);
	// console.log('map', map);
	for (let [key, val] of map.entries()) {
		if (val) {
			let [row, col] = key.split('-');
			grid[row][col] = color;
		}
	}
	return grid;
};
// console.log(
// 	colorBorder(
// 		[
// 			[1, 2, 1, 2, 1, 2],
// 			[2, 2, 2, 2, 1, 2],
// 			[1, 2, 2, 2, 1, 2],
// 		],
// 		0,
// 		3,
// 		1
// 	)
// );
// @lc code=end
