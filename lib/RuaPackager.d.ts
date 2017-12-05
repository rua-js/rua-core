import AbstractPackager from './abstractions/AbstractPackager';
declare class RuaPackager extends AbstractPackager {
    protected global: object | undefined;
    protected workspace: any;
    protected booted: boolean;
    protected mountingPath: string;
    constructor();
    protected bootIfNotBooted(): boolean;
    protected initWorkspace(): boolean;
    protected isRegistered(name: string): boolean;
    protected register(name: string, module: object): boolean;
    protected registerIfNotRegistered(name: string, module: object): boolean;
    protected getWorkspace(): object | undefined;
    protected getPackage(name: string): object | undefined;
    protected static getGlobal(): object;
}
export default RuaPackager;
