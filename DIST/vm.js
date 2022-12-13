"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/* `_render` is a class that has three methods, `Vector3D`, `Vector2D`, and `VecX`. */
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { x: x_, y: y_, z: z_ }];
            });
        });
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { x: x_, y: y_ }];
            });
        });
    };
    /**
     * `VecX(x_:VectorX):object{return {x:x_}}`
     *
     * The above function takes a VectorX as an argument and returns an object with a property called x
     * @param {VectorX} x_ - The vector to be wrapped.
     * @returns An object with a property x.
     */
    _render.prototype.VecX = function (x_) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { x: x_ }];
            });
        });
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { y: y_ }];
            });
        });
    };
    return _render;
}());
/* The class is a wrapper for the console object */
var _logger = /** @class */ (function () {
    function _logger() {
        this.CLASSINFO = { "ver": 0.1 };
    }
    /**
     * The function takes a string as an argument and logs it to the console
     * @param {Input_STRING} str - input
     */
    _logger.prototype.log = function (str) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(str);
                return [2 /*return*/];
            });
        });
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
/* The class is a math library that implements the _math_type interface. */
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
var _hex = /** @class */ (function () {
    function _hex() {
    }
    _hex.prototype.tohex = function () {
    };
    _hex.prototype.hexToDeco = function () {
    };
    return _hex;
}());
/* Creating a new object called vm and assigning it the properties mathlib and logger. */
var vm = {
    mathlib: new _mathlib(),
    /* `logger` is a class that contains a bunch of functions that log stuff to the console. */
    logger: new _logger()
};
//# sourceMappingURL=vm.js.map