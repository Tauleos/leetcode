/*
 * @lc app=leetcode.cn id=677 lang=javascript
 *
 * [677] 键值映射
 *
 * https://leetcode-cn.com/problems/map-sum-pairs/description/
 *
 * algorithms
 * Medium (61.88%)
 * Likes:    168
 * Dislikes: 0
 * Total Accepted:    30.8K
 * Total Submissions: 46.8K
 * Testcase Example:  '["MapSum","insert","sum","insert","sum"]\n' +
  '[[],["apple",3],["ap"],["app",2],["ap"]]'
 *
 * 实现一个 MapSum 类，支持两个方法，insert 和 sum：
 * 
 * 
 * MapSum() 初始化 MapSum 对象
 * void insert(String key, int val) 插入 key-val 键值对，字符串表示键 key ，整数表示值 val 。如果键
 * key 已经存在，那么原来的键值对将被替代成新的键值对。
 * int sum(string prefix) 返回所有以该前缀 prefix 开头的键 key 的值的总和。
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：
 * ["MapSum", "insert", "sum", "insert", "sum"]
 * [[], ["apple", 3], ["ap"], ["app", 2], ["ap"]]
 * 输出：
 * [null, null, 3, null, 5]
 * 
 * 解释：
 * MapSum mapSum = new MapSum();
 * mapSum.insert("apple", 3);  
 * mapSum.sum("ap");           // return 3 (apple = 3)
 * mapSum.insert("app", 2);    
 * mapSum.sum("ap");           // return 5 (apple + app = 3 + 2 = 5)
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * key 和 prefix 仅由小写英文字母组成
 * 1 
 * 最多调用 50 次 insert 和 sum
 * 
 * 
 */

// @lc code=start

var MapSum = function () {
	//前缀树
	//https://leetcode-cn.com/problems/map-sum-pairs/solution/pythonjavajavascriptgo-trie-dfs-or-bfs-b-cbmd/
	this.root = new Map();
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
	let node = this.root;
	for (let k of key) {
		if (!node.has(k)) {
			node.set(k, new Map());
		}
		node = node.get(k);
	}
	// console.log('key', key, this.root);
	node.set('#', val);
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
	let node = this.root;
	for (let k of prefix) {
		if (!node.has(k)) {
			return 0;
		} else {
			node = node.get(k);
		}
	}
	// console.log('node', node);
	return this.dfs(node);
};
MapSum.prototype.dfs = function (node) {
	let res = 0;
	for (let k of node.keys()) {
		if (k === '#') {
			res += node.get(k);
		} else {
			res += this.dfs(node.get(k));
		}
	}
	return res;
};
// var obj = new MapSum();
// obj.insert('apple', 3);
// // obj.sum('ap');
// obj.insert('app', 2);
// obj.sum('ap');
/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
// @lc code=end
