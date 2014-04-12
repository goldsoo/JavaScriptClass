/**
 * 사람을 생성하는 생성자 함수 Person
 * @param sName
 * @constructor
 */
var Person = function(sName) {
    /**
     * Person의 멤버
     * @type {string}
     * @private
     */
    this._sName = sName;

    /**
     * getter
     * @returns {string}
     */
    this.getName = function() {
        return this._sName;
    };

    /**
     * setter
     * @param sName
     */
    this.setName = function(sName) {
        this._sName = sName;
    };
}

/**
 * 데이터(sName)을 다루는 메소드가 있을 때 되도록 getter와 setter는 세트로 둔다. (이는 JAVA와 같은 언어의 영향)
 * 위에서는 getName이 getter, setName이 setter
 */

/**
 * 이름이 조은인 새로운 사람 객체 생성.
 * @type {Person}
 */
var oChoEun = new Person("조은");

/**
 * new를 이용한 객체의 생성 과정.
 * 1. 함수 내에서 새로운 객체를 생성하여 this 키워드에 넣어준다.
 * 2. 함수의 body(중괄호 내부의 내용)를 해석하여 수행한다.
 * 3. 함수 내에서 생성한 객체의 __proto__속성 값에 함수 속성 prototype의 값을 넣어준다.
 * 4. 함수 내에서 생성한 객체를 반환해준다.
 */

/**
 * 과일을 생성하는 함수
 * @param sName
 * @returns {{}}
 * @constructor
 */
var Fruit = function(sName) {
    var tmpObject = {}; // 1. 함수내에서 새로운 객체를 생성하여 this키워드에 넣어준다. (예제에서, this에는 임의의 값을 넣지 못한다.)
    /**
     * 함수의 몸체 부분 시작
     */

    /**
     * tmpObject의 멤버
     * @type {*}
     * @private
     */
    tmpObject._sName = sName; // 2. 함수의 body를 해석하여 수행한다.

    /**
     * getter
     * @returns {*}
     */
    tmpObject.getName = function() { return this._sName}

    /**
     * setter
     * @param sName
     */
    tmpObject.setName = function(sName) { this._sName = sName}

    /**
     * 함수의 몸체 부분 끝
     */

    tmpObject.__proto__ = Fruit.prototype // 3. 함수 내에서 생성한 객체의 __proto__속성 값에 함수 속성 prototype의 값을 넣어준다.
    return tmpObject; // 4. 함수 내에서 생성한 객체를 반환해준다.
}

/**
 * oOrange 인스턴스 생성.
 * @type {{}}
 */
var oOrange = Fruit("오렌지");

/**
 * oLemon 인스턴스 생성.
 * @type {{}}
 */
var oLemon = Fruit("레몬");

/**
 * 당연한 이야기지만 new 키워드를 쓰는 것과 아래 방식으로 쓰는 건 내부적으로 여러 차이가 있습니다.
 * 하지만 대략적인 객체 생성의 과정은 이러합니다.
 */