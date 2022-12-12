"use strict";
var _render = /** @class */ (function () {
    function _render() {
    }
    /**
     * `Vector3D` is a function that takes three parameters, `x_`, `y_`, and `z_`, and returns an object
     * with three properties, `x`, `y`, and `z`
     * @param {VectorX} x_ - The x-coordinate of the vector
     * @param {VectorY} y_ - The y-coordinate of the vector.
     * @param {VectorZ} z_ - The z-coordinate of the vector.
     * @returns An object with three properties: x, y, and z.
     */
    _render.prototype.Vector3D = function (x_, y_, z_) {
        return { x: x_, y: y_, z: z_ };
    };
    /**
     * `Vector2D(x_:VectorX,y_:VectorY)`
     *
     * `Vector2D` is the name of the function
     * @param {VectorX} x_ - The x value of the vector
     * @param {VectorY} y_ - The y-coordinate of the vector.
     * @returns An object with two properties, x and y.
     */
    _render.prototype.Vector2D = function (x_, y_) {
        return { x: x_, y: y_ };
    };
    /**
     * `VecX(x_:VectorX):object{return {x:x_}}`
     *
     * The above function takes a VectorX as an argument and returns an object with a property called x
     * @param {VectorX} x_ - The vector to be wrapped.
     * @returns An object with a property x.
     */
    _render.prototype.VecX = function (x_) {
        return { x: x_ };
    };
    /**
     * VecY(y_:VectorY):object{
     *         return {y:y_}
     *     }
     *
     * The function takes a VectorY as an argument and returns an object with a property called y.
     *
     * The function is called like this:
     *
     *     let y = new VectorY(1,2,3,4,5,6,7,8,9,10);
     *     let y_ = VecY(y);
     *
     * The function returns an object with a property called y.
     *
     *     console.log(y_);
     *
     * The console.log() statement returns this:
     *
     *     {y: VectorY}
     *
     * The object has a property called y.
     *
     *     console.log(y_.y);
     *
     * The console.log() statement returns this:
     * @param {VectorY} y_ - The y-coordinate of the vector.
     * @returns An object with a property y.
     */
    _render.prototype.VecY = function (y_) {
        return { y: y_ };
    };
    return _render;
}());
var _logger = /** @class */ (function () {
    function _logger() {
        this.CLASSINFO = { "ver": 0.1 };
    }
    /**
     * The function takes a string as an argument and logs it to the console
     * @param {Input_STRING} str - input
     */
    _logger.prototype.log = function (str) {
        console.log(str);
    };
    /**
     * The function takes a string as an argument and prints it to the console
     * @param {Input_STRING} str - The string to be printed to the console.
     */
    _logger.prototype.error = function (str) {
        console.error(str);
    };
    /**
     * The function takes a string as an argument and prints it to the console
     * @param {Input_STRING} str - input
     */
    _logger.prototype.warn = function (str) {
        console.warn(str);
    };
    return _logger;
}());
var _mathlib = /** @class */ (function () {
    function _mathlib() {
        this.CLASSINFO = {
            "ver": 0.01
        };
    }
    /**
     * The function takes two numbers as arguments and returns the sum of the two numbers.
     * @param {number} baseNUM - The base number to add to.
     * @param {number} chr - The character to be converted to a number
     * @returns The sum of the two numbers.
     */
    _mathlib.prototype.add = function (baseNUM, chr) {
        return baseNUM + chr;
    };
    /**
     * The function takes two numbers as arguments and returns the difference between them.
     * @param {number} baseNUM - The number you want to subtract from.
     * @param {number} chr - The character to be converted to a number
     * @returns the value of the baseNUM - chr.
     */
    _mathlib.prototype.sub = function (baseNUM, chr) {
        return baseNUM - chr;
    };
    /**
     * The function takes two numbers as arguments and returns the product of the two numbers.
     * @param {number} baseNUM - The base number you want to multiply by.
     * @param {number} chr - The character to be repeated
     * @returns the value of the baseNUM * chr.
     */
    _mathlib.prototype.muti = function (baseNUM, chr) {
        return baseNUM * chr;
    };
    /**
     * The function takes two numbers as arguments and returns the result of dividing the first number by
     * the second number.
     * @param {number} baseNUM - The number you want to divide by.
     * @param {number} chr - The character to be used in the division.
     * @returns the result of the division of the two numbers.
     */
    _mathlib.prototype.divid = function (baseNUM, chr) {
        return baseNUM / chr;
    };
    /**
     * &gt;&gt;&gt; pi()
     * 3.141592653589793
     * @returns The value of pi.
     */
    _mathlib.prototype.pi = function () {
        return Math.PI;
    };
    /**
     * E() returns the value of Euler's number.
     * @returns The value of Euler's number.
     */
    _mathlib.prototype.E = function () {
        return Math.E;
    };
    /**
     * LN10() returns the natural logarithm of 10.
     * @returns The natural logarithm of 10.
     */
    _mathlib.prototype.LN10 = function () {
        return Math.LN10;
    };
    /**
     * LN10E() returns the base-10 logarithm of E.
     * @returns The base 10 logarithm of E.
     */
    _mathlib.prototype.LN10E = function () {
        return Math.LOG10E;
    };
    /**
     * LN2E() returns the base 2 logarithm of E.
     * @returns The base-2 logarithm of E.
     */
    _mathlib.prototype.LN2E = function () {
        return Math.LOG2E;
    };
    /**
     * LN2() returns the natural logarithm of 2.
     * @returns The natural logarithm of 2.
     */
    _mathlib.prototype.LN2 = function () {
        return Math.LN2;
    };
    /**
     * SQRT1_2() returns the square root of 1/2.
     * @returns The square root of 1/2
     */
    _mathlib.prototype.SQRT1_2 = function () {
        return Math.SQRT1_2;
    };
    /**
     * The function returns the square root of 2.
     * @returns The square root of 2.
     */
    _mathlib.prototype.SQRT2 = function () {
        return Math.SQRT2;
    };
    /**
     * The function takes a number as an argument and returns the absolute value of that number.
     * @param {number} str - The string to be converted to an integer.
     * @returns The absolute value of the number.
     */
    _mathlib.prototype.abs = function (str) {
        return Math.abs(str);
        Math.acos;
    };
    return _mathlib;
}());
var vm = {
    /* `mathlib` is a class that contains a bunch of math functions. */
    mathlib: new _mathlib(),
    /* `logger` is a class that contains a bunch of functions that log stuff to the console. */
    logger: new _logger()
};
//# sourceMappingURL=vm.js.map