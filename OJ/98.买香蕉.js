/**
 *
 * @param {string} line
 */
function getNum(line) {
	const arr = line.split(' ').sort((a, b) => a - b);
	let ans = 0;
	let n = arr.length;
	for (let i = 0; i < n; i++) {
		ans = Math.max(ans, arr[i] * (n - i));
	}
	console.log('ans', ans);
}
getNum('5 0 29 14');
