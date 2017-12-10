import { IsPackage, CanBoot } from '../Contracts'

export default abstract class AbstractPackage implements IsPackage, CanBoot {
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
}