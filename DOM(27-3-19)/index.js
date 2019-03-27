// let b = document.getElementById("hello").innerHTML = "hello_one";
let x = document.getElementsByTagName("body")[0];
let z = document.createElement("p");
x.appendChild(z);
console.log(x);
y = document.createTextNode("jiay abba log");
z.appendChild(y);


let a = document.createElement("p");
x.appendChild(a);
let b = document.createTextNode("hi every_one");
a.appendChild(b);


let d = document.createElement("h1");
x.appendChild(d);
let e = document.createTextNode("jiay bhutto");
d.appendChild(e);
