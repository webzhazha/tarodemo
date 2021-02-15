import React, { Component } from 'react'
import { View, Text,Button   } from '@tarojs/components'
import './index.scss'

export default class Index extends Component<any, any> {
  constructor(props){
    super(props)
    // 设置初始state
    this.state = {
      title: '这是文案'
    }
    
    console.log(this.state.title);
    
  }
  componentWillMount () { 
    // this.setState  是异步操作   需要其中的回调中获取
    // this.setState({
    //   title: '哈哈哈'
    // },()=>{
    //   console.log(this.state.title);
    // })
    
    // onload之后, 页面组件渲染到taro的虚拟dom之前触发
    // 页面组件渲染到虚拟dom之前触发    类似于vue的created  
    // 页面组件渲染到虚拟dom之前触发  类似于vue的created
   }

  emitclick(e){
    e.stopPropagation()
    console.log('哈哈');
    
  }
  render () {
    return (
      <View className='index'>
        <Text>Hello worldddd! {this.state.title}</Text>
        <Button className='btn-max-w' plain type='primary' onClick={this.emitclick}>按钮</Button>
      </View>
    )
  }
}
