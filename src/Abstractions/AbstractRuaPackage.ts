import {
  CanBoot,
  HasStore
} from '../Contracts'

import { Store } from '../Types'

/**
 * All Wrapper Package Should Extends This Class (AbstractRuaPackage)
 *
 */
abstract class AbstractRuaPackage implements CanBoot, HasStore {
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

  /**
   * The store of this package
   *
   * @type {object}
   */
  public store: Store = {}

  /**
   * Save new store
   *
   * @param {Store} store
   * @returns {Store}
   */
  public saveStore (store: Store): Store {
    // save store
    this.store = store
    return this.store
  }

  /**
   * Reset current store to empty object
   *
   * @returns {Store}
   */
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
