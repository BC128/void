type Input_STRING = string;
type Input_NUMBER = number;
type Input_OBJECT = object;
type Input_ANY = any;
type Return_NUM = number;
type Return_STRING = string;
type Return_OBJECT = object;
type VectorX = number;
type VectorY = number;
type VectorZ = number;
interface _logger_type {
    log(str: Input_STRING): void;
    error(str: Input_STRING): void;
    warn(str: Input_STRING): void;
}
interface _render_type {
    Vector3D(x_: VectorX, y_: VectorY, z_: VectorZ): object;
    Vector2D(x_: VectorX, y_: VectorY): object;
}
interface _math_type {
    add(baseNUM: number, chr: number): number;
    sub(baseNUM: number, chr: number): number;
    muti(baseNUM: number, chr: number): number;
    divid(baseNUM: number, chr: number): number;
    pi(): number;
    E(): number;
    LN10(): number;
    LN10E(): number;
    LN2E(): number;
    LN2(): number;
    SQRT1_2(): number;
    abs(str: number): number;
}
declare class _render implements _render_type {
    /**
     * `Vector3D` is a function that takes three parameters, `x_`, `y_`, and `z_`, and returns an object
     * with three properties, `x`, `y`, and `z`
     * @param {VectorX} x_ - The x-coordinate of the vector
     * @param {VectorY} y_ - The y-coordinate of the vector.
     * @param {VectorZ} z_ - The z-coordinate of the vector.
     * @returns An object with three properties: x, y, and z.
     */
    Vector3D(x_: VectorX, y_: VectorY, z_: VectorZ): {
        x: number;
        y: number;
        z: number;
    };
    /**
     * `Vector2D(x_:VectorX,y_:VectorY)`
     *
     * `Vector2D` is the name of the function
     * @param {VectorX} x_ - The x value of the vector
     * @param {VectorY} y_ - The y-coordinate of the vector.
     * @returns An object with two properties, x and y.
     */
    Vector2D(x_: VectorX, y_: VectorY): {
        x: number;
        y: number;
    };
    /**
     * `VecX(x_:VectorX):object{return {x:x_}}`
     *
     * The above function takes a VectorX as an argument and returns an object with a property called x
     * @param {VectorX} x_ - The vector to be wrapped.
     * @returns An object with a property x.
     */
    VecX(x_: VectorX): object;
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
    VecY(y_: VectorY): object;
}
declare class _logger implements _logger_type {
    /**
     * The function takes a string as an argument and logs it to the console
     * @param {Input_STRING} str - input
     */
    log(str: Input_STRING): void;
    /**
     * The function takes a string as an argument and prints it to the console
     * @param {Input_STRING} str - The string to be printed to the console.
     */
    error(str: Input_STRING): void;
    /**
     * The function takes a string as an argument and prints it to the console
     * @param {Input_STRING} str - input
     */
    warn(str: Input_STRING): void;
    CLASSINFO: {
        ver: number;
    };
}
declare class _mathlib implements _math_type {
    /**
     * The function takes two numbers as arguments and returns the sum of the two numbers.
     * @param {number} baseNUM - The base number to add to.
     * @param {number} chr - The character to be converted to a number
     * @returns The sum of the two numbers.
     */
    add(baseNUM: number, chr: number): number;
    /**
     * The function takes two numbers as arguments and returns the difference between them.
     * @param {number} baseNUM - The number you want to subtract from.
     * @param {number} chr - The character to be converted to a number
     * @returns the value of the baseNUM - chr.
     */
    sub(baseNUM: number, chr: number): number;
    /**
     * The function takes two numbers as arguments and returns the product of the two numbers.
     * @param {number} baseNUM - The base number you want to multiply by.
     * @param {number} chr - The character to be repeated
     * @returns the value of the baseNUM * chr.
     */
    muti(baseNUM: number, chr: number): number;
    /**
     * The function takes two numbers as arguments and returns the result of dividing the first number by
     * the second number.
     * @param {number} baseNUM - The number you want to divide by.
     * @param {number} chr - The character to be used in the division.
     * @returns the result of the division of the two numbers.
     */
    divid(baseNUM: number, chr: number): number;
    /**
     * &gt;&gt;&gt; pi()
     * 3.141592653589793
     * @returns The value of pi.
     */
    pi(): number;
    /**
     * E() returns the value of Euler's number.
     * @returns The value of Euler's number.
     */
    E(): number;
    /**
     * LN10() returns the natural logarithm of 10.
     * @returns The natural logarithm of 10.
     */
    LN10(): number;
    /**
     * LN10E() returns the base-10 logarithm of E.
     * @returns The base 10 logarithm of E.
     */
    LN10E(): number;
    /**
     * LN2E() returns the base 2 logarithm of E.
     * @returns The base-2 logarithm of E.
     */
    LN2E(): number;
    /**
     * LN2() returns the natural logarithm of 2.
     * @returns The natural logarithm of 2.
     */
    LN2(): number;
    /**
     * SQRT1_2() returns the square root of 1/2.
     * @returns The square root of 1/2
     */
    SQRT1_2(): number;
    /**
     * The function returns the square root of 2.
     * @returns The square root of 2.
     */
    SQRT2(): number;
    /**
     * The function takes a number as an argument and returns the absolute value of that number.
     * @param {number} str - The string to be converted to an integer.
     * @returns The absolute value of the number.
     */
    abs(str: number): number;
    private CLASSINFO;
}
declare const vm: {
    mathlib: _mathlib;
    logger: _logger;
};
//# sourceMappingURL=vm.d.ts.map