import { Store } from '../Types/index'

export default interface HasStore {
  store: Store,
  saveStore: (store: Store) => Store
  resetStore: () => Store
}