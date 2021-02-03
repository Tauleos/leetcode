/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (43.56%)
 * Likes:    840
 * Dislikes: 0
 * Total Accepted:    192.4K
 * Total Submissions: 423.9K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 *
 * 示例 1:
 *
 * 输入: 1->2
 * 输出: false
 *
 * 示例 2:
 *
 * 输入: 1->2->2->1
 * 输出: true
 *
 *
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
	let newLink = reverse(JSON.parse(JSON.stringify(head)));
	let a = head,
		b = newLink;
	while (a !== null && b !== null) {
		if (a.val === b.val) {
			a = a.next;
			b = b.next;
		} else {
			return false;
		}
	}
	return true;
};

function reverse(head) {
	let pre = null,
		cur = head;
	while (cur !== null) {
		let temp = cur.next;
		cur.next = pre;
		pre = cur;
		cur = temp;
	}
	return pre;
}
let list = { val: 1, next: { val: 1, next: { val: 2, next: { val: 1, next: null } } } };
// console.log(isPalindrome(list));
// @lc code=end
