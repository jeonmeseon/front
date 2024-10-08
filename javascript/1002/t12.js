// t12.js (숫자함수 연습)
'use strict';

let su1 = 10;
let su2 = -20;
let su3 = 3.141592;
let su4 = -3.121592;
let cnt = 0;
let res = '';

// Math.max(), Math.min()

res = ++cnt + ":" + Math.ceil(su3) + '<br/>'; // ceil()무조건 올림
res = ++cnt + ":" + Math.ceil(su4) + '<br/>'; 
res = ++cnt + ":" + Math.floor(su3) + '<br/>'; //floor() : 무조건 내림 
res = ++cnt + ":" + Math.floor(su4) + '<br/>'; 
res = ++cnt + ":" + Math.trun3(su3) + '<br/>'; //trunc() : 소수이하를 무조건 자름 
res = ++cnt + ":" + Math.trunc(su4) + '<br/>'; 
res = ++cnt + ":" + Math.pow(su4) + '<br/>';  // pow() 지수승..
res = ++cnt + ":" + Math.pow(su1) + '<br/>';      // pow() 지수승..



demo.innerHTML = res;