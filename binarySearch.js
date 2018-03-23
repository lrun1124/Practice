//recursion
function binarySearch(target, arr, start, end){
	if(Object.prototype.toString.call(target).slice(8,-1) !== 'Number' ||
		Object.prototype.toString.call(arr).slice(8,-1)!== 'Array'){
		console.log('Type error');
		return;
	}
	var start = start || 0;
	var end = end || arr.length - 1;
	var mid = Math.floor(start + (start + end) / 2);
	if(target = arr[mid]){
		return mid;
	}
	else if(target < arr[mid]){
		return binarySearch(target, arr, start, mid - 1);
	}
	else{
		return binarySearch(target, arr, mid + 1, start);
	}
	return;
}

//none recursion
function binarySearch(target, arr){
	if(Object.prototype.toString.call(target).slice(8,-1) !== 'Number' ||
		Object.prototype.toString.call(arr).slice(8,-1)!== 'Array'){
		console.log('Type error');
		return;
	}
	var start = 0,
		end = arr.length,
		mid;

	while(start <= end){
		mid = Math.floor(start + (end - start) / 2);
		if(target === arr[mid]){
			return mid;
		}
		else if(target < arr[mid]){
			end = mid - 1;
		}
		else{
			start = mid + 1;
		}
	}
	return;
}