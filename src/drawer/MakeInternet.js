import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    CheckBox,
    TouchableHighlight,
} from 'react-native';
export default class MakeInternet extends Component{

    static navigationOptions = ({navigation, screenProps}) => ({

        headerTitle: '配置网络',
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
                <View style={{width:'100%'}}>
                    <Text style={{fontSize:22,}}>当前网络的SSID:</Text>
                    <Text style={{fontSize:22,}}>请选择要配置的WiFi1</Text>
                </View>
                <View></View>
                <View style={styles.inputViewStyle}>
                    <View style={{width:'100%',height:30}}></View>
                    <TextInput style={styles.inputStyle} placeholder={'请输入WiFi密码'} underlineColorAndroid="transparent"/>
                    <View style={{width:'100%',height:30}}></View>
                    <TextInput style={styles.inputStyle} placeholder={'请输入WiFi名称'} underlineColorAndroid="transparent"/>
                    <View style={{width:'100%',height:30}}></View>
                    <TextInput style={styles.inputStyle} placeholder={'请输入WiFi密码'} underlineColorAndroid="transparent" />
                    <View style={{flexDirection:'row',alignSelf:'flex-start',width:'100%'}}>
                        <CheckBox /><Text style={{alignSelf:'center'}}>显示密码</Text>
                    </View>
                    <View style={{width:'100%',height:30}}></View>
                    <TouchableHighlight style={styles.button}>
                        <Text style={{alignSelf:'center',fontSize:20}}>确定</Text>
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
        justifyContent:'flex-start',
        alignItems:'center'
    },
    inputViewStyle:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:'70%',
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
        borderRadius:5,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
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
