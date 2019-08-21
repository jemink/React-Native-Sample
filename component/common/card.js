import React, {Component} from 'react';
import {StyleSheet, ImageBackground, Text, View, Image, TouchableOpacity, Animated} from 'react-native';
import Constant from '../../helper/themeHelper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helper/responsiveScreen';

const Card = (props) => {
    const {container, topCard, bottomCard, cardText, subTitle} = styles;

    return (
        <TouchableOpacity style={{...container, ...props.style}}
                          onPress={() => props.onPress && props.onPress()}
                          activeOpacity={!props.onPress && 1 || 0.2}>
            <ImageBackground source={{uri: 'background', ...props.imageBackground}} imageStyle={{borderRadius: 15}}
                             style={{flex: 1}}>
                <View style={topCard}>
                    <Image source={{uri: props.image}}
                           style={{height: '100%', width: '100%', ...props.imgStyle}}
                           resizeMode={'contain'}/>
                </View>
                <View style={bottomCard}>
                    <Text style={{...cardText, ...props.titleStyle}}>{props.title}</Text>
                    {props.subtitle && <Text style={subTitle}>{props.subtitle}</Text>}
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: hp('3%'),
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.5,
        elevation: 2,
        borderRadius: 15
    },
    topCard: {
        backgroundColor: 'transparent',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: wp('4%'),
    },
    bottomCard: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: hp('1%'),
        backgroundColor: Constant.color.white,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    cardText: {
        fontFamily: Constant.font.linateBold,
        fontSize: Constant.fontSize.xlarge,
        color: Constant.color.blue
    },
    subTitle: {
        fontFamily: Constant.font.robotoRegular,
        fontSize: Constant.fontSize.mini,
        color: Constant.color.lightblue
    }
});
export {Card};