Function.prototype.myBind = function (thisArg, ...args) {
	if (typeof this !== 'function') {
		throw Error('must be a function');
	}
	// 拿到参数传给调用者
	const self = this,
		// 构建一个干净的函数，用于保存原函数的原型
		nop = function () {},
		// 绑定的函数
		bound = function (...selfArgs) {
			return self.apply(
				// this instanceof nop, 判断是否使用 new 来调用 bound
				// 如果是 new 来调用的话，this的指向就是其实例，
				// 如果不是 new 调用的话，就改变 this 指向到指定的对象 o
				this instanceof nop ? this : thisArg,
				args.concat(selfArgs)
			);
		};

	// 箭头函数没有 prototype，箭头函数this永远指向它所在的作用域
	if (this.prototype) {
		nop.prototype = this.prototype;
	}
	// 修改绑定函数的原型指向
	bound.prototype = new nop();
	return bound;
};

Function.prototype.myCall = function (thisArg, ...args) {
	if (typeof this !== 'function') {
		throw new TypeError('Error');
	}
	thisArg = thisArg || window;
	// 将调用call函数的对象添加到thisArg的属性中
	thisArg.fn = this;
	const result = thisArg.fn(...args);
	delete thisArg.fn;
	return result;
};
Function.prototype.myApply = function (thisArg) {
	if (typeof this !== 'function') {
		throw new TypeError('Error');
	}
	thisArg = thisArg || window;
	thisArg.fn = this;
	const args = arguments[1];
	const result = thisArg.fn(...args);
	delete thisArg.fn;
	return result;
};
const bar = function () {
	console.log(this.name, arguments);
};

bar.prototype.name = 'bar';

const foo = {
	name: 'foo',
};

bar.myCall(foo, 1, 2, 3); // foo [1, 2, 3]
bar.myApply(foo, [1, 2, 3]); // foo [1, 2, 3]
// function myNew(ctor, ...args) {
// 	myNew.target = ctor;
// 	let newObj = Object.create(ctor.prototype);
// 	let ctorReturned = ctor.apply(newObj, args);
// 	return ctorReturned instanceof Object ? ctorReturned : newObj;
// }
// /**
//  *
//  * @param {*} name
//  */
// const testNewFun = function (name) {
// 	this.name = name;
// };

// const newObj = myNew(testNewFun, 'foo');

// console.log(newObj); // { name: "foo" }
// console.log(newObj instanceof testNewFun); // true
// // ========= 有返回值 =============
// const testNewFun = function (name) {
// 	this.name = name;
// 	return {};
// };

// const newObj = myNew(testNewFun, 'foo');

// console.log(newObj); // {}
// console.log(newObj instanceof testNewFun); // false
