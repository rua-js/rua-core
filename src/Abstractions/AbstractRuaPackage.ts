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
   * The third-party driver
   */
  public driver: any
}

export default AbstractRuaPackage
