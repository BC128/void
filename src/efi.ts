export interface Efi_struc {
    name?:string
    entry?:string
    build?:number | string
    // deno-lint-ignore ban-types
    file:object[]
    sboot?:boolean
}
const os_path = "./src/os/"

const efi_load = Deno.readTextFileSync(os_path+ "efi.json")
const efi_read:Efi_struc = JSON.parse(efi_load)


console.log(os_path + efi_read.file[0])