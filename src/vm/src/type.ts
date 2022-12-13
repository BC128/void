
export type Input_STRING = string
export type Input_NUMBER = number
export type Input_OBJECT = object
export type Input_ANY = any
export type input_HEX = any
export type Return_NUM = number
export type Return_STRING = string
export type Return_OBJECT = object
export type Return_VOID = void
export type Return_HEX = string
export type VectorX = number
export type VectorY = number
export type VectorZ = number
export interface _math_type {
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
export interface _render_type {
    Vector3D(x_:VectorX,y_:VectorY,z_:VectorZ):Return_OBJECT
    Vector2D(x_:VectorX,y_:VectorY):Return_OBJECT
}
export interface _logger_type {
    log(str:Input_STRING):void
    error(str:Input_STRING):void
    warn(str:Input_STRING):void
}
interface _logger_type {
    log(str:Input_STRING):void
    error(str:Input_STRING):void
    warn(str:Input_STRING):void
}