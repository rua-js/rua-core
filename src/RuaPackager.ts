import * as invariant from 'invariant'

import { Store } from './Types'
import { HasStore, CanBoot } from './Contracts'
import { AbstractRuaPackage, AbstractPackage } from './Abstractions'

export default class RuaPackager extends AbstractPackage {

  /**
   * Contains all rua packages
   *
   * @type {object}
   */
  public store: Store = {}

  /**
   * Constructor
   */
  public constructor() {
    super()
    this.booted = true
  }

  /**
   * Get current store
   *
   * @returns {Store}
   */
  public getStore(): Store {
    return this.store
  }

  /**
   * Get a specific package from the store
   *
   * @param {string} name
   * @returns {AbstractRuaPackage}
   */
  public getPackage(name: string): AbstractRuaPackage {
    return this.store[name]
  }

  /**
   * Check if current store has a specific package
   *
   * @param {string} name
   * @returns {boolean}
   */
  public hasPackage(name: string): boolean {
    return !!this.store[name]
  }

  //----- methods -----
  /**
   * Register a package
   *
   * @param {string} name
   * @param {AbstractRuaPackage} module
   * @returns {AbstractRuaPackage}
   */
  public register(name: string, module: AbstractRuaPackage): AbstractRuaPackage {
    invariant(
      module.isRuaPackage,
      `package "${name}" is NOT a valid Rua-Package`
    )
    this.store[name] = module
    return this.store[name]
  }

  /**
   * Remove a package from current store
   *
   * @param {string} name
   * @returns {boolean}
   */
  public unregister(name: string): boolean {
    delete this.store[name]
    return !this.store[name]
  }

  /**
   * Register a package only if namespace is not taken
   *
   * @param {string} name
   * @param {AbstractRuaPackage} module
   * @returns {AbstractRuaPackage}
   */
  public registerIfNotRegistered(name: string, module: AbstractRuaPackage): AbstractRuaPackage {
    if (this.hasPackage(name)) {
      return this.getPackage(name)
    }

    return this.register(name, module)
  }
}