import { Store } from './Types';
import { HasStore, CanBoot } from './Contracts';
import { AbstractPackage } from './Abstractions';
export default class RuaPackager implements HasStore, CanBoot {
    store: Store;
    booted: boolean;
    constructor();
    getStore(): Store;
    getPackage(name: string): AbstractPackage;
    hasPackage(name: string): boolean;
    register(name: string, module: AbstractPackage): AbstractPackage;
    unregister(name: string): boolean;
    registerIfNotRegistered(name: string, module: AbstractPackage): AbstractPackage;
}
