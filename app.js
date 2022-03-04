// var base=prompt("Enter base of the Triangle","");
// var height=prompt("Enter height of the Triangle","")
// var Area=(base * height)/2
// alert("Area is " + Area)



var a=prompt("Enter side A of Triangle",""); 
var b=prompt("Enter side B of Triangle","");
var c=prompt("Enter side C of Triangle","");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
var s=(a+b+c)/2;
var temp = s*(s-a)*(s-b)*(s-c);
var area = Math.sqrt(temp);
alert("Area is " + area);
