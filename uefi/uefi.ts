import { _Acpi } from "./acpi.ts"

interface EFIFILE_struc {
    name:string
    entry:string
    build:number
    // deno-lint-ignore ban-types
    file:object[]
    sboot?:boolean
}
class _Uefi {
    private os_path =  "./os/"
    private load_EFI_FILE(input:any){
        return Deno.readTextFileSync(input)
    }
    private read_EFI_FILE(input:any):EFIFILE_struc{
        return JSON.parse(input)
    }
    private boot_EFI_FILE(){
        const boot_EFI_var1 = this.load_EFI_FILE(this.os_path+ "efi.json")
        const boot_EFI_var2 = this.read_EFI_FILE(boot_EFI_var1)
        import(this.os_path +boot_EFI_var2.entry)
    }
    public EFI_File = this.read_EFI_FILE(this.load_EFI_FILE(this.os_path+ "efi.json"))
    public bootOS(){
        this.boot_EFI_FILE
    }

    public log(input:string|number|object|null|boolean){
       console.log("<hwfi> <log> "+input) 
    }
    public exit_hwfi_mode(){
        console.log("<hwfi> <log> EXIT UEFI MODE")
    }
}

export const _uefi = new _Uefi()
export const _acpi = new _Acpi()

export const hwfi = {
    uefi: _uefi,
    acpi: _acpi
}
function init(){
    hwfi.uefi.bootOS()
}