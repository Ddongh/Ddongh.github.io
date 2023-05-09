---
title: "javascript 기초문법"
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

```javascript
function parent(callBack) { // 
    console.log("parent");
    callBack(); // parameter로 전달받은 child함수가 실행된다.
}

function child() {
    console.log("child");
}

parent(child) // parent함수에 parameter로 child함수 전달
```