function arrayRandom(arr){
	let res = [],
		index;
	while(arr.length > 0){
		index = parseInt(Math.Random() * arr.length);
		res.push(arr[index]);
		arr.splice(index,1)
	}
	return res;
}