import Taro, { Component } from '@tarojs/taro'
import { Provider, inject } from '@tarojs/mobx'
import Index from './pages/index'

import store from './store/index'

import './app.scss'
import 'taro-ui/dist/style/index.scss'
import { observable } from 'mobx'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/sort/sort',
      'pages/cart/cart',
      'pages/user/user'
    ],
    tabBar: {
      'color': '#000',
      'selectedColor': '#9dd3d3',
      'backgroundColor': '#fff',
      'borderStyle': 'white',
      list: [{
        'iconPath': 'assets/user.png',
        'selectedIconPath': 'assets/user.png',
        pagePath: 'pages/index/index',
        text: '首页'
      }, {
        'iconPath': 'assets/user.png',
        'selectedIconPath': 'assets/user.png',
        pagePath: 'pages/sort/sort',
        text: '分类'
      }, {
        'iconPath': 'assets/user.png',
        'selectedIconPath': 'assets/user.png',
        pagePath: 'pages/cart/cart',
        text: '购物车'
      }, {
        'iconPath': 'assets/user.png',
        'selectedIconPath': 'assets/user.png',
        pagePath: 'pages/user/user',
        text: '个人中心'
      }]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#f5f5f5',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      navigationStyle: 'custom',
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store} >
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
