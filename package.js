var package = function () {
	const value = [1500, 3000, 2000];
	const weight = [1, 4, 3];
	const c = 4; //背包容量
	const n = 3;
	let dp = [];
	for (let i = 0; i < n; i++) {
		dp.push([0, 0, 0, 0]);
	}
	console.log('dp', dp);
	for (let i = 0; i < n; i++) {
		//商品
		for (let j = 1; j <= c; j++) {
			//背包容量
			if (i === 0) {
				//设置初始价值
				dp[i][j - 1] = weight[i] <= j ? value[i] : 0;
			} else {
				if (weight[i] < j) {
					// 假如能放入该商品，剩下的容量的最大价值与该商品的最大价值之和为一种可能，没有该商品时可存放的最大价值为另一种可能
					// 比较这两种可能性,得到最多选到该商品时的最大价值
					dp[i][j - 1] = Math.max(dp[i - 1][j - 1], dp[i - 1][j - weight[i]] + value[i]);
				} else if (weight[i] === j) {
					// 如果正好能放入，则背包内只有该商品为一种可能，与之前一种可能进行比较
					dp[i][j - 1] = Math.max(dp[i - 1][j - 1], value[0]);
				} else {
					// 如果放不下，当前最大价值为之前的最大价值，相当于dp表里的上一格
					dp[i][j - 1] = dp[i - 1][j - 1];
				}
			}
		}
	}
	console.log(dp[n - 1][c - 1]);
	console.log();
};
package();
