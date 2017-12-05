abstract class AbstractPackager {
  protected abstract global: object | undefined
  protected abstract workspace: object | undefined
  protected abstract booted: boolean
  protected abstract mountingPath: string
  protected abstract bootIfNotBooted(): boolean
  protected abstract initWorkspace(): boolean
  protected abstract isRegistered(name: string): boolean
  protected abstract register(name: string, module: object): boolean
  protected abstract registerIfNotRegistered(name: string, module: object): boolean
  protected abstract getWorkspace(): object | undefined
  protected abstract getPackage(name: string): object | undefined
}

export default AbstractPackager