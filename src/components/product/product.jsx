import { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './product.scss'

class Product extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log("this.props", this.props)
    let { imgSrc, title, price } = this.props
    return (
      <View className="product">
        <Image src={imgSrc} className="product-img" />
        <View className="product-name">
          {title}
        </View>
        <View className="product-buy">
          <View>
            ￥{price}
          </View>
          <View>
            购物车
          </View>
        </View>
      </View>
    )
  }
}

export default Product