/**
 * 
 * 描述
有 500 个小孩围成一圈，编号从 1 到 500，从第一个开始报数：1，2，3，1，2，3，1，2，3，……每次报到 3 的小孩退出。问第 n 个被淘汰的小孩，在最开始 500 人里是的编号是几？

输入
正整数 N，表示要计算的为第 N 个淘汰的小孩的编号，0 < N <= 500

输出
第 N 个淘汰的小孩的编号

输入样例
1
2
206
311

输出样例
3
6
176
223
 
*/
/**
 * 解法1 循环+Map
 * @param {number} num
 */
function getNum(num) {
	console.time('a');
	let map = new Map();
	let out = [];
	let j = 0;
	while (true) {
		for (let i = 1; i <= 500; i++) {
			if (!map.has(i)) {
				j++;
				if (j === 3) {
					map.set(i, true);
					out.push(i);
					j = 0;
					if (out.length === num) {
						console.log(out.toString(), num);
						console.timeEnd('a');
						return i;
					}
				}
			}
		}
	}
}
/**
 * 解法2，环形链表
 * @param {string} line
 */
function getNum2(line) {
	line = Number(line);
	let node, head;
	for (let i = 1; i <= 500; i++) {
		if (!node) {
			node = {
				value: i,
			};
			head = node;
		} else {
			temp = {
				value: i,
			};
			node.next = temp;
			node = temp;
		}
	}
	node.next = head; // 组成一个环
	let cur = head;
	let pre = node;
	let j = 0;
	let ret = [];
	console.log(cur);
	while (cur.next) {
		let next = cur.next;
		j++;
		if (j === 3) {
			pre.next = next;
			cur.next = null;
			ret.push(cur.value);

			j = 0;
			if (ret.length === line) {
				console.log('cur.value', cur.value);
				return cur.value;
			}
			cur = next;
			continue;
		}
		pre = cur;
		cur = next;
	}
}

console.log(getNum2(206));
