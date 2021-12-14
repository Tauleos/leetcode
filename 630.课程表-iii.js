/*
 * @lc app=leetcode.cn id=630 lang=javascript
 *
 * [630] 课程表 III
 *
 * https://leetcode-cn.com/problems/course-schedule-iii/description/
 *
 * algorithms
 * Hard (37.22%)
 * Likes:    273
 * Dislikes: 0
 * Total Accepted:    19.5K
 * Total Submissions: 43.8K
 * Testcase Example:  '[[100,200],[200,1300],[1000,1250],[2000,3200]]'
 *
 * 这里有 n 门不同的在线课程，按从 1 到 n 编号。给你一个数组 courses ，其中 courses[i] = [durationi,
 * lastDayi] 表示第 i 门课将会 持续 上 durationi 天课，并且必须在不晚于 lastDayi 的时候完成。
 *
 * 你的学期从第 1 天开始。且不能同时修读两门及两门以上的课程。
 *
 * 返回你最多可以修读的课程数目。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：courses = [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]
 * 输出：3
 * 解释：
 * 这里一共有 4 门课程，但是你最多可以修 3 门：
 * 首先，修第 1 门课，耗费 100 天，在第 100 天完成，在第 101 天开始下门课。
 * 第二，修第 3 门课，耗费 1000 天，在第 1100 天完成，在第 1101 天开始下门课程。
 * 第三，修第 2 门课，耗时 200 天，在第 1300 天完成。
 * 第 4 门课现在不能修，因为将会在第 3300 天完成它，这已经超出了关闭日期。
 *
 * 示例 2：
 *
 *
 * 输入：courses = [[1,2]]
 * 输出：1
 *
 *
 * 示例 3：
 *
 *
 * 输入：courses = [[3,2],[4,3]]
 * 输出：0
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= courses.length <= 10^4
 * 1 <= durationi, lastDayi <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
	courses.sort((a, b) => a[1] - b[1]);
	const priorityQ = [];
	let total = 0;
	for (let i = 0; i < courses.length; i++) {
		if (total + courses[i][0] <= courses[i][1]) {
			total += courses[i][0];
			priorityQ.push(courses[i][0]);
			//每存入一门课都sort一下让用时最久的课程放在数组最后，方便弹出pop
			priorityQ.sort((a, b) => a - b);
			continue;
		}
		//新课程比已修课程中最大时间课程（数组末尾的课程）时间短，则替换，并重新排序
		if (courses[i][0] <= priorityQ[priorityQ.length - 1]) {
			let out = priorityQ.pop();
			total -= out;
			total += courses[i][0];
			priorityQ.push(courses[i][0]);
			priorityQ.sort((a, b) => a - b);
			continue;
		}
	}
	// console.log('res', priorityQ);
	return priorityQ.length;
};
// scheduleCourse([
// 	[100, 200],
// 	[200, 1300],
// 	[1000, 1250],
// 	[800, 2000],
// ]);
// @lc code=end
