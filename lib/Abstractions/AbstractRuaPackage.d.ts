import { IsPackage, CanBoot, HasStore } from '../Contracts';
import { Store } from '../Types';
declare abstract class AbstractRuaPackage implements IsPackage, CanBoot, HasStore {
    isRuaPackage: boolean;
    booted: boolean;
    store: Store;
    saveStore(store: Store): Store;
    resetStore(): Store;
}
export default AbstractRuaPackage;
