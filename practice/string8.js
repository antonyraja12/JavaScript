var a="js string excercise";
var s=a.split(" ");
console.log(s);
var one=(s[0].charAt(0));
var first=(one.toUpperCase()+ a.slice(1,2));
var two=(s[1].charAt(0));
var sec=(two.toUpperCase()+a.slice(4,10));
var thr=(s[2].charAt(0));
var thd=(thr.toUpperCase()+a.slice(11,21));
console.log(first,sec,thd);


