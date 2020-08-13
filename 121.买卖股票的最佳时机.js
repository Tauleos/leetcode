/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (54.73%)
 * Likes:    1138
 * Dislikes: 0
 * Total Accepted:    262.6K
 * Total Submissions: 479.8K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 *
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
 *
 * 注意：你不能在买入股票前卖出股票。
 *
 *
 *
 * 示例 1:
 *
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * ⁠    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 *
 *
 * 示例 2:
 *
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	//1、动态规划最主要的问题在于找到状态方程和选择、
	//2、该题目中有三个状态：时间、交易次数、当前的持有状态{0,1}
	//3、1代表持有(持有的时候)，0代表没有股票
	let dp = [];
	let n = prices.length;
	dp[0] = [0, -prices[0]];
	for (let i = 1; i < n; i++) {
		dp[i] = [];
		//今天我没有持有股票，有两种可能：
		// 要么是我昨天就没有持有，然后今天选择 rest，所以我今天还是没有持有；
		// 要么是我昨天持有股票，但是今天我 sell 了，所以我今天没有持有股票了。
		dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
		// 今天我持有股票，有两种可能：
		// 要么昨天没有持有，今天买了(没有持有说明之前一直没有持有)；要么昨天持有，今天不买
		dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
	}
	console.log(dp);
	return dp[n - 1][0];
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// @lc code=end
