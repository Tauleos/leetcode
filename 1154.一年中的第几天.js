/*
 * @lc app=leetcode.cn id=1154 lang=javascript
 *
 * [1154] 一年中的第几天
 *
 * https://leetcode-cn.com/problems/day-of-the-year/description/
 *
 * algorithms
 * Easy (57.25%)
 * Likes:    83
 * Dislikes: 0
 * Total Accepted:    33.8K
 * Total Submissions: 52.5K
 * Testcase Example:  '"2019-01-09"'
 *
 * 给你一个字符串 date ，按 YYYY-MM-DD 格式表示一个 现行公元纪年法 日期。请你计算并返回该日期是当年的第几天。
 *
 * 通常情况下，我们认为 1 月 1 日是每年的第 1 天，1 月 2 日是每年的第 2
 * 天，依此类推。每个月的天数与现行公元纪年法（格里高利历）一致。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：date = "2019-01-09"
 * 输出：9
 *
 *
 * 示例 2：
 *
 *
 * 输入：date = "2019-02-10"
 * 输出：41
 *
 *
 * 示例 3：
 *
 *
 * 输入：date = "2003-03-01"
 * 输出：60
 *
 *
 * 示例 4：
 *
 *
 * 输入：date = "2004-03-01"
 * 输出：61
 *
 *
 *
 * 提示：
 *
 *
 * date.length == 10
 * date[4] == date[7] == '-'，其他的 date[i] 都是数字
 * date 表示的范围从 1900 年 1 月 1 日至 2019 年 12 月 31 日
 *
 *
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
	let monthArr = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	let [year, month, day] = date.split('-');
	const isLeapYear = () => {
		if (year % 100 == 0 && year % 400 === 0) {
			return true;
		}
		return year % 4 === 0;
	};
	let res = +day;
	if (isLeapYear() && month > 2) {
		res++;
	}
	month = +month - 1;

	while (month > 0) {
		res += monthArr[month];
		month--;
	}
	return res;
};
// console.log(dayOfYear('2012-03-02'));
// @lc code=end
