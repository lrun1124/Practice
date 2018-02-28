function quickSort(arr){
	if(arr.length <= 1) return arr;
	var mid = Math.floor(arr.length/2);
	var current = arr.splice(mid,1)[0];
	//var current = arr[mid]; 注意错误，要用splice修改原数组
	var left = [];
	var right = [];
	for(var i=0; i<arr.length; i++){
		debugger;
		if(arr[i] < current){
			left.push(arr[i]);
		}
		else {
			right.push(arr[i]);
		}
	}
	console.log('mid' + current);
	console.log('left' + left);
	console.log('right' + right);
	return quickSort(left).concat([current],quickSort(right));

}

console.log(quickSort([32,45,37,16,2,87]));