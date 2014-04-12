/**
 * 객체의 생성 과정
 * @param sName
 * @constructor
 */
var Person = function(sName) {
    /**
     * 사람 이름 멤버
     * @type {*}
     * @private
     */
    this._sName = sName;

    /**
     * getter
     * @returns {*|string}
     */
    this.getName = function() {
        return this._sName;
    };

    /**
     * 세터
     * @param sName
     */
    this.setName = function(sName) {
        this._sName = sName;
    };
}

/**
 * Person을 기반으로 생성된 인스턴스 oChoEun
 * @type {Person}
 */
var oChoEun = new Person("조은");

/**
 * Person을 기반으로 생성된 인스턴스 oLeeJiEun
 * @type {Person}
 */
var oLeeJiEun = new Person("이지은");

/**
 * Person을 기반으로 생성된 인스턴스 oBaeSooJi
 * @type {Person}
 */
var oBaeSooJi = new Person("배수지");

/**
 * 자바스크립트의 메모리에 대해서 설명
 * (그림 - Real)
 */

/**
 * 위와 같은 생성자를 과일로
 * @param sName
 * @constructor
 */
var Fruit = function(sName) {
    this._sName = sName;
}

/**
 * Fruit 생성자 함수의 prototype
 * @type {{getName: getName, setName: setName}}
 */
Fruit.prototype = {
    /**
     * getter
     * @returns {*}
     */
    getName : function() {
        return this._sName;
    },

    /**
     * setter
     * @param sName
     */
    setName : function(sName) {
        this._sName = sName;
    }
}

/**
 * Fruit를 기반으로 인스턴스 생성
 * @type {Fruit}
 */
var oOrange = new Fruit("오렌지");

/**
 * Fruit를 기반으로 인스턴스 생성
 * @type {Fruit}
 */
var oLemon = new Fruit("레몬");

/**
 * Fruit를 기반으로 인스턴스 생성
 * @type {Fruit}
 */
var oMelon = new Fruit("메론");

/**
 * Prototype 아키텍쳐 설명
 * (그림 - UML)
 */

var $Class = function(oClassMember) {
    /**
     * 함수 생성
     */
    var typeClass = function() {
        this.$init.apply(this, arguments);
    };

    /**
     * 프로토타입 지정
     * @type {*}
     */
    typeClass.prototype = oClassMember;

    /**
     * 생성자 함수 지정
     * @type {typeClass}
     */
    typeClass.prototype.constructor = typeClass;

    /**
     * 함수 반환
     */
    return typeClass;
};

/**
 * 책 생성자 함수
 */
var Book = $Class({
    /**
     * 이니셜라이징
     * @param sName
     * @param nPrice
     */
    $init : function(sName, nPrice) {
        this._sName = sName;
        this._nPrice = nPrice;
    },

    /**
     * getter
     * @returns {*}
     */
    getName : function() {
        return this._sName;
    },

    /**
     * setter
     * @param sName
     */
    setName : function(sName) {
        this._sName = sName;
    },

    /**
     * getter
     * @returns {*}
     */
    getPrice : function() {
        return this._nPrice;
    },

    /**
     * setter
     * @param nPrice
     */
    setPrice : function(nPrice) {
        this._nPrice = nPrice;
    }
});

var Pororo = new Book("뽀로로", 17000);