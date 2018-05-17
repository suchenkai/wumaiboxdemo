import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback,
    Image,
} from 'react-native';
export default class Mine extends Component {

    static navigationOptions = ({navigation, screenProps}) => ({

        headerTitle: '个人中心',
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
                <View style={styles.apart}></View>
                <View style={styles.style1}>
                    <View style={{flexDirection:'row',height:90,width:80}}>
                        <Image style={styles.headStyle} source={require('wumaiboxdemo/images/head.jpg')}/>
                        <Text style={styles.textStyle}>个人主页</Text>
                    </View>
                    <TouchableNativeFeedback
                        onPress={()=>{
                            this.props.navigation.navigate('Login',{key: '1234'})
                        }}>
                        <View style={{flexDirection:'row',height:50,width:50,alignSelf:'center',marginRight:30}} on>
                            <Text style={styles.textStyle}>登录</Text>
                            <Image style={{alignSelf:'center',width:20,height:20,}} source={require('wumaiboxdemo/images/next.png')}/>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.apart}></View>
                <View style={styles.style1}>
                    <View style={{flexDirection:'row',height:50,width:80}}>
                        <Image style={styles.iconStyle} source={require('wumaiboxdemo/images/myequipments.png')}/>
                        <Text style={styles.textStyle}>我的设备</Text>
                    </View>
                    <View style={{flexDirection:'row',height:50,width:50}}>
                        <Text style={{fontSize:18,alignSelf:'center',}}></Text>
                    </View>
                </View>
                <View style={styles.apart}></View>
                <View style={styles.style1}>
                    <View style={{flexDirection:'row',height:50,width:80}}>
                        <Image style={styles.iconStyle} source={require('wumaiboxdemo/images/setting.png')}/>
                        <Text style={styles.textStyle}>设置</Text>
                    </View>
                    <View style={{flexDirection:'row',height:50,width:50}}>
                        <Image style={{alignSelf:'center',width:20,height:20}} source={require('wumaiboxdemo/images/next.png')}/>
                    </View>
                </View>
                <View style={styles.apart}></View>
                <View style={styles.style1}>
                    <View style={{flexDirection:'row',height:50,width:100}}>
                        <Image style={styles.iconStyle} source={require('wumaiboxdemo/images/code.png')}/>
                        <Text style={styles.textStyle}>我的二维码</Text>
                    </View>
                    <View style={{flexDirection:'row',height:50,width:50}}>
                        <Image style={{alignSelf:'center',width:20,height:20}} source={require('wumaiboxdemo/images/next.png')}/>
                    </View>
                </View>
                <View style={styles.apart}></View>
                <View style={styles.style1}>
                    <View style={{flexDirection:'row',height:50,width:80}}>
                        <Image style={styles.iconStyle} source={require('wumaiboxdemo/images/update.png')}/>
                        <Text style={styles.textStyle}>版本更新</Text>
                    </View>
                    <View style={{flexDirection:'row',height:50,width:50}}>
                        <Image style={{alignSelf:'center',width:20,height:20}} source={require('wumaiboxdemo/images/next.png')}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor:'#e6e6e6',
        flexDirection:'column',
    },
    apart:{
        width:'100%',
        height:20,
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
    style1:{
        flexDirection:'row',
        backgroundColor:'#FFFFFF',
        width:'100%',
        borderColor:'#e6e6e6',
        alignItems:'stretch',
        justifyContent:'space-between'
    },
    iconStyle:{
        alignSelf:'center',
        height:30,
        width:30,
        marginLeft:5
        ,marginRight:10
    },
    headStyle:{
        alignSelf:'center',
        height:70,
        width:70,
        marginLeft:5,
        marginRight:10
    },
    textStyle:{
        fontSize:18,
        alignSelf:'center'
    }
});

