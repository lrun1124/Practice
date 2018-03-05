实现一个函数clone，可以对JavaScript中的5种主要的数据类型（包括Number、String、Object、Array、Boolean）进行值复制

Object.prototype.clone = function (obj){
	var res;
	//只有对非基础数据类型才需要处理
	if(typeof obj === 'object'){
		if(obj === null){
			res = null;
		}
		else{
			//Object分为两种Array和Object俩种情况
			if(Object.prototype.toString.call(obj).slice(8, -1) === 'Array'){
				res = [];
				for(i of obj){
					res.push(i);
				}
			}
			else{
				copy = {};
				for(i in obj){
					copy[i] = obj[i];
				}
			}
		}
	}
	//基础数据类型直接赋值
	else{
		res = obj;
	}
	return res;
}