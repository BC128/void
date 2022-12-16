
class _Registry {
/**
 * It sets the key and data in local storage.
 * @param {string} key - The key to store the data under.
 * @param {string} data - the data to be stored
 */
  public setItem(key:string,data:string): void{
    localStorage.setItem(key,data)
  }
/**
 * It returns the value of the key in localStorage.
 * @param {string} key - The key of the item you want to get from localStorage.
 * @returns The value of the key in localStorage.
 */
  public getItem(key:string): string | null{
    return localStorage.getItem(key)
  }
/**
 * It clears the local storage.
 */
  public clear(): void{
    localStorage.clear()
  }
/**
 * It returns the length of the value of the key in localStorage.
 * @param {string} key - The key of the item you want to get the length of.
 * @returns The length of the value of the key in localStorage.
 */
  public length(key:string){
      return localStorage.getItem(key)?.length
  }
/**
 * It removes an item from local storage
 * @param {string} key - The key of the item you want to remove.
 * @returns The value of the key
 */
  public removeItem(key:string){
    return localStorage.removeItem(key)
  }
}
class _RegistryFS {
  public removeItemFile(loc:string | URL){
    Deno.remove(`./src/db/reg/${loc}`)
  }
  public async getItemFile(loc:string){
    const decoder = new TextDecoder();
    const data = Deno.readFileSync(("./src/db/reg/"+loc);

    return decoder.
  }
  public async setItemFile(loc:string | URL,data_:string){
    const encoder = new TextEncoder();
    const data = encoder.encode(data_+"\n");
    const file = Deno.create(`./src/db/reg/${loc}`)
    await Deno.writeFile(`./src/db/reg/${loc}`, data);
  }
  public async setItemGroup(loc:string | URL){
    await Deno.mkdir(`./src/db/reg/${loc}`,{recursive: true})
  }
}
class _Boot {
  public setRegistry(){
      //_registry.setItem("boot/uptime.reg",`${Date.now()}`)
      //_registry.setItem("boot/verions/pkg.reg",`0.0.1`)
      //_registry.setItem("boot/verions/kernel.reg","0.0.1")
      _registryFS.setItemGroup("boot")
      _registryFS.setItemGroup("boot/verions")
      _registryFS.setItemFile("boot/uptime.reg",`${Date.now()}`)
      _registryFS.setItemFile("boot/verions/pkg.reg",`0.0.1`)
      _registryFS.setItemFile("boot/verions/kernel.reg","0.0.1")
  }
}
const _registry = new _Registry()
const _boot = new _Boot()
const _registryFS = new _RegistryFS()
const tsLixux = {
  registry:_registry,
  registryFS:_registryFS,
  boot:_boot
}

tsLixux.boot.setRegistry()
console.log(tsLixux.registryFS.getItemFile("boot/test.reg"))
