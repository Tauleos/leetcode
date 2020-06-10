/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  //递归算法
  /* if(N ===0) return 0;
  if(N=== 1) return 1;
  return fib(N-1)+fib(N-2); */
  // 动态规划
  // dp[n] = dp[n-1]+dp[n-2];
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  for(let i = 2;i<=N;i++){
    dp[i]=dp[i-1]+dp[i-2];
  }
  return dp[N];


};
// @lc code=end

