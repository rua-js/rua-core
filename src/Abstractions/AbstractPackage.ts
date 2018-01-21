import { CanBoot } from '../Contracts'

export default abstract class AbstractPackage implements CanBoot {
  /**
   * Boot status
   *
   * @type {boolean}
   */
  public booted: boolean = false
}