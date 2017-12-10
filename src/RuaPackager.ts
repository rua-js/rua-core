import { Store } from './Types'
import { HasStore, CanBoot } from './Contracts'
import { AbstractPackage } from './Abstractions'

export default class RuaPackager implements HasStore, CanBoot {

  public store: Store = {}

  public booted: boolean = false

  public constructor () {
    this.booted = true
  }

  //----- getter & setter & checker -----

  public getStore (): Store {
    return this.store
  }

  public getPackage (name: string): AbstractPackage {
    return this.store[name]
  }

  public hasPackage (name: string): boolean {
    return !!this.store[name]
  }

  //----- methods -----

  public register (name: string, module: AbstractPackage): AbstractPackage {
    this.store[name] = module
    return this.store[name]
  }

  public unregister (name: string): boolean {
    delete this.store[name]
    return !this.store[name]
  }

  public registerIfNotRegistered (name: string, module: AbstractPackage): AbstractPackage {
    if (this.hasPackage(name)) {
      return this.getPackage(name)
    }

    return this.register(name, module)
  }
}