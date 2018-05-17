import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    CheckBox,
    TouchableHighlight
} from 'react-native';
export default class Login extends Component{
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

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.main}>
                    <TextInput style={styles.inputStyle} placeholder={'请输入账号'} underlineColorAndroid="transparent"/>
                    <View style={{width:'100%',height:30}}></View>
                    <TextInput style={styles.inputStyle} placeholder={'请输入密码'} underlineColorAndroid="transparent"/>
                    <View style={{width:'100%',height:30}}></View>
                    <TouchableHighlight style={styles.button}>
                        <Text style={{alignSelf:'center',fontSize:20}}>登录</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    main:{
        width:'70%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    inputStyle:{
        width:'100%',
        borderWidth:1,
        borderRadius:5,
        borderColor:'#dbdbdb',
    },
    button:{
        width:'50%',
        height:40,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        backgroundColor:'#2255FF'
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