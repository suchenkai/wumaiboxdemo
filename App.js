/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';
import {
    TabNavigator,
    StackNavigator,
    DrawerNavigator,
} from 'react-navigation';

import Mydevicemessage from "./src/Mydevicemessage";
import Scan from "./src/Scan";
import pmtw from "./src/dataui/pmtw";
import pmten from "./src/dataui/pmten";
import temp from "./src/dataui/temp";
import humidity from "./src/dataui/humidity";
import Details from './src/Details';
//侧滑菜单的页面
import weather from "./src/drawer/weather";
import pmmap from "./src/drawer/pmmap";
import mydevice from "./src/drawer/mydevice";
import Mine from "./src/drawer/Mine";
import Login from "./src/drawer/Login";
import MakeInternet from "./src/drawer/MakeInternet";



const Stack = StackNavigator({

    Details: {
        screen: Details,
    },
    Scan: {
        screen:Scan,

    },

    Mydevicemessage:{
      screen:Mydevicemessage,
    },

    //DrawerNavigator跳转的页面也必须在这里注册
    weather: {
        screen: weather,
    },
    pmmap: {
        screen: pmmap,
    },
    mydevice: {
        screen: mydevice,
    },
    Mine :{
        screen:Mine,
    },
    pmtw :{
        screen:pmtw,
    },
    pmten :{
        screen:pmten,
    },
    temp :{
        screen:temp,
    },
    humidity :{
        screen:humidity,
    },
    Login:{
        screen:Login,
    },
    MakeInternet:{
        screen:MakeInternet,
    }
});


/**
 * 配置侧滑菜单
 */
export default Drawer = DrawerNavigator({
    Home: {
        screen: Stack,
        navigationOptions: {
            drawerLabel: '首页',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('./images/ic_home.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    weather: {
        screen: weather,
        navigationOptions: {
            drawerLabel: '天气状况',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('./images/wallet.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    pmmap: {
        screen: pmmap,
        navigationOptions: {
            drawerLabel: 'pm2.5地图',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('./images/cardcoupons.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    mydevice: {
        screen: mydevice,
        navigationOptions: {
            drawerLabel: '我的设备',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('./images/invite.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Mine:{
        screen: Mine,
        navigationOptions: {
            drawerLabel: '个人中心',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('./images/invite.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    // MakeInternet:{
    //     screen: MakeInternet,
    //     navigationOptions: {
    //         drawerLabel: '一键配网',
    //         drawerIcon: ({tintColor}) => (
    //             <Image
    //                 source={require('./images/invite.png')}
    //                 style={[styles.icon, {tintColor: tintColor}]}
    //             />
    //         ),
    //     }
    // },
    // Login:{
    //     screen: Login,
    //     navigationOptions: {
    //         drawerLabel: '登录',
    //     }
    // }
}, {
    drawerWidth: 250, // 展示的宽度
    drawerPosition: 'left', // 抽屉在左边还是右边

    contentOptions: {
        backgroundColor: '#292D33',
        fontcolor: 'white'
        // // activeTintColor: 'black',  // 选中文字颜色
        // activeBackgroundColor: '#fff', // 选中背景颜色
        // inactiveTintColor: '#EB3695',  // 未选中文字颜色
        // inactiveBackgroundColor: '#fff', // 未选中背景颜色
        // style: {  // 样式
        //
        // }
    },
});
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    }
});
