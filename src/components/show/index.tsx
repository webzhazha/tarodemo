import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
interface props {
  // name: string,
  // onClick: any
}
export default class Show extends Component<any> {
  constructor(props: any){
    super(props)
  }
  // static externalClasses = ['my_color']
  render () {
    return (
      <View className="my_color">
        <View>这是show组件</View>
        {this.props.renderHeader}
        {this.props.children}
        {this.props.renderFooter}
        <View>类似于多个childer用法</View>
      </View>
    )
  }
}
