import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'



@inject('counterStore')
@observer
class User extends Component {

  config = {
    navigationBarTitleText: '分类'
  }

  render () {
    return (
      <View>
        user
      </View>
    )
  }
}

export default User 
