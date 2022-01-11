// NodeList
const boxes = document.querySelectorAll(".box");

//ES5 NodeList-ийг Массив рүү хөрвүүлэх дээр үеийн арга
// Array.prototype.slice.call(boxes).forEach(function(e){
//   e.style.backgroundColor = "dodgerBlue";
// });

// ES6
// Array.from(boxes).forEach( e => e.style.backgroundColor="yellow" );
// continue, break

// ES5
// for(var i=0; i<boxes.length; i++)
// {
//   if(boxes[i].className === 'box yellow') continue;
//   boxes[i].textContent = 'Би бол шар биш';
// }

// ES6
for (const e of boxes) {
  if (e.className.includes("red")) continue;
  e.textContent = "Би бол улаан биш";
}

let ages = [12, 17, 102, 16, 3, 5, 5, 11];

//ES5
let isFullAge = ages.map(function (el) {
  return el >= 18;
});

console.log(ages);
console.log(isFullAge);
console.log(isFullAge.indexOf(true));
console.log(ages[isFullAge.indexOf(true)]);

// ES6
let index = ages.findIndex((el) => el >= 18);
console.log("Олдсон индекс : " + index);
console.log(ages.findIndex((el) => el >= 18));
console.log(ages.find((el) => el >= 18));
