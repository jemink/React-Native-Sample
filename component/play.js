import React, { Component } from 'react';
import { StyleSheet, WebView, View, Image, TouchableOpacity, Text } from 'react-native';
import Constant from '../../helper/themeHelper';
import { AppButton, AppNavigator, BottomTab } from "../common";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../helper/responsiveScreen';
import { tabBarWithBack } from "../../helper/appConstant";
import { getAsyncStorage } from "../../helper/appHelper";

class Play extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token:''
        }
    }

    componentWillMount() {
        getAsyncStorage('User').then((userData) => {
            let data = JSON.parse(userData);
            this.setState({
                token: data.token
            })
        }).catch((error) => {
            alert(JSON.stringify(error))
        });
    }
    render() {
        const {
            container
        } = styles;
        const { safeArea, navigation } = this.props; return (
            <View style={container}>
                <WebView
                    source={{ uri: 'http://34.251.153.156/luzy_game/index.html?usertoken=' + this.state.token }}
                    style={{ height:hp('85%'), width:wp('100%'),marginTop:Constant.isANDROID && hp('3%') }}
                />
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{flexDirection:'row',justifyContent:'center'}}>
                <Image source={{uri: 'ic_exit_game'}}
                           style={{height: hp('10%'), width: wp('25%')}}
                           resizeMode={'contain'}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constant.color.lightSky,
    },
});

export { Play }