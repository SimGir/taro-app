import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Product from '../../components/product/product'

import './index.scss'


@inject('systemInfoStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() {
    let { systemInfoStore } = this.props
    Taro.getSystemInfo({}).then(res=>{
      console.log("res", res)
      // 状态栏高度
      let statusBarHeight = res.statusBarHeight || 0
      // 导航栏高度
      let navBarHeight = res.screenHeight - res.windowHeight
      systemInfoStore.setStatusBarHeight(statusBarHeight);
      systemInfoStore.setNavBarHeight(navBarHeight);
    })
  }
  
  render() {
    let { statusBarHeight, navBarHeight } = this.props.systemInfoStore
    return (
      <View>
        {/* 重写顶部 */}
        <CoverView className="top" style={{paddingTop: statusBarHeight+"px"}}>
          <CoverView className="nav" style={{height: navBarHeight+"px"}}>欧力嘉蛋糕房</CoverView>
        </CoverView>
        {/* 页面内容 */}
        <View className="container">
          {/* 公告 */}
          <View>
            <View className="notice">
              <View className="board">公告</View>
              <View>上班时间 9:00-19:30</View>
            </View>
          </View>
          {/* 热品推荐 */}
          <View>
            <View className="title">热品推荐</View>
            <Product 
              title="全麦蛋糕"
              price="20"
              imgSrc="../../assets/user.png"
            />
          </View>
          {/* 新品推荐 */}
          <View>
            <View className="title">新品推荐</View>
            <Product 
              title="全麦蛋糕"
              price="20"
              imgSrc="../../assets/user.png"
            />
          </View>
        </View>
      </View>
    )
  }

}

export default Index 
