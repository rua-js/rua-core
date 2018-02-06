import { Store } from '../Types/index'

interface HasStore {
  store: Store,
  saveStore: (store: Store) => Store
  resetStore: () => Store
}

export default HasStore
