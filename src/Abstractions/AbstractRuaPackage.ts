import {
  IsPackage,
  CanBoot,
  HasStore
} from '../Contracts'

import { Store } from '../Types'

abstract class AbstractRuaPackage implements IsPackage, CanBoot, HasStore {
  /**
   * A package require this variable to be true
   *
   * @type {boolean}
   */
  public isRuaPackage: boolean = true

  /**
   * Boot status
   *
   * @type {boolean}
   */
  public booted: boolean = false

  public store: Store = {}

  public saveStore (store: Store): Store {
    // save store
    this.store = store
    return this.store
  }

  public resetStore (): Store {
    // deep clone on store
    const store = (() => {
      return this.store
    })()
    // reset store
    this.store = {}
    return store
  }
}

export default AbstractRuaPackage
