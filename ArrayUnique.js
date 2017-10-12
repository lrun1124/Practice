//1.basic method

Array.prototype.unique = function() {
	var res = [];
	this.forEach(function(item){
		if(res.indexOf(item) < 0){
			res.push(item);
		}
	})
	return res;
};

console.log([1,1,2,3].unique())

//2.set
Array.prototype.unqiue = function(){
	return [...new Set(this)];
}

console.log([1,1,2,3].unique())