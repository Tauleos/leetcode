/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的K对数字
 *
 * https://leetcode-cn.com/problems/find-k-pairs-with-smallest-sums/description/
 *
 * algorithms
 * Medium (40.71%)
 * Likes:    319
 * Dislikes: 0
 * Total Accepted:    34.2K
 * Total Submissions: 83.1K
 * Testcase Example:  '[1,7,11]\n[2,4,6]\n3'
 *
 * 给定两个以 升序排列 的整数数组 nums1 和 nums2 , 以及一个整数 k 。
 *
 * 定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2 。
 *
 * 请找到和最小的 k 个数对 (u1,v1),  (u2,v2)  ...  (uk,vk) 。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
 * 输出: [1,2],[1,4],[1,6]
 * 解释: 返回序列中的前 3 对数：
 * ⁠    [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
 * 输出: [1,1],[1,1]
 * 解释: 返回序列中的前 2 对数：
 * [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
 *
 *
 * 示例 3:
 *
 *
 * 输入: nums1 = [1,2], nums2 = [3], k = 3
 * 输出: [1,3],[2,3]
 * 解释: 也可能序列中所有的数对都被返回:[1,3],[2,3]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= nums1.length, nums2.length <= 10^5
 * -10^9 <= nums1[i], nums2[i] <= 10^9
 * nums1 和 nums2 均为升序排列
 * 1 <= k <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
	//小顶堆
	const pq = new PriorityQueue(),
		res = [];
	for (let i = 0; i < Math.min(nums1.length, k); i++) {
		pq.offer([nums1[i] + nums2[0], i, 0]);
	}
	// console.log(pq.data);
	while (pq.size > 0 && k-- > 0) {
		const cur = pq.poll();
		res.push([nums1[cur[1]], nums2[cur[2]]]);
		if (cur[2] < nums2.length - 1) {
			pq.offer([nums1[cur[1]] + nums2[cur[2] + 1], cur[1], cur[2] + 1]);
		}
	}
	return res;
};
class PriorityQueue {
	constructor(compare = (a, b) => a[0] - b[0] < 0) {
		this.data = [];
		this.size = 0;
		this.compare = compare;
	}
	peek() {
		return this.size === 0 ? null : this.data[0];
	}
	offer(val) {
		this.data.push(val);
		this._shiftUp(this.size++);
	}
	poll() {
		if (this.size === 0) {
			return null;
		}
		// console.log('poll', this.data);
		this._swap(0, --this.size);
		this._shiftDown(0);
		return this.data.pop();
	}
	_shiftDown(index) {
		while (this._child(index) < this.size) {
			let child = this._child(index);
			if (child + 1 < this.size && this.compare(this.data[child + 1], this.data[child])) {
				child = child + 1;
			}
			// console.log('index', index, this.data);
			if (this.compare(this.data[index], this.data[child])) {
				break;
			}
			this._swap(index, child);
			index = child;
		}
	}

	_shiftUp(index) {
		// console.log('shift-up', index);
		while (this._parent(index) >= 0 && this.compare(this.data[index], this.data[this._parent(index)])) {
			this._swap(index, this._parent(index));
			index = this._parent(index);
		}
	}
	_parent(index) {
		return (index - 1) >> 1;
	}
	_child(index) {
		return (index << 1) + 1;
	}
	_swap(a, b) {
		[this.data[a], this.data[b]] = [this.data[b], this.data[a]];
	}
}

// console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));

// @lc code=end
