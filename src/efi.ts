export interface Efi_struc {
    name?:string
    entry?:string
    build?:number
    // deno-lint-ignore ban-types
    file?:object
    sboot?:boolean
}
const os_path = Deno.cwd()

const efi_load = Deno.readTextFileSync("./src/os/efi.json")
const efi_read:Efi_struc = JSON.parse(efi_load)


console.log(efi_read)