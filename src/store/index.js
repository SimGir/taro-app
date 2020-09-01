import counter from './counter'
import systemInfo from './systemInfo'

class Store {
  constructor() {
    this.systemInfoStore = systemInfo
    this.counterStore = counter
  }
}

export default new Store()