/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 *
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (51.62%)
 * Likes:    646
 * Dislikes: 0
 * Total Accepted:    97K
 * Total Submissions: 186.5K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 *
 * 说明:
 * 1 ≤ m ≤ n ≤ 链表长度。
 *
 * 示例:
 *
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
	if (head === null) return null;
	let dummy = new ListNode(0, head);
	let pre = dummy;
	for (let i = 0; i < m - 1; i++) {
		pre = pre.next;
	}
	let start = pre.next;
	let then = start.next;
	for (let i = 0; i < n - m; i++) {
		start.next = then.next;
		then.next = pre.next;
		pre.next = then;
		then = start.next;
	}
	return dummy.next;
};
// @lc code=end
