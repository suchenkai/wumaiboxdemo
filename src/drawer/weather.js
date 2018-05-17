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
} from 'react-native';

export default class weather extends Component {

    static navigationOptions = ({navigation, screenProps}) => ({

        headerTitle: '天气',
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
                <Text style={{color: 'black'}}>天气</Text>
                {/*<View style={styles.arrows} pointerEvents="box-none">*/}
                    {/*<View style={[styles.arrowsContainer, this.props.arrowsContainerStyle]} pointerEvents="box-none">*/}
                        {/*<TouchableOpacity onPress={() => this.animateToPage(this._normalizePageNumber(currentPage - 1))} style={this.props.arrowstyle}><Text>{this.props.leftArrowText ? this.props.leftArrowText : 'Left'}</Text></TouchableOpacity>*/}
                        {/*<TouchableOpacity onPress={() => this.animateToPage(this._normalizePageNumber(currentPage + 1))} style={this.props.arrowstyle}><Text>{this.props.rightArrowText ? this.props.rightArrowText : 'Right'}</Text></TouchableOpacity>*/}
                    {/*</View>*/}
                {/*</View>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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

