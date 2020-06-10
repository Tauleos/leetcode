/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (57.58%)
 * Likes:    1082
 * Dislikes: 0
 * Total Accepted:    350.2K
 * Total Submissions: 603.9K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // 基础string算法
  /* let strArr = String(x).split('');
  return strArr.reverse().join('') === String(x); */
  
  // 不转成string
  // 原理在于截取后一半的数字跟前边一半数字对比，考虑奇数与偶数的情况
  if(x<0 || (x!=0&&x%10===0)){ //负数跟10位整数都是false
    return false;
  }
  let revertedNumber = 0;
  while(x>revertedNumber){
    revertedNumber = revertedNumber *10 + x%10;
    x = Math.floor(x/10);
  }
  return x === revertedNumber || x === Math.floor(revertedNumber/10);
};
// @lc code=end

