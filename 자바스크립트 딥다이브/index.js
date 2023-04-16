// function work() {
//   setTimeout(() => {
//     const start = Date.now();
//     for (let i = 0; i < 1000000000; i++) {}
//     const end = Date.now();
//     console.log(end - start + "ms");
//   }, 0);
// }

// console.log("작업 시작!");
// work();
// console.log("다음 작업");
// var foo = "ee";
// var x = foo ?? "dd";
// console.log(x);
// console.log(typeof foo === null);
// console.log(foo === null);

const o = { x: { y: 1 } };
const c1 = { ...o };
console.log(c1 === o);
console.log(c1.x === o.x);
const o1 = { x: 1 };
const c2 = { ...o1 };
console.log(o1 === c2);
console.log(o1.x === c2.x);
