Array.prototype.unique1 = function() {
	var res = [];
	this.forEach(function(item){
		if(res.indexOf(item) < 0){
			res.push(item);
		}
	});
	return res;
};


Array.prototype.unique2 = function() {
	var res = [this[0]];
	this.sort();
	for(let i = 1; i < this.length; i++){
		if(this[i] !== this[i-1]){
			res.push(this[i])
		}
	}
	return res;
};

Array.prototype.unique3 = function() {
	var hash = {}, 
		res = [];
	this.forEach(function(item){
		if(!hash[item]){
		 	hash[item] = true;
		 	res.push(item);
		}
	});
	return res;
};

Array.prototype.unique4 = function(){
	return [...new Set(this)];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var count = 10000000;
var testArray = [];
for(let i =0 ; i < count; i++){
	testArray.push(getRandomInt(0,500))
}
var start = new Date().getTime();
console.log(testArray.unique1());
var end = new Date().getTime();
console.log("unique1: " + (end - start) + "ms");

var start = new Date().getTime();
console.log(testArray.unique2());
var end = new Date().getTime();
console.log("unique2: " + (end - start) + "ms");

var start = new Date().getTime();
console.log(testArray.unique3());
var end = new Date().getTime();
console.log("unique3: " + (end - start) + "ms");

var start = new Date().getTime();
console.log(testArray.unique4());
var end = new Date().getTime();
console.log("unique4: " + (end - start) + "ms");
