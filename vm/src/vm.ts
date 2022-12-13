type Input_STRING = string
type Input_NUMBER = number
type Input_OBJECT = object
type Input_ANY = any
type input_HEX = any
type Return_NUM = number
type Return_STRING = string
type Return_OBJECT = object
type Return_VOID = void
type Return_HEX = string
type VectorX = number
type VectorY = number
type VectorZ = number


/* Defining an interface called _logger_type that has three methods, log, error, and warn. */
interface _logger_type {
    log(str:Input_STRING):void
    error(str:Input_STRING):void
    warn(str:Input_STRING):void
}
/* Defining an interface called _render_type that has two methods, Vector3D and Vector2D. */
interface _render_type {
    Vector3D(x_:VectorX,y_:VectorY,z_:VectorZ):Return_OBJECT
    Vector2D(x_:VectorX,y_:VectorY):Return_OBJECT
}

/* Defining an interface called _math_type that has a bunch of methods. */
interface _math_type {
    add(baseNUM:number,chr:number):Return_NUM
    sub(baseNUM:number,chr:number):Return_NUM
    muti(baseNUM:number,chr:number):Return_NUM
    divid(baseNUM:number,chr:number):Return_NUM
    pi():Return_NUM
    E():Return_NUM
    LN10():Return_NUM
    LN10E():Return_NUM
    LN2E():Return_NUM
    LN2():Return_NUM
    SQRT1_2():Return_NUM
    abs(str:number):Return_NUM
}

/* `_render` is a class that has three methods, `Vector3D`, `Vector2D`, and `VecX`. */
class _render implements _render_type {
/**
 * `Vector3D` is a function that takes three parameters, `x_`, `y_`, and `z_`, and returns an object
 * with three properties, `x`, `y`, and `z`
 * @param {VectorX} x_ - The x-coordinate of the vector
 * @param {VectorY} y_ - The y-coordinate of the vector.
 * @param {VectorZ} z_ - The z-coordinate of the vector.
 * @returns An object with three properties: x, y, and z.
 */
<<<<<<< HEAD
   async Vector3D(x_:VectorX,y_:VectorY,z_:VectorZ){
=======
    Vector3D(x_:VectorX,y_:VectorY,z_:VectorZ):Return_OBJECT{
>>>>>>> 5a780441807edf484415e7ec1ba9c5dd1c3b2720
        return {x:x_,y:y_,z:z_}
    }
/**
 * `Vector2D(x_:VectorX,y_:VectorY)`
 * 
 * `Vector2D` is the name of the function
 * @param {VectorX} x_ - The x value of the vector
 * @param {VectorY} y_ - The y-coordinate of the vector.
 * @returns An object with two properties, x and y.
 */
<<<<<<< HEAD
    async Vector2D(x_:VectorX,y_:VectorY){
=======
    Vector2D(x_:VectorX,y_:VectorY):Return_OBJECT{
>>>>>>> 5a780441807edf484415e7ec1ba9c5dd1c3b2720
        return {x:x_,y:y_,}
    }
/**
 * `VecX(x_:VectorX):object{return {x:x_}}`
 * 
 * The above function takes a VectorX as an argument and returns an object with a property called x
 * @param {VectorX} x_ - The vector to be wrapped.
 * @returns An object with a property x.
 */
    async VecX(x_:VectorX){
        return {x:x_}
    }
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
    async VecY(y_:VectorY){
        return {y:y_}
    }
}

/* The class is a wrapper for the console object */
class _logger implements _logger_type {
/**
 * The function takes a string as an argument and logs it to the console
 * @param {Input_STRING} str - input
 */
    async log(str:Input_STRING){
        console.log(str)
    }
/**
 * The function takes a string as an argument and prints it to the console
 * @param {Input_STRING} str - The string to be printed to the console.
 */
    error(str:Input_STRING){
        console.error(str)
    }
/**
 * The function takes a string as an argument and prints it to the console
 * @param {Input_STRING} str - input
 */
    warn(str:Input_STRING){
        console.warn(str)
    }
    CLASSINFO = {"ver":0.1 }
}

/* The class is a math library that implements the _math_type interface. */
class _mathlib implements _math_type {
/**
 * The function takes two numbers as arguments and returns the sum of the two numbers.
 * @param {number} baseNUM - The base number to add to.
 * @param {number} chr - The character to be converted to a number
 * @returns The sum of the two numbers.
 */
    add(baseNUM:number,chr:number):Return_NUM{
        return baseNUM + chr
    }
/**
 * The function takes two numbers as arguments and returns the difference between them.
 * @param {number} baseNUM - The number you want to subtract from.
 * @param {number} chr - The character to be converted to a number
 * @returns the value of the baseNUM - chr.
 */
    sub(baseNUM:number,chr:number):Return_NUM{
        return baseNUM - chr
    }
/**
 * The function takes two numbers as arguments and returns the product of the two numbers.
 * @param {number} baseNUM - The base number you want to multiply by.
 * @param {number} chr - The character to be repeated
 * @returns the value of the baseNUM * chr.
 */
    muti(baseNUM:number,chr:number):Return_NUM{
        return baseNUM * chr
    }
/**
 * The function takes two numbers as arguments and returns the result of dividing the first number by
 * the second number.
 * @param {number} baseNUM - The number you want to divide by.
 * @param {number} chr - The character to be used in the division.
 * @returns the result of the division of the two numbers.
 */
    divid(baseNUM:number,chr:number):Return_NUM{
        return baseNUM / chr
    }
/**
 * &gt;&gt;&gt; pi()
 * 3.141592653589793
 * @returns The value of pi.
 */
    pi():Return_NUM{
        return Math.PI
    }
/**
 * E() returns the value of Euler's number.
 * @returns The value of Euler's number.
 */
    E():Return_NUM{
        return Math.E
    }
/**
 * LN10() returns the natural logarithm of 10.
 * @returns The natural logarithm of 10.
 */
    LN10():Return_NUM{
        return Math.LN10
    }
/**
 * LN10E() returns the base-10 logarithm of E.
 * @returns The base 10 logarithm of E.
 */
    LN10E():Return_NUM{
        return Math.LOG10E
    }
/**
 * LN2E() returns the base 2 logarithm of E.
 * @returns The base-2 logarithm of E.
 */
    LN2E():Return_NUM{
        return Math.LOG2E
    }
/**
 * LN2() returns the natural logarithm of 2.
 * @returns The natural logarithm of 2.
 */
    LN2():Return_NUM{
        return Math.LN2
    }
/**
 * SQRT1_2() returns the square root of 1/2.
 * @returns The square root of 1/2
 */
    SQRT1_2():Return_NUM{
        return Math.SQRT1_2
    }
/**
 * The function returns the square root of 2.
 * @returns The square root of 2.
 */
    SQRT2():Return_NUM{
        return Math.SQRT2
    }
/**
 * The function takes a number as an argument and returns the absolute value of that number.
 * @param {number} str - The string to be converted to an integer.
 * @returns The absolute value of the number.
 */
    abs(str:number):Return_NUM{
        return Math.abs(str)
        Math.acos
    }
    private CLASSINFO = {
        "ver":0.01
    }
}
class _hex {
    tohex(){

    }
}

/* Creating a new object called vm and assigning it the properties mathlib and logger. */
const vm = {
    mathlib: new _mathlib(),
    /* `logger` is a class that contains a bunch of functions that log stuff to the console. */
    logger: new _logger()

}
