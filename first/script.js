// 주석 (더글라스 크록포드라는 아저씨는 이걸 추천...)

/**
 * 여러줄의 주석을 달고 싶을때...
 * (구글에서는 이걸 추천...)
 */

// 변수 (변할 수 있는 수)
// variable
// var {keyword-name}
var a;
var b;
var c;
var d;
var a_10;
var a_20;

// 상수 (변하지 않는 수)
// 20
// 상수는 보통 대문자로 표현합니다.
var MIN_WIDTH = 20;
var MAX_WIDTH = 840;

// 표기법
// 캠멜케이스(낙타형), 헝가리안 표기법
var minWidth // min-width
var borderLeftTop // border-left-top

// 자료형(Type)
// 자료형(이 변수의 자료형....)
var nCount = 10; // 숫자 (Number)
var sName = "조은"; // 문자열 (String)
var bIsBoolean = true // 불리언 (Boolean)
var oChoeun = { } // 객체 (Object)
var und = undefined // 미정의 (undefined)
var nu = null // 빈 값 (null)

// 연산자 (Operator)
var nCount = 10;
var nPerson = 9;

/**
(중위연산자)
nCount + nPerson;
nCount - nPerson;
nCount * nPerson;
nCount / nPerson;
nCount % nPerson;
// 10 / 3 (1) 
++nCount (전위연산자)
    +nCount(양수인 nCount)
    -nCount(음수인 nCount)
nCount++ (후위연산자)
*/

// 객체지향
// 함수형

// 객체지향 프로그래밍 (Object Oriented Programming)
// - 모든걸 객체로 보자.
// 음료수 자판기. (Vending Machine)
// - 음료수
// - 음료수 매대
// - 음료수 전시대
// - 음료수 디스플레이
// - 버튼
// - 돈입구
// - 돈반환구
// - 돈
// - 코인
// - 지폐
var x = {};

// 함수형 프로그래밍
// - 객체 말고 함수로...
// - 변수를 쓰지말자.. 상수로만
// - 변수를 안쓰다보니... 에러가 ㅇ...없..... 업.....

function x() { }
// Lisp (함수형 프로그래밍의... 거의... 노인....)
// JavaScript (설계단계)
// 브랜든 아이히 (Mozilla CTO)
// Netscape 입사할 때, "10일 안에 Scheme (함수형 프로그래밍 언어)을 브라우저에서 돌아가게 하겠다"
// JAVA + C + Scheme + Perl
// 객체지향 (JAVA)
// Prototype (상속)
// 문법 (C, JAVA)
// 함수형 (Scheme)
// 정규표현식 (Perl)
// 10일만에.. 브라우저에 띄움... *****
// 최초 : Mocha (넷스케이프의... 후원자가 지은 이름)
// 중기 : LiveScript
// 말기 : JavaScript (마케팅...)
// (더글라스 크록포드라는.. (더기형) 겁나 욕해요)
// 전세계 최초의 멀티 패러다임 언어
// 객체지향 + 함수형 특징
// 표준(나빠도 변경 불가)
// 좋은것만 배워서 쓰자.

// 오해들.
// 1. 자바스크립트로.. HTML제어를 할 수 있다.
// - True
// - DOM API으로 HTML 제어를 할 수 있다.
// - JavaScript는 DOM API을 지원한다. 
// - API (Application Programming Interface)
// - JavaScript -> HTMl (모름...)
// - HTML -> JavaScript (모름...)
// - DOM
// - JavaScript -> DOM (앎)
// - HTML -> DOM (앎)
// - JavaScript -> DOM <- HTML
// - Ie(ㅇ...)

// DOM (Document Object Model)
// HTML을 파싱해서 객체로 만들어줌...
// 그리고... JS나 CSS와 통신

// 함수 선언식 (Function Declaration)
// function y() { }
//
// 함수 표현식 (Function Expression)
var x = function() { }
// function(매개변수) {
//
// }

var x = function(txt) {
    console.log("x start");
    txt();
}

/** 
 * 일급객체(First-Citizen Object)
 * JavaScript의 함수형이라는 주된 이유 중 하나..
 */
var oChoEun = {};
x(function() { console.log("end") });
var oChoEun = {
    name : "choeun",
    getName : function() {
        return this.name;
    }
}

/** 
 * 접근 지정자 (Public, Private)
 */

var x = function() { }

// 밖에서 접근 가능했으면 좋겠는거...
// 접근 못하게 막고싶은거...

// public (다른 패키지에서도 접근 가능)
// private (같은 패키지 내에서만 접근 가능)

/**
public :
private : 
*/
// 자바스크립트는 모든게 기본적으로 public
// Scope (유효범위)

var x = 10;

function y() {
    // 함수단위로 Scope가 끊긴다.
    // Lexical enviorment (유효범위)
    var x = 20;
}

(function() {
    var nHanhwa = 10;
})()
// 자기호출함수
// 캡슐화
// 클로져 (나중에...)

/**
 * 상속(Inheritend)
 */
var Father = {
    firstName : "조",
    getName : function() {
        return this.firstName;
    }
}

// 함수로 제작.
// 생성자함수 (Constructor)
var createChild = function(name) {
    this.name = name;
}
createChild.prototype = Father;

// 인스턴스 (Instance)
var Choeun = new createChild("은");

var createChoEunChild = function() { };
createChoEunChild.prototype = Choeun;

var ChoEunChild = new createChoEunChild();
console.log(ChoEunChild);

// 값만 담고있는 객체의 속성
// 객체의 멤버
Choeun.firstName;

// 객체를 위해 뭔가 수행하는 함수
// 객체의 메소드
Choeun.getName();

// 1. scope
// 2. prototype
// 3. closure
// 4. DOM 
// 1.1. Lexical Enviorment (환경 유효 범위)
// 2.1. Memory 교육.
// 2.2. GC (가비지 컬렉션)
// 2.3. 객체의 생성 과정(Object Create)
// 3.1. Lexical Enviorment (환경 유효 범위)
// 4.1. DOM... HTML이 필요.
// 4.2. Event (이벤트)

// 문자열 -> 숫자
var x = parseInt("1010111", 10);
// 숫자 10
console.log(x);

var x = Number("10");
// 숫자 10
console.log(x);

var x = String(10);
console.log(x);

var x = "" + 10;
console.log(x);

var x = Boolean(0);

// 자료형 변경 주의..
// Number -> String
// + 동작방식
// Number만 가지고 있는 메소드들.

var nCount = function(txt) {
    for(i=0; i<arguments.length;i++) {
        console.log(arguments[i]);
    }
}
