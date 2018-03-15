#1
//以下函数的作用是?空白区域应该填写什么

// define
(function (window) {
    function fn(str) {
        this.str = str;
    }

    fn.prototype.format = function () {
        var arg = __1__;
        return this.str.replace(__2__, function (a, b) {
            return arg[b] || '';
        });
    };

    window.fn = fn;
})(window);

// use
(function () {
    var t = new fn('<p><a href="{0}">{1}</a><span>{2}</span></p>');
    console.log(t.format('http://www.alibaba.com', 'Alibaba', 'Welcome'));
})();

define部分定义一个简单的模板类，使用{}作为转义标记，中间的数字表示替换目标，format实参用来替换模板内标记 横线处填：

Array.prototype.slice.call(arguments, 0)
/\{\s*(\d+)\s*\}/g

arguments.slice(0)
/\{\d+\}/

#2
//有一个大数组,var a = ['1', '2', '3', ...];a的长度是100,内容填充随机整数的字符串.请先构造此数组a,然后设计一个算法将其内容去重

function fillWithRandom(arr, start, end){
    if(Object.prototype.toString.call(arr).slice(8, -1) !== 'Array'){
        console.log('type error');
        return 
    }
    var start = start === undefined ？ 0 ：start,
        end = end === undefined ? 100 : end,
        width;

    if(end < start){
        width = 100;
    }
    else{
        width = end - start;
    }

    for(let i = 0; i<arr.length; i++){
        arr.push((Math.floor(Math.Random() * width + start) + '');
    }
    return arr;
}

function unique(arr){
    if(Object.prototype.toString.call(arr).slice(8, -1) !== 'Array'){
        console.log('type error');
        return 
    }
    let hash = {},
        res = [];
    arr.forEach((item)=>{
        if(!hash[item]){
            res.push(item);
            hash[item] = true;
        }
    });
    return res;
}