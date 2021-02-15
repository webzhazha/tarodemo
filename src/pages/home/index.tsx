import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'
import Show from '../../components/show/index'
// 引入腾讯api
import QQMapWX from '../../qqmap-wx-jssdk1.0/qqmap-wx-jssdk.min'
interface location {
  latitude: number,
  longitude: number
}
// 实例化API核心类
// 实例化API核心类
var qqmapsdk: any = new QQMapWX({
  key: 'MRJBZ-P263U-FDBVS-4UNTQ-WKBR2-55B3W' // 必填
})
export default class homeIndex extends Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      city: '初始位置',
      msg: '一个'
    }
  }
  componentWillMount() { }
  componentDidMount() {
    // 虚拟dom渲染之后触发
    this.getLocation()
  }
  async getLocation() {
    // 获取位置信息
    let latitude, longitude
    let that = this
    await Taro.getLocation({
      type: 'wgs84',
      success: function (res) {
        latitude = res.latitude
        longitude = res.longitude
      }
    })
    // 
    let location: location = {
      latitude,
      longitude
    }
    qqmapsdk.reverseGeocoder({
      //位置坐标，默认获取当前位置，非必须参数
      location,
      //get_poi: 1, //是否返回周边POI列表：1.返回；0不返回(默认),非必须参数
      success: function (res) {//成功后的回调
        console.log('获取位置');

        console.log(res);
        that.setState({
          city: res.result.address
        })
      },
      fail: function (error) {
        console.error(error);
      },
      complete: function (res) {
      }
    })
  }
  change(msg) {
    console.log('触发');

    console.log(msg);

  }
  render() {
    return (
      <View className='homes'>
        <Text className="dddd" style='margin-left: 5px'>这是home页{this.state.msg}</Text>
        <Show
          renderHeader={<View>这是父组件传过去的头</View>}
          renderFooter={<View>这是父组件传过去的尾</View>}

        >
          <View>这是home组件传给show子组件的</View>
        </Show>
        <View>
          你的位置在:{this.state.city}
        </View>
      </View>
    )
  }
}
