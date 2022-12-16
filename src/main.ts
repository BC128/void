
class _Registry {
/**
 * It sets the key and data in local storage.
 * @param {string} key - The key to store the data under.
 * @param {string} data - the data to be stored
 */
  public set(key:string,data:string): void{
    localStorage.setItem(key,data)
  }
/**
 * It returns the value of the key in localStorage.
 * @param {string} key - The key of the item you want to get from localStorage.
 * @returns The value of the key in localStorage.
 */
  public get(key:string): string | null{
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
const _registry = new _Registry()

class _Boot {
  public setRegistry(){
      _registry.set("boot_time",`${Date.now()}`)
      _registry.set("boot_lele",`${Date.now()}`)

  }
}
const _boot = new _Boot()
const tsLixux = {
  registry:_registry,
  boot:_boot
}

tsLixux.boot.setRegistry()
console.log(tsLixux.registry.get("boot_time")?.toString())
