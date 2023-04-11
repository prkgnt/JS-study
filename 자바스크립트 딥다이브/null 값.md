# null 값 버그

- typeof(null) 을 연산하면 'null'이 아닌 'object'를 반환함.
- 이는 자바스크립트 첫번째 버전의 버그이지만 기존 코드에 영향을 줄 수 있기 때문에 아직까지 수정을 못하는 중.
- 따라서 값이 null 타입인지 확인할 때는 typeof 연산자를 사용하지 않고 일치 연산자를 사용해야 함.

```js
var foo = null;

console.log(typeof foo); // object
console.log(typeof foo === null); // false
console.log(foo === null); // true
```
