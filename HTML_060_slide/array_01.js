console.log("안녕하세요");
// 비어있는 공백 배열 생성
let arr = [];
arr.push("홍길동");
arr.push("이몽룡");
arr.push("성춘향");
console.log(arr);
console.log(arr[1]);

// spread 연산자
// ESC+6 에서 사용하는 배열과 관련된 연산자
let arrCopy = [...arr[0], ...arr, "임꺽정"];
// arrCopy = [arr[0] + arr[1] + arr[2]]와 같이 사용할 수 있으나
console.log("arrCopy", arrCopy);