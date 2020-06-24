/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 *
 * https://leetcode-cn.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (69.83%)
 * Likes:    420
 * Dislikes: 0
 * Total Accepted:    43.8K
 * Total Submissions: 62.6K
 * Testcase Example:  '4'
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 *
 *
 *
 * 上图为 8 皇后问题的一种解法。
 *
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 *
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 *
 * 示例:
 *
 * 输入: 4
 * 输出: [
 * ⁠[".Q..",  // 解法 1
 * ⁠ "...Q",
 * ⁠ "Q...",
 * ⁠ "..Q."],
 *
 * ⁠["..Q.",  // 解法 2
 * ⁠ "Q...",
 * ⁠ "...Q",
 * ⁠ ".Q.."]
 * ]
 * 解释: 4 皇后问题存在两个不同的解法。
 *
 *
 *
 *
 * 提示：
 *
 *
 *
 * 皇后，是国际象棋中的棋子，意味着国王的妻子。皇后只做一件事，那就是“吃子”。当她遇见可以吃的棋子时，就迅速冲上去吃掉棋子。当然，她横、竖、斜都可走一到七步，可进可退。（引用自
 * 百度百科 - 皇后 ）
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
	const res = [];
	function backtrack(board, row) {
		//触发结束条件
		if (row === n) {
			res.push(board.map((c) => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
			return;
		}
		for (let col = 0; col < n; col++) {
			//去除不合理选项
			if (!isValid(board, row, col)) {
				continue;
			}
			//做决策
			board.push(col);
			//进入下一层决策树,在这里意味着去棋盘的下一行
			backtrack(board, row + 1);
			//撤销决策
			board.pop();
		}
	}
	function isValid(board, row, col) {
		for (let i = 0; i < row; i++) {
			//列查询
			if (board[i] === col) {
				return false;
			}
			// 左上角跟右下角差值相等   1,1 2,2 3,3
			if (row - col === i - board[i]) {
				return false;
			}
			//左下角跟右上角和值相等    3,1 2,2 1,3
			if (row + col === i + board[i]) {
				return false;
			}
		}
		return true;
	}
	backtrack([], 0);
	return res;
};
console.log('result', solveNQueens(4));
// @lc code=end
