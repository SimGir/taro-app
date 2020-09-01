import { observable } from 'mobx'

class systemInfoStore {
  @observable statusBarHeight = 0
  @observable navBarHeight = 0

  setStatusBarHeight(value) {
    this.statusBarHeight = value
  }
  setNavBarHeight(value) {
    this.navBarHeight = value
  }
  
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  }
}
export default new systemInfoStore()