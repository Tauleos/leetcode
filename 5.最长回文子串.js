/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const len = s.length;
	if(len<2) return s;
  let maxLen = 1;
  let res= s[0];

  function centerSpread(str,left,right){
    const len = str.length;
    while(left>=0&&right<len){
      if(str[left] === str[right]){
        left--;
        right++;
      }else{
        break;
      }
    }
    return str.substring(left+1,right);
  }
	for(let i=0;i<len;i++){
		let oddStr = centerSpread(s,i,i);
		let evenStr = centerSpread(s,i,i+1);
		let maxStr = oddStr.length>evenStr.length?oddStr:evenStr;
		if(maxStr.length > maxLen){
      maxLen = maxStr.length;
      res = maxStr;
    }
  }
  return res;
};
// @lc code=end

