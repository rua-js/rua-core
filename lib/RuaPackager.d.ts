import { Store } from './Types';
import { HasStore, CanBoot } from './Contracts/index';
export default class RuaPackager implements HasStore, CanBoot {
    store: Store;
    booted: boolean;
    constructor();
    getStore(): Store;
    getPackage(name: string): any;
    hasPackage(name: string): boolean;
    register(name: string, module: any): any;
    unregister(name: string): boolean;
    registerIfNotRegistered(name: string, module: any): any;
}
