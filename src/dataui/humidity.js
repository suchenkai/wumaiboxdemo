import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Button
} from 'react-native';
import Picker from 'react-native-picker';
import Echarts from 'native-echarts';

export default class humidity extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            apple:[2, 4, 7, 2, 2, 7, 13, 16],
            organ: [6, 9, 9, 2, 8, 7, 17, 18],
        }
    }
    static navigationOptions = ({navigation, screenProps}) => ({

        headerTitle: '湿度',
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

    _createDateData() {
        let date = [];
        for(let i=2000;i<2040;i++){
            let month = [];
            for(let j = 1;j<13;j++){
                let day = [];
                if(j === 2){
                    for(let k=1;k<29;k++){
                        day.push(k+'日');
                    }
                    //Leap day for years that are divisible by 4, such as 2000, 2004
                    if(i%4 === 0){
                        day.push(29+'日');
                    }
                }
                else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
                    for(let k=1;k<32;k++){
                        day.push(k+'日');
                    }
                }
                else{
                    for(let k=1;k<31;k++){
                        day.push(k+'日');
                    }
                }
                let _month = {};
                _month[j+'月'] = day;
                month.push(_month);
            }
            let _date = {};
            _date[i+'年'] = month;
            date.push(_date);
        }
        return date;
    }
    _showDatePicker() {
        Picker.init({
            pickerData: this._createDateData(),
            pickerTitleText: '时间选择',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            // pickerFontColor: [255, 0 ,0, 1],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
                Alert.alert(pickedValue+""+pickedIndex);
            },
            onPickerCancel: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            },
            onPickerSelect: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            }
        });
        Picker.show();
    }




    render() {
        const option = {
            //点击某一个点的数据的时候，显示出悬浮窗
            tooltip : {
                trigger: 'axis'
            },
            //可以手动选择现实几个图标
            legend: {
                data:['苹果','橘子']
            },
            //各种表格
            toolbox: {
                //改变icon的布局朝向
                //orient: 'vertical',
                show : true,
                showTitle:true,
                feature : {
                    //show是否显示表格，readOnly是否只读
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        //折线图  柱形图    总数统计 分开平铺
                        type: ['line', 'bar','stack','tiled'],
                    },

                }
            },
            xAxis : [
                {
                    //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                    boundaryGap:true,
                    type : 'category',
                    name : '时间',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '销量(kg)'
                }
            ],
            //图形的颜色组
            color:['rgb(249,159,94)','rgb(67,205,126)'],
            //需要显示的图形名称，类型，以及数据设置
            series : [
                {
                    name:'苹果',
                    //默认显
                    type:'bar',
                    data:this.state.apple
                },
                {
                    name:'橘子',
                    type:'bar',
                    data:this.state.organ
                }
            ]
        };
        return (
            <View style={styles.container}>
                <View style={{borderWidth:1,borderRadius: 20, width:'95%',height:120,marginTop:10,marginLeft:10
                    ,marginRight:10}}>
                    <View style={{flexDirection:'row',marginTop:15}}>
                        <Text style={{marginLeft:15,fontSize:18}}>
                            一小时之前：
                        </Text>

                        <Text style={{alignSelf:'flex-end',fontSize:18,marginLeft:150}}>
                            15℃
                        </Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <Text style={{marginLeft:15,fontSize:18}}>
                            三小时之前：
                        </Text>

                        <Text style={{alignSelf:'flex-end',fontSize:18,marginLeft:150}}>
                            15℃
                        </Text>

                    </View>
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <Text style={{marginLeft:65,fontSize:18}}>
                            更早 ：
                        </Text>

                        <Text style={{alignSelf:'flex-end',fontSize:18,marginLeft:150}}>
                            15℃
                        </Text>

                    </View>
                </View>
                <View style={{height:250,width:320}}>
                    <Echarts option={option} height={250} width={'100%'}/>
                </View>
                <View style={{height:'100%',width:'100%' }}>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
                        <Text style={{fontSize:18,fontWeight: '500',fontcolor:'#000000'}}>开始时间</Text>
                        <View style={{marginLeft:20}}>
                            <TouchableOpacity onPress={this._showDatePicker.bind(this)}>
                                <Text style={{textDecorationStyle: 'dashed',fontSize:18,fontcolor:'#BBBBBB'}}>点击选择开始时间</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{height:2,backgroundColor:'#E5E5E5',marginLeft:30,marginRight:30,marginTop:10}}/>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
                        <Text style={{fontSize:18,fontWeight: '500',fontcolor:'black'}}>结束时间</Text>
                        <TouchableOpacity onPress={this._showDatePicker.bind(this)}>
                            <Text style={{textDecorationStyle: 'dashed',fontSize:18,marginLeft:20,fontcolor:'#BBBBBB'}}>点击选择结束时间</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:2,backgroundColor:'#E5E5E5',marginLeft:30,marginRight:30,marginTop:10}}/>
                    <View style={{justifyContent:'center',marginLeft:15,marginRight:15,marginTop:10}}>
                        <Button
                            title='查询'
                            style={{marginLeft:15,marginRight:15,width:200}}
                        ></Button>
                    </View>




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
