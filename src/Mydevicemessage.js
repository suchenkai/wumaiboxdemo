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
    Image,
    Button,
    TouchableNativeFeedback,
    Alert,
    ToastAndroid,
    ImageBackground

} from 'react-native';
import { MapView ,Marker} from 'react-native-amap3d';
const onPresspmtw=()=>{
    ToastAndroid.show('1234',ToastAndroid.SHORT)
};
const onPresspmte=()=>{
    Alert.alert('Button has been pressed!');
};
const onPresstemp=()=>{
    Alert.alert('Button has been pressed!');
};
const onPressshidu=()=>{
    Alert.alert('Button has been pressed!');
};

export default class Mydevicemessage extends Component {

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
                <View style={styles.pageStyle}>
                    <ImageBackground
                        style={styles.img}
                        source={require('../images/background.png')}
                    >
                        <View style={{alignSelf: 'center'}}>
                            <Image source={require('../images/head.jpg')}style={{height:80,width:80,alignSelf: 'center',borderRadius:80,marginTop:40}}></Image>
                            <Text>我的设备/点击绑定设备</Text>
                        </View>
                    </ImageBackground>
                    <View >

                    </View>
                </View>

            </View>



        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height:100,


    },
    img:{
        flexDirection:'column',
        width:500,
        height:200
    },
    text1:{
        color: 'black',
    },
    pageStyle: {
        flexDirection:'column',
        alignItems: 'stretch',
        width:500,
        height: 200,
        backgroundColor:'red'
    },

    button: {
        width: 240,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8BC34A',
    },
    headerStyle: {
        backgroundColor: '#292D33',
    },
    headerTitleStyle: {
        //标题的文字颜色
        color: 'white',
        //设置标题的大小
        fontSize: 18,
        //居中显示
        alignSelf: 'center',
    },
    ViewForTextStyle:{
        borderRadius: 30,
        alignSelf: 'center',
        height:30,
        width:50,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#8BC34A',
        margin:5
    },
    containers: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});
