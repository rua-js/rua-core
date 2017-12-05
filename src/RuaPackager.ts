import invariant from 'invariant'
import AbstractPackager from './abstractions/AbstractPackager'

class RuaPackager extends AbstractPackager {

  /**
   * Global Root Reference
   *
   * @type {object}
   */
  protected global: object | undefined = undefined

  /**
   * RuaPackager Root Reference
   *
   * @type {object}
   */
  protected workspace: any = undefined

  /**
   * RuaPackager Boot Status
   *
   * @type {boolean}
   */
  protected booted: boolean = false

  /**
   * RuaPackager Mounting Path (related to global)
   *
   * @type {string}
   */
  protected mountingPath: string = '__rua_js_workspace'

  /**
   * RuaPackager Constructor
   */
  constructor () {
    super()
    // boot RuaPackager if not booted
    this.bootIfNotBooted()
  }

  /**
   * Boot the packager if not booted
   *
   * @returns {boolean}
   */
  protected bootIfNotBooted (): boolean {
    // stop actions if already booted
    if (this.booted) {
      return true
    }
    // set global variable
    this.global = RuaPackager.getGlobal()
    // initialize workspace
    this.initWorkspace()
    // set booted status to true
    this.booted = true

    return this.booted
  }

  /**
   * Initialize workspace
   *
   * @returns {boolean}
   */
  protected initWorkspace (): boolean {
    // check global
    invariant(this.global, '[Rua.js][Core]Global Is Not Found')
    // init workspace
    this.workspace[this.mountingPath] = {}
    return true
  }

  /**
   * Check registration status of the given package
   *
   * @param {string} name
   * @returns {boolean}
   */
  protected isRegistered (name: string): boolean {
    return !!this.workspace[name]
  }

  /**
   * Force register a package
   *
   * @param {string} name
   * @param {object} module
   * @returns {boolean}
   */
  protected register (name: string, module: object): boolean {
    this.workspace[name] = module
    return true
  }

  /**
   * Register a package if not registered
   *
   * @param {string} name
   * @param {object} module
   * @returns {boolean}
   */
  protected registerIfNotRegistered (name: string, module: object): boolean {
    if (this.isRegistered(name)) {
      return true
    }

    return this.register(name, module)
  }


  /**
   * Get workspace
   *
   * @returns {object}
   */
  protected getWorkspace (): object | undefined {
    return this.workspace
  }

  /**
   * Get mounting package
   *
   * @param {string} name
   * @returns {object}
   */
  protected getPackage (name: string): object | undefined {
    return this.workspace[name]
  }

  /**
   * Get global variable of current environment
   *
   * @returns {object}
   */
  protected static getGlobal (): object {
    return (new Function('return this'))()
  }
}

/**
 * Module export
 */
export default RuaPackager