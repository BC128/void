export class _Acpi {
    public shutdown(code:number){
        Deno.exit(code)
    }
}