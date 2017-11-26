
class RuaCore {

  /**
   * Global Root Reference
   *
   * @type {Object}
   */
  private global = false;

  /**
   * RuaCore Root Reference
   *
   * @type {Object}
   */
  private workspace = false;

  /**
   * RuaCore Boot Status
   *
   * @type {boolean}
   */
  private booted = false;

  /**
   * RuaCore Constructor
   */
  constructor() {
    // boot RuaCore if not booted
    this.bootIfNotBooted()
  }

  public bootIfNotBooted () {
    if (this.booted) return;
    this.global = this.getGlobal();

  }

  private initWorkspace () {
    // check global
    if (!this.global) return console.error('[RUA-CORE]Global Is Not Found')

    // check workspace
  }

  private getGlobal () {
    return (new Function('return this'))()
  }
}