/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button,
} from 'react-native';

export default class mydevice extends Component {

    static navigationOptions = ({navigation, screenProps}) => ({

        headerTitle: '我的设备',
        //设置滑动返回的距离
        gestureResponseDistance: {horizontal: 300},

        //是否开启手势滑动返回，android 默认关闭 ios打开
        gesturesEnabled: true,

        //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
        headerBackTitle: null,
        //导航栏的样式
        headerStyle: styles.headerStyle,
        //导航栏文字的样式
        headerTitleStyle: styles.headerTitleStyle,
        //返回按钮的颜色
        headerTintColor: 'white',

        //隐藏顶部导航栏
        // header: null,

        //设置顶部导航栏右边的视图  和 解决当有返回箭头时，文字不居中
        headerRight: (<View/>),

        //设置导航栏左边的视图
        // headerLeft: (<View/>),

    });

    render() {
        return (
            <View style={styles.container}>
                {/*<Text style={{color: 'black'}}>我的设备</Text>*/}
                <View style={{width:'100%',height:80,alignSelf: 'center',flexDirection:'row',backgroundColor:'red'}}>

                    <Text style={{fontSize:20,fontWeight: '500',}}>1</Text>
                    <Text style={{alignSelf: 'center'}}>请先进行扫码绑定设备</Text>
                </View>
                <View style={{height:1,backgroundColor:'black',marginLeft:30,marginRight:30,marginTop:10}}/>
                <View style={{width:'100%',height:80,alignSelf: 'center',flexDirection:'row',backgroundColor:'red'}}>
                    <Text style={{fontSize:20,fontWeight: '500',}}>2</Text>
                    <Text style={{justifyContent: 'center',}}>确认手机和盒子在同一WiFi下</Text>
                </View>
                <View style={{height:1,backgroundColor:'black',marginLeft:30,marginRight:30,marginTop:10}}/>
                <View style={{width:'100%',height:80,alignSelf: 'center',flexDirection:'row',backgroundColor:'red'}}>
                    <Text style={{fontSize:20,fontWeight: '500',}}>3</Text>
                    <Text style={{alignSelf: 'center'}}>长按WiFi按钮3秒至WiFi闪烁</Text>
                </View>
                <View style={{height:1,backgroundColor:'black',marginLeft:30,marginRight:30,marginTop:10}}/>
                <View style={{width:'100%',height:80,alignSelf: 'center',flexDirection:'row',backgroundColor:'red'}}>
                    <Text style={{fontSize:20,fontWeight: '500',}}>4</Text>
                    <Text>绑定成功查看数据</Text>
                </View>
                <View style={{justifyContent:'center',marginLeft:15,marginRight:15,marginTop:10,width:'80%'}}>
                    <Button
                        title='绑定设备'
                        style={{marginLeft:15,marginRight:15,width:200,backgroundColor:'#841584'}}
                        onPress={()=>{
                            this.props.navigation.navigate('Scan',{key:'Scan'})
                        }}
                    />
                </View>

                <View style={{justifyContent:'center',marginLeft:15,marginRight:15,marginTop:10,width:'80%'}}>
                    <Button
                        title='直接进入我的设备'
                        style={{marginLeft:15,marginRight:15,width:200}}
                        onPress={()=>{
                            this.props.navigation.navigate('Mydevicemessage',{key:'Mydevicemessgae'})
                        }}
                    ></Button>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: 240,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4398ff',
    },
    headerStyle: {
        backgroundColor: '#292D33',
    },
    headerTitleStyle: {
        color: 'white',
        //设置标题的大小
        fontSize: 18,
        //居中显示
        alignSelf: 'center',
    },
});

