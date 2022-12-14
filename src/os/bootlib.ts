export const BootLib_ver = 0.1
export interface Bootlib_Efi_struc {
    name?:string
    entry?:string
    build?:number | string
    // deno-lint-ignore ban-types
    file:object[]
    sboot?:boolean
}
function efi_load() {
    Deno.readTextFileSync("./efi.json")
}
function bootlib_efi_read():Efi_struc{

}
const efi_read:Efi_struc = JSON.parse(efi_load)