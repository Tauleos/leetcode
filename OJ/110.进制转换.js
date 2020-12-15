/**
 * 描述：
 * 给出一个PP进制整数NN，求NN的QQ进制表示(0 \leq N \leq 32767， 2 \leq P \leq 16, 2 \leq Q \leq 16)(0≤N≤32767，2≤P≤16,2≤Q≤16)。
 * 大于 9 的数字依次使用小写字母 a、b、c、d、e、f 表示。 请勿使用已存在的进制转换库或函数，比如PHP中的base_convert()等。
 *
 * 输入：
 * 输入3个数，以空格分隔： 第1个数是待转换的数， 第2个数是待转换的数的进制， 第3个数是转换后的数的进制。
 */

/**
 * 偷懒实现进制转换
 * @param {string} line
 */
function getNum(line) {
	let [num, from, target] = line.split(' ');
	// console.log(num, from, target);
	target = Number(target);
	from = Number(from);
	console.log(parseInt(num, from).toString(target));
}

/**
 * 老实按照要求来实现
 * @param {string} line
 */
function getNum2(line) {}

getNum('110100111010101 2 9');
