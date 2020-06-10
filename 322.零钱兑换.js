/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  // 递归算法
  /* function dp(n){
    if(n === 0) return 0;
    if(n<0) return -1;
    let res = Infinity;
    for(let i of coins){
      let sub = dp(n-i);
      if(sub === -1) continue;
      res = Math.min(res,sub+1);
    }
    return res;
  }
  return dp(amount)=== Infinity ? -1:dp(amount); */
  // dp算法
  const dp = new Array(amount+1).fill(Infinity);
  dp[0]=0;
  for(let i=0;i<=amount;i++){
    for(let j of coins){
      if(i-j<0) continue;
      dp[i] = Math.min(dp[i],dp[i-j]+1);
    }
  }
  return dp[amount] === Infinity ? -1:dp[amount];

};
// @lc code=end

