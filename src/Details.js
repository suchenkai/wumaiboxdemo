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

export default class Details extends Component {

    static navigationOptions = ({navigation, screenProps}) => ({

        headerTitle: '首页',
        //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
        // headerBackTite: null,
        //顶部标题栏的样式
        headerStyle: styles.headerStyle,
        //顶部标题栏文字的样式
        headerTitleStyle: styles.headerTitleStyle,
    });


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.pageStyle}>
                    <ImageBackground
                        style={styles.img}
                        source={require('../images/test.png')}
                    >
                        <Text style={{color:'white',fontSize:60,fontWeight: 'bold', alignSelf: 'center',marginTop:60}}>47</Text>
                        <Text style={{color:'white',fontSize:10,fontWeight: 'bold', alignSelf: 'center',marginTop:5}}>空气状况：良</Text>
                        <Text style={{color:'white',fontSize:10,fontWeight: 'bold', alignSelf: 'center',marginTop:10}}>健康建议：极少数异常敏感人群应减少户外活动</Text>
                    </ImageBackground>
                </View>
                <View style={{flexDirection :'row',borderWidth:1,width:'100%'}}>
                    <Text style={{marginLeft:5}}>AQI:0[优]</Text>
                    <Text style={{marginLeft:170}}>主要污染物：pm2.5</Text>
                </View>
                <View style={{width:'100%',height: 120,backgroundColor:'#EDEDED',flexDirection:'column'}}>
                    <View style={{width:'100%',backgroundColor:'#EDEDED',flexDirection:'column'}}>
                        <Text>（温度为℃）（湿度为RH%）（pm2.5，pm10为ug/m³）</Text>

                    </View>

                    <View style={{flexDirection:'row',height:'80%',backgroundColor:'#EDEDED',marginLeft:1}}>
                        <TouchableNativeFeedback
                            activeOpacity={0.5}
                            onPress={()=>{
                                this.props.navigation.navigate('pmtw',{key: 'pmtw'})
                            }}
                            // onPress={()=> {
                            //     Alert.alert('提示','pm2.5',[
                            //         {text:'取消',onPress:()=>{
                            //             ToastAndroid.show('点击了取消',ToastAndroid.SHORT)},style:'cancel'},
                            //         {text:'确认',onPress:()=>{ToastAndroid.show('点击了确认',ToastAndroid.SHORT)}},
                            //     ])
                            // }}
                        >

                            <View style={{flexDirection:'column',width:'22%', margin:5,backgroundColor:'white',flexDirection:'column'}}>
                                <Text style={{alignSelf:'center',marginTop:15,fontSize:15}}>pm2.5</Text>
                                <View style={styles.ViewForTextStyle}>

                                    <Text style={{backgroundColor:'#8BC34A',alignSelf:'center', borderRadius: 30,
                                        width:50,height:30,textAlign:'center',justifyContent: 'center',}}>12</Text>
                                </View>


                                {/*<Button defaultValue={'12'} title='12' style={styles.button}></Button>*/}

                            </View>
                        </TouchableNativeFeedback>
                        {/*----------------------------------------------------------------------*/}
                        <TouchableNativeFeedback
                            activeOpacity={0.5}
                            onPress={()=>{
                                this.props.navigation.navigate('pmten',{key: 'pmten'})
                            }}
                            // onPress={()=> {
                            //     Alert.alert('提示','pm10',[
                            //         {text:'取消',onPress:()=>{
                            //             ToastAndroid.show('点击了取消',ToastAndroid.SHORT)},style:'cancel'},
                            //         {text:'确认',onPress:()=>{ToastAndroid.show('点击了确认',ToastAndroid.SHORT)}},
                            //     ])
                            // }}
                        >
                            <View style={{flexDirection:'column',width:'22%', margin:5,backgroundColor:'white',flexDirection:'column'}}>
                                <Text style={{alignSelf:'center',marginTop:15,fontSize:15}}>pm10</Text>
                                {/*<Button defaultValue={'12'} title='12' style={styles.button}></Button>*/}
                                <View style={styles.ViewForTextStyle}>

                                    <Text style={{backgroundColor:'#8BC34A',alignSelf:'center', borderRadius: 30,
                                        width:50,height:30,textAlign:'center',justifyContent: 'center',}}>12</Text>
                                </View>


                            </View>
                        </TouchableNativeFeedback>
                        {/*-----------------------------------------------------------------------*/}
                        <TouchableNativeFeedback
                            activeOpacity={0.5}
                            onPress={()=>{
                                this.props.navigation.navigate('temp',{key: 'temp'})
                            }}
                            // onPress={()=> {
                            //     Alert.alert('提示','温度',[
                            //         {text:'取消',onPress:()=>{
                            //             ToastAndroid.show('点击了取消',ToastAndroid.SHORT)},style:'cancel'},
                            //         {text:'确认',onPress:()=>{ToastAndroid.show('点击了确认',ToastAndroid.SHORT)}},
                            //     ])
                            // }}
                        >
                            <View style={{flexDirection:'column',width:'22%', margin:5,backgroundColor:'white',flexDirection:'column'}}>
                                <Text style={{alignSelf:'center',marginTop:15,fontSize:15}}>温度</Text>
                                {/*<Button defaultValue={'12'} title='12'style={styles.button}></Button>*/}
                                <View style={styles.ViewForTextStyle}>

                                    <Text style={{backgroundColor:'#8BC34A',alignSelf:'center', borderRadius: 30,
                                        width:50,height:30,textAlign:'center',justifyContent: 'center',}}>12</Text>
                                </View>


                            </View>
                        </TouchableNativeFeedback>
                        {/*-----------------------------------------------------------------------*/}
                        <TouchableNativeFeedback
                            activeOpacity={0.5}
                            onPress={()=>{
                                this.props.navigation.navigate('humidity',{key: 'humidity'})
                            }}
                            // onPress={()=> {
                            //     Alert.alert('提示','湿度',[
                            //         {text:'取消',onPress:()=>{
                            //             ToastAndroid.show('点击了取消',ToastAndroid.SHORT)},style:'cancel'},
                            //         {text:'确认',onPress:()=>{ToastAndroid.show('点击了确认',ToastAndroid.SHORT)}},
                            //     ])
                            // }}
                        >
                            <View style={{flexDirection:'column',width:'22%', margin:5,backgroundColor:'white',flexDirection:'column'}}>
                                <Text style={{alignSelf:'center',marginTop:15,fontSize:15}}>湿度</Text>
                                {/*<Button defaultValue={'12'} title='12' style={styles.button}></Button>*/}
                                <View style={styles.ViewForTextStyle}>

                                    <Text style={{backgroundColor:'#8BC34A',alignSelf:'center', borderRadius: 30,
                                        width:50,height:30,textAlign:'center',justifyContent: 'center',}}>12</Text>
                                </View>


                            </View>
                        </TouchableNativeFeedback>
                        {/*-----------------------------------------------------------------------*/}

                    </View>
                </View>
                <View
                    style={{height:340,width:'100%'}}
                >

                    <MapView
                        // Region={{width:100,height:100}}
                        //不是全屏不能显示
                        style={{height:230,width:'100%'}}

                        coordinate={{
                            latitude: 34.750923,
                            longitude: 113.699744,
                        }}
                        zoomLevel={12}
                        tilt={45}
                        showsIndoorMap
                        onPress={()=>{
                            this.props.navigation.navigate('pmmap',{key: '1234'})
                        }}
                    >
                        <Marker
                            active
                            image='point'
                            title='雾霾盒子点'
                            color='red'
                            description='没有数据'
                            coordinate={{

                                latitude: 34.750623,
                                longitude: 113.699744,
                            }}
                        />
                        <Marker
                            active
                            image='point'
                            title='雾霾盒子点'
                            color='red'
                            description='没有数据'
                            coordinate={{

                                latitude: 34.750750,
                                longitude: 113.699744,
                            }}
                        />
                        <Marker
                            active
                            image='point'
                            title='雾霾盒子点'
                            color='red'
                            description='没有数据'
                            coordinate={{

                                latitude: 34.750840,
                                longitude: 113.699744,
                            }}
                        />
                        <Marker
                            active
                            image='point'
                            title='雾霾盒子点'
                            color='red'
                            description='没有数据'
                            coordinate={{

                                latitude: 34.750130,
                                longitude: 113.699744,
                            }}
                        />

                    </MapView>
                </View>
                {/*<TouchableNativeFeedback*/}
                {/*activeOpacity={0.5}*/}
                {/*onPress={()=>{*/}
                {/*this.props.navigation.navigate('pmmap',{key: '1234'})*/}
                {/*}}*/}
                {/*>*/}
                {/*<View*/}
                    {/*style={{height:340,width:'100%'}}*/}
                {/*>*/}

                    {/*<MapView*/}
                        {/*// Region={{width:100,height:100}}*/}
                        {/*//不是全屏不能显示*/}
                        {/*style={{height:230,width:'100%'}}*/}

                        {/*coordinate={{*/}
                            {/*latitude: 34.750923,*/}
                            {/*longitude: 113.699744,*/}
                        {/*}}*/}
                        {/*zoomLevel={12}*/}
                        {/*tilt={45}*/}
                        {/*showsIndoorMap*/}
                        {/*onPress={()=>{*/}
                            {/*this.props.navigation.navigate('pmmap',{key: '1234'})*/}
                        {/*}}*/}
                    {/*>*/}
                        {/*<Marker*/}
                            {/*active*/}
                            {/*image='point'*/}
                            {/*title='雾霾盒子点'*/}
                            {/*color='red'*/}
                            {/*description='没有数据'*/}
                            {/*coordinate={{*/}

                                {/*latitude: 34.750623,*/}
                                {/*longitude: 113.699744,*/}
                            {/*}}*/}
                        {/*/>*/}
                        {/*<Marker*/}
                            {/*active*/}
                            {/*image='point'*/}
                            {/*title='雾霾盒子点'*/}
                            {/*color='red'*/}
                            {/*description='没有数据'*/}
                            {/*coordinate={{*/}

                                {/*latitude: 34.750750,*/}
                                {/*longitude: 113.699744,*/}
                            {/*}}*/}
                        {/*/>*/}
                        {/*<Marker*/}
                            {/*active*/}
                            {/*image='point'*/}
                            {/*title='雾霾盒子点'*/}
                            {/*color='red'*/}
                            {/*description='没有数据'*/}
                            {/*coordinate={{*/}

                                {/*latitude: 34.750840,*/}
                                {/*longitude: 113.699744,*/}
                            {/*}}*/}
                        {/*/>*/}
                        {/*<Marker*/}
                            {/*active*/}
                            {/*image='point'*/}
                            {/*title='雾霾盒子点'*/}
                            {/*color='red'*/}
                            {/*description='没有数据'*/}
                            {/*coordinate={{*/}

                                {/*latitude: 34.750130,*/}
                                {/*longitude: 113.699744,*/}
                            {/*}}*/}
                        {/*/>*/}

                    {/*</MapView>*/}
                {/*</View>*/}
                {/*</TouchableNativeFeedback>*/}
                {/*-----------------------------------------------------------------------*/}

                {/*<View*/}
                    {/*style={{height:300,backgroundColor:'black',width:'100%'}}*/}
                {/*>*/}

                    {/*<MapView*/}
                        {/*// Region={{width:100,height:100}}*/}
                        {/*//不是全屏不能显示*/}
                        {/*style={{height:200,width:'100%'}}*/}

                        {/*coordinate={{*/}
                            {/*latitude: 39.90980,*/}
                            {/*longitude: 116.37296,*/}
                        {/*}}*/}
                        {/*zoomLevel={18}*/}
                        {/*tilt={45}*/}
                        {/*showsIndoorMap*/}
                    {/*/>*/}
                {/*</View>*/}
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
