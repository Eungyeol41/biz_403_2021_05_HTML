// JS
console.log("a" == "b");
console.log("a" == "a");

let num = 3;

// Java와 같은 경우는 if() 문에서
// Single EQ(=)를 사용하면 syntax error가 난다
// if( (num = method()) == 3)
// while( (reader = buffer.readLine()) != null )
// while(true) {
//    reader = buffer.readLine();
//    if(reader == null) break;
// }

// js에서는 다음과 같은 코드가 논리적으로는 문제가 될 수 있지만 문법적으로는 정당하다
// if( (num == 5) == true)
if ((num = 5)) {
  console.log("같은 값");
}

// js에서는 숫자 0, false, null, undefined, NaN을 제외한 모든 것은 boolean에서 true로 취급된다
// if(값) 명령을 사용할 때 값에 위에 나열한 type의 데이터가 나타나면 논리적으로 false로 인식되고 그 외는 무조건 true이다

if (0) {
  console.log(true);
} else {
  console.log(false);
}

if ("") {
  console.log(true);
} else {
  console.log(false);
}

let num1 = 3;
let num2 = "3";

/*
    두 값이 같은 지 비교를 하는 연산자
    주로 if, while 등에서 사용

    동등연산자( == )
        자동으로 형변환 발생
        - == '0'을 비교하면 문자열 '0'을 숫자 0으로 자동형변환을 해버린다
        문자열과 숫자의 비교지만 내용만 같으면 같은 것으로 true 값이 된다
    
    일치연산자( === )
        무조건 자신의 형(type)을 유지하면서 비교
        0 === '0'을 비교하면
            1. 두 값의 type이 일치하는 지 비교
                같으면 true, 다르면 무조건 false
            2. 두 값의 type이 같으면 실제 값을 비교하여 같으면 true, 다르면 false
*/
console.log(num1 == num2);
console.log(num1 === num2);

// 문자열 ""과 문자열 "0"을 비교 => false
console.log("" == "0");
// 문자열 ""을 숫자 0으로 변환 -> 0 == 0으로 비교 => true
console.log("" == 0); // true

// boolean true를 문자열 ""
console.log("true" == true);
console.log("false" == false);

// 문자열 "0"을 숫자 0으로 변환 -> (숫자 0 은 무조건 false)
console.log("0" == false);
// 숫자 0은 당연히 fasle이므로 결과는 true
console.log(0 == false);

console.log(null == undefined);
console.log(null == false);
console.log(undefined == false); // false
console.log(null == 0); // false
console.log(undefined == 0); // false

// 동등연산자에서는 null과 undefined를 null == undefined 할때만 true로 인식하고 다른 이외의 값과 비교할때는 무조건 false
// 숫자 0, null, undefined 등은 if에서 false로 인식을 하지만 동등연산자를 사용할때는 주의를 해야한다.

// 어떤 변수에 담긴 값이 null인가 확인하고 싶을 때 1번이나 2번처럼 코드를 사용해야만 한다
// 3번처럼 사용하면 노리적 오류를 범할 수 있다.
let un1 = null;

// 1번 코드
if (un1) {
}

// 2번 코드
if (un1 == null) {
}

// 3번 코드
if (un1 == false) {
}

// 일반적으로 숫자형, 문자형의 데이터가 같은 지(일치하는 지) 알아보고 싶을 때 => 일치 연산자 사용
