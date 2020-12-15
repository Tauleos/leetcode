function getNum(line) {
	const arr = line.split(',');
	const set = [...new Set(arr)];
	let res = 3 * set.reduce((p, c) => p + Number(c), 0) - arr.reduce((p, c) => p + Number(c), 0);
	return res / 2;
}
console.log(getNum('2,3,2,2'));

Math.sq;
