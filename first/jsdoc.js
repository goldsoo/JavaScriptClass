/**
 * @namespace
 */
var study = study || {};

/**
 * @class
 */
study.firstTime = study.firstTime || {};

study.firstTime = function() {
    /**
     * 빈 변수 생성. 변수를 생성할 때는 var 키워드를 사용한다.
     */
    var empty;

    /**
     * 헝가리안 표기법을 활용해 숫자를 표현
     * @type {number}
     */
    var nCount = 10;

    /**
     * 헝가리안 표기법을 활용해 문자열을 표현
     * @type {string}
     */
    var sName = "ChoEun" || 'ChoEun';

    /**
     * 배열을 생성. (리터럴 표현식)
     * @type {string[]}
     */
    var aPersonList = ["조은", "조은", "조은", "조은"];

    /**
     * 객체를 표현. (리터럴 표현식)
     * @type {{sName: string, nAge: number, sCompany: string}}
     */
    var oPerson = {
        sName : "ChoEun",
        nAge : 22,
        sCompany : "NHN Technology Services"
    }

    /**
     * console.log 메서드를 사용하여 확인하기를 원하는 값을 체크할 수 있다.
     */
    // console.log()

    /**
     * oPerson객체의 sName에 접근하는 법. 이 때는 "." 표기법을 사용하였다.
     */
    console.log(oPerson.sName);

    /**
     * oPerson 객체의 nAge에 접근. 객체의 attribute 접근자를 사용하였다. 이 때 속성명은 String으로 작성한다.
     */
    console.log(oPerson["nAge"]);

    /**
     * 이번 주에 할 내용들
     * 1. 유효범위
     * 1.1. 환경적 유효 범위
     * 2. 프로토타입
     * 2.1. 메모리
     * 2.2. 가비지 컬렉션
     * 2.3. 객체의 생성 과정
     * 3. 클로저
     * 4. DOM
     * 4.1. HTML
     * 4.2. Event
     */
};