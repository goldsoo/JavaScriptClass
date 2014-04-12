/**
 * 객체 리터럴 표기법.
 * @type {{sName: string, nAge: number}}
 */
var oChoEun = {
    sName : "조은",
    nAge : 22
}

/**
 * 사람을 생성하는 함수.
 * 자바스크립트의 모든 유효범위는 함수를 단위로 끊긴다.
 */
var createPerson = function() {

    /**
     * 함수 내에서 객체를 생성한 뒤 변수를 선언하여 할당.
     * @type {{sName: string, nAge: number}}
     */
    var oChoEun = {
        sName : "조은놈",
        nAge : 32
    };

    /**
     * 1. 이 때 oChoEun 객체의 sName은 무엇일까요?
     */
    console.log(oChoEun);
};

/**
 * 함수를 호출.
 * 위의 (1)은 여기서 호출됩니다.
 */
createPerson();

/**
 * 2. 이 때 oChoEun 객체의 sName은 무엇일까요?
 */
console.log(oChoEun);

var initPerson = function() {
    /**
     * 함수 내에서 객체를 생성한 뒤 외부 변수에 할당.
     * @type {{sName: string, nAge: number}}
     */
    oChoEun = {
        sName : "조은별",
        nAge : 42
    };

    /**
     * 3. 이 때 oChoEun 객체의 sName은 무엇일까요?
     */
    console.log(oChoEun);
}

/**
 * 함수를 호출.
 * 위의 (3)은 여기서 호출됩니다.
 */
initPerson();

/**
 * 이 때 oChoEun 객체의 sName은 무엇일까요?
 */
console.log(oChoEun)