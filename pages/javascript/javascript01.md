---
title: "javascript 문법 및 용어정리"
tags: javascript
search: include
permalink: javascript01.html
sidebar: mydoc_sidebar
folder: /javascript
---


#### 동적 타이핑(Dynamin Typing)
 - 저장하는 변수값에 따라 변수의 자료형도 함께 변경되는 특징
 - 자바스크립트 변수는 감ㅂ을 저장할 때마다 자료형이 동적으로 결정되기 때문에 변수에 숫자를 저장했다가 문자로 변경해도 오류가 발생하지 않는다.
 - 이러한 유연함은 때로는 단점이 되기도 한다.

```javascript
let A = 1; // 숫자형
A = "test"; // 문자형
console.log(A++); // 문자형 자료형에 증감연산자 사용(에러발생)
```

#### typeof연산자
 - 변수의 자료형에 따라 각기 다른 코드를 수행하기 위해 자료형을 확인할때 사용한다.
 ``` javascript
let A = "test"
console.log(typeof A); // string
 ```

#### null 병합 연산자
 - 값이 확정된 변수를 찾을 때 사용

```javascript
let A = 1;
let B = 2;
let C;

console.log(A ?? B); // 1 (둘다 값이 확정되었을 경우 왼쪽 값을 리턴)
console.log(C ?? B); // 2 (둘 중 하나만 값이 확정되었을 경우 확정된 값을 리턴)
```

#### 중첩함수(Nested Function)
 - 특정 함수 내부에서 선언된 함수

 ```javascript
function func() {
    function pringName(name) { // 중첩함수 선언
        console.log(name);
    }

    let name = "박동혁";
    printName(name); // 중첩함수 호출
}
 ```

#### 호이스팅(Hoisting)
 - 프로그램 내에서 변수나 함수를 호출하거나 접근하는 코드가 함수 선언보다 위에 있음에도 불구하고, 마치 선언코드가 위에 있는 것처럼 동작하는 자바스크립트만의 독특한 기능
  - 자바스크립트는 코드를 실행하기 전에 중첩함수가 아닌 함수들을 모두 찾아 미리 생성해두기 때문에 가능

 ```javascript
test(); // 함수가 선언되기 전에 호출(에러가 발생하지 않는다.)

function test() { // 함수선언
    console.log("test");
}
 ```

#### 함수표현식
 - 익명함수를 생성하고 변수에 할당하는 방법
 - 함수표현식으로 만든 함수는 함수 선언으로 만든 함수와는 달리 호이스팅되지 않음

 ```javascript
let test = function() {
    console.log("test");
}
 ```

#### 익명함수(Anonymous function)
 - 이름이 없는 함수
 - 변수에 할당하지 않거나 소괄호로 감싸지 않으면 에러발생

```javscript
function() { // 에러발생
    console.log("test"); 
}

let test = function() { // 변수에 할당되어 에러가 발생하지 않음
    console.log("test");
} 

(function() { // 소괄호로 감싸줬으므로 에러가 발생하지 않음
    console.log("test");
})

function func1() {
    console.log("test");
}

let testFunc = func1 // 선언함 함수를 변수에 할당 가능
                     // 소괄호를 생략해야함
 ```

 #### 콜백 함수(Callback Function)
 - 함수 표현식에서 자바스크립트는 함수를 변수에 저장할 수 있음을 확인할 수 있다.
 - 따라서 함수는 다른 함수의 인수(값)으로 전달 할 수 있다. 이를 '콜백 함수'라고 한다.
 - 

```javascript
function parent(callBack) { // 
    console.log("parent"); // 1
    callBack(); // 2. parameter로 전달받은 child함수가 실행된다.
}

function child() {
    console.log("child");
}

parent(child) // parent함수에 parameter로 child함수 전달
```

#### 스코프(Scope)
 - 자바스크립트 변수와 함수는 생성과 동시에 접근하거나 호출할 때 일정한 제약을 갖는 것
 - 스코프는 변수나 함수의 제약 범위를 뜻함
 - ex) 전역스코프(전역변수), 지역스코프(지역변수)

#### 객체
 - 숫자형이나 문자형과 같은 원시 자료형과 달리 다양한 값을 담는 자료형
 - 객체형 리터럴 문법과 생성자 문법을 통해 생성
 - 데이터가 있는 객체르 생성하려면 key : value 쌍으로 이루어진 프로퍼티를 작성
 
#### 프로퍼티
 - 속성이라는 뜻
 - 객체를 설명하는 정보
 - 상수로 선언한 객체(const)도 프로퍼티 수정가능

```javascript
let A = {};           // 객체 리터럴 문법
let B = new Object(); // 객체 생성자 문법
let C = {             // 객체리터럴 문법(프로퍼티 작성)
    name : "박동혁",
    age : 28
};

// 프로퍼티 접근방법
const personName = C.name;  // 점표기법
const personAge = C["age"]; // 괄호 표기법 

// 프로퍼티 추가방법
person.gender = "male";   // 점표기법을 사용한 추가 
person["nickname"] = "혁"; // 괄호 표기법을 사용한 추가

// key, value가 유동적인 프로퍼티를 괄호 표기법으로 추가하는 방법
function addProp(obj, key, value) {
    obj[key] = value;
}

addProp(C, "height", 175); // 프로퍼티 추가

// 프로퍼티 수정/삭제 방법
C.nickname = "동";  // 프로퍼티 수정
delete C.nickname; // 프로퍼티 삭제 

// 객체안에 특정한 프로퍼티가 존재하는지 확인하는 방법
console.log("address" in C); // return false
```

#### truthy & falsy
 - true 나 false가 아닌 값도 상황에 따라 참, 거짓으로 평가하는 특징
 - falsy한 값 
     - false는 아니지만 거짓과 같은 의미로 쓰임
     - 조건식에서 false로 평가
     - undefined, null, 0, -0, NaN, "", 0n

```javascript
console.log(!undefined); // return true
console.log(!null);      // return true
console.log(!0);         // return true
console.log(!-0);        // return true
console.log(!NaN);       // return true
console.log(!"");        // return true
console.log(!0n);        // return true
```

 - truthy한 값
     - true는 아니지만 참과 같은 의미로 쓰임
     - falsy한 값을 제외한 모든 값

```javascript
if("false") { // "false"는 문자열이므로 불리언 false와 달리 참으로 판별
	console.log(true);
}
```

#### 단락평가(지름길 평가, Short-Circuit Evaluation)
 - 논리연산에서 첫 번째 피연산자의 값만으로 해당 식의 결과가 확실할때, 두 번째 값을 평가하지 않는 것
 - falsy한 값을 사용할때도 적용하여 오류를 방지할 수 있다. ex) 리턴값이 undefined일 경우 


#### AND 단락평가
 - 왼쪽에 위치한 첫 번째 피연산자 값이 false면, 단락평가가 이루어져 두 번째 피연산자는 계산하지 않는다.

 ```javascript
function A() {
    console.log("a");
    return false
}

function B() {
    console.log("b");
    return true
}

console.log(A() && B()); // A()의 리턴값이 false이므로 B()는 실행되지 않는다.

// AND 단락 평가를 이용하여 에러 방지하기
function getName(person) {
    return person && person.name;
}

let person = { name : "박동혁"};

let name1 = getName(undefined); // 첫 번째 피연산자 값이 undefined이므로 두 번째 피연산자 값을 계산하지 않는다. return undefined
let name2 = getName(person); // 첫번째 피 연산자 값이 truthy한 값이므로 두번째 피연산자 값을 계산한다. return 박동혁
 ```

 #### OR 단락평가
  - 첫 번째 피연산자 값이 true면 두 번째 피연산자 값을 계산하지 않는다.

```javascript
function A() {
    console.log("a");
    return true
}

function B() {
    console.log("b");
    return false
}

console.log(A() || B()); // A()의 리턴값이 true이므로 B()는 실행되지 않는다.
```

#### OR 단락평가와 null 병합 연산자 비교

```javascript
const A = 0;
const B = "박동혁";

const result1 = A || B;
const result2 = A ?? B;

console.log(result1); // 0은 falsy한 값이기 때문에 두 번째 피연산자의 계산값인 "박동혁" return
console.log(result2); // 0은 확정된 피연산자이므로 0 return
```
