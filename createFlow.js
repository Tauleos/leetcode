function flatPromise(arr) {
	return arr.reduce((pre, cur) => {
		if (cur.isFlow) {
			pre = pre.concat([...cur.sourceList]);
		} else {
			pre = pre.concat(cur);
		}
		return pre;
	}, []);
}
function createFlow(effects) {
	const source = flatPromise(effects);

	function dispatch(index) {
		if (index === source.length) {
			return;
		}
		let func = source[index];
		let res = func();
		if (res && res.then) {
			res.then(() => dispatch(++index));
		} else {
			dispatch(++index);
		}
	}
	function run(cb) {
		source.push(cb);
		dispatch(0);
	}
	return {
		run,
		sourceList: source,
		isFlow: true,
	};
}

const origin = console.log;
console.log = (...args) => {
	origin('timer', Date.now(), ...args);
};
const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));
createFlow([
	() => console.log('a'),
	() => console.log('b'),
	createFlow([() => delay(1000).then(() => console.log('c'))]),
	[() => delay(1000).then(() => console.log('d')), () => console.log('e')],
]).run(() => {
	console.log('done');
});
