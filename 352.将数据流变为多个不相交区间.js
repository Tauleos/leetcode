/*
 * @lc app=leetcode.cn id=352 lang=javascript
 *
 * [352] 将数据流变为多个不相交区间
 *
 * https://leetcode-cn.com/problems/data-stream-as-disjoint-intervals/description/
 *
 * algorithms
 * Hard (59.17%)
 * Likes:    93
 * Dislikes: 0
 * Total Accepted:    7.5K
 * Total Submissions: 11.7K
 * Testcase Example:  '["SummaryRanges","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals"]\n' +
  '[[],[1],[],[3],[],[7],[],[2],[],[6],[]]'
 *
 *  给你一个由非负整数 a1, a2, ..., an 组成的数据流输入，请你将到目前为止看到的数字总结为不相交的区间列表。
 * 
 * 实现 SummaryRanges 类：
 * 
 * 
 * 
 * 
 * SummaryRanges() 使用一个空数据流初始化对象。
 * void addNum(int val) 向数据流中加入整数 val 。
 * int[][] getIntervals() 以不相交区间 [starti, endi] 的列表形式返回对数据流中整数的总结。
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：
 * ["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals",
 * "addNum", "getIntervals", "addNum", "getIntervals", "addNum",
 * "getIntervals"]
 * [[], [1], [], [3], [], [7], [], [2], [], [6], []]
 * 输出：
 * [null, null, [[1, 1]], null, [[1, 1], [3, 3]], null, [[1, 1], [3, 3], [7,
 * 7]], null, [[1, 3], [7, 7]], null, [[1, 3], [6, 7]]]
 * 
 * 解释：
 * SummaryRanges summaryRanges = new SummaryRanges();
 * summaryRanges.addNum(1);      // arr = [1]
 * summaryRanges.getIntervals(); // 返回 [[1, 1]]
 * summaryRanges.addNum(3);      // arr = [1, 3]
 * summaryRanges.getIntervals(); // 返回 [[1, 1], [3, 3]]
 * summaryRanges.addNum(7);      // arr = [1, 3, 7]
 * summaryRanges.getIntervals(); // 返回 [[1, 1], [3, 3], [7, 7]]
 * summaryRanges.addNum(2);      // arr = [1, 2, 3, 7]
 * summaryRanges.getIntervals(); // 返回 [[1, 3], [7, 7]]
 * summaryRanges.addNum(6);      // arr = [1, 2, 3, 6, 7]
 * summaryRanges.getIntervals(); // 返回 [[1, 3], [6, 7]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= val <= 10^4
 * 最多调用 addNum 和 getIntervals 方法 3 * 10^4 次
 * 
 * 
 * 
 * 
 * 
 * 
 * 进阶：如果存在大量合并，并且与数据流的大小相比，不相交区间的数量很小，该怎么办?
 * 
 */

// @lc code=start

var SummaryRanges = function () {
	this.arr = new Array(10001);
};

/**
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (val) {
	this.arr[val] = true;
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
	let res = [];
	let n = this.arr.length;
	let i = 0;
	const find = (index) => {
		if (!this.arr[index]) {
			return index;
		} else {
			return find(++index);
		}
	};
	while (i < n) {
		if (this.arr[i] !== undefined) {
			let temp = [i, undefined];
			temp[1] = find(i) - 1;
			i = temp[1] + 1;
			res.push(temp);
		} else {
			i++;
		}
	}
	return res;
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */
// @lc code=end
