import { IsPackage, CanBoot } from '../Contracts';
export default abstract class AbstractPackage implements IsPackage, CanBoot {
    isRuaPackage: boolean;
    booted: boolean;
}
