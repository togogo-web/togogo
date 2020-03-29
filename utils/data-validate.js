/**
 * @name getType
 * @description 获取变量的数据类型
 * @param {Any} data 变量
 * @returns String
 */
export const getType = data => {
	let temp = Object.prototype.toString.call(data);
	return temp.substring(8, temp.length - 1);
};

/**
 * @name executor
 * @description 执行定义的函数
 * @param  {...any} params 被执行函数调用时传入的参数
 * @returns ObjectJSON
 */
export function executor (...params) {
	let fun = this;

	if (Object.prototype.toString.call(fun) !== '[object Function]') {
		throw new Error('调用者的类型不是Function');
	}

	this.return = null;

	if (arguments.length !== 0) {
		let funStr = fun.toString();
		let temp = funStr.split('{')[0];
		let firstParamIndex = temp.indexOf('(');
		let lastParamIndex = temp.lastIndexOf(')');
		let definedParams = temp.substring(firstParamIndex + 1, lastParamIndex).split(',');

		if (params.length > definedParams.length) {
			throw new Error('实参个数大于形参个数');
		}
		if (params.length < definedParams.length) {
			throw new Error('实参个数小于形参个数');
		}

		this.timer = new Date().getTime();
		this.return = fun(...params);
		this.timer = new Date().getTime() - this.timer;
	} else {
		this.timer = new Date().getTime();
		this.return = fun();
		this.timer = new Date().getTime() - this.timer;
	}

	let res = {
		timer: this.timer
	};

	if (Object.prototype.toString.call(this.return) !== '[object Null]' &&
    Object.prototype.toString.call(this.return) !== '[object Undefined]') {
		res['return'] = this.return;
	}

	return res;
};
Function.prototype.executor = executor;
