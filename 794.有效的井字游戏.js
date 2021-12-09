/*
 * @lc app=leetcode.cn id=794 lang=javascript
 *
 * [794] 有效的井字游戏
 *
 * https://leetcode-cn.com/problems/valid-tic-tac-toe-state/description/
 *
 * algorithms
 * Medium (34.28%)
 * Likes:    94
 * Dislikes: 0
 * Total Accepted:    23.7K
 * Total Submissions: 62.2K
 * Testcase Example:  '["O  ","   ","   "]'
 *
 * 给你一个字符串数组 board 表示井字游戏的棋盘。当且仅当在井字游戏过程中，棋盘有可能达到 board 所显示的状态时，才返回 true 。
 *
 * 井字游戏的棋盘是一个 3 x 3 数组，由字符 ' '，'X' 和 'O' 组成。字符 ' ' 代表一个空位。
 *
 * 以下是井字游戏的规则：
 *
 *
 * 玩家轮流将字符放入空位（' '）中。
 * 玩家 1 总是放字符 'X' ，而玩家 2 总是放字符 'O' 。
 * 'X' 和 'O' 只允许放置在空位中，不允许对已放有字符的位置进行填充。
 * 当有 3 个相同（且非空）的字符填充任何行、列或对角线时，游戏结束。
 * 当所有位置非空时，也算为游戏结束。
 * 如果游戏结束，玩家不允许再放置字符。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：board = ["O  ","   ","   "]
 * 输出：false
 * 解释：玩家 1 总是放字符 "X" 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：board = ["XOX"," X ","   "]
 * 输出：false
 * 解释：玩家应该轮流放字符。
 *
 * 示例 3：
 *
 *
 * 输入：board = ["XXX","   ","OOO"]
 * 输出：false
 *
 *
 * Example 4:
 *
 *
 * 输入：board = ["XOX","O O","XOX"]
 * 输出：true
 *
 *
 *
 *
 * 提示：
 *
 *
 * board.length == 3
 * board[i].length == 3
 * board[i][j] 为 'X'、'O' 或 ' '
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function (board) {
	let xCount = 0,
		oCount = 0;
	for (let i of board) {
		for (let j of i) {
			if (j === 'X') {
				xCount++;
			}
			if (j === 'O') {
				oCount++;
			}
		}
	}
	if (oCount != xCount && oCount !== xCount - 1) {
		return false;
	}
	if (win(board, 'X') && oCount != xCount - 1) {
		return false;
	}
	if (win(board, 'O') && oCount != xCount) {
		return false;
	}
	return true;
};
function win(board, s) {
	for (let i = 0; i < 3; i++) {
		if (s == board[0][i] && s == board[1][i] && s == board[2][i]) {
			return true;
		}
		if (s == board[i][0] && s == board[i][1] && s == board[i][2]) {
			return true;
		}
	}
	if (s == board[0][0] && s == board[1][1] && s == board[2][2]) {
		return true;
	}
	if (s == board[2][0] && s == board[1][1] && s == board[0][2]) {
		return true;
	}
	return false;
}
// @lc code=end
