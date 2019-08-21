import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity, View,
} from "react-native";
import Constant from '../../helper/themeHelper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helper/responsiveScreen';

const AppButton = (props) => {
    const {btnOuter, btnText} = styles;
    const {title, onPress, extraStyle, containerStyle, textStyle, disabled} = props;
    return (
        <TouchableOpacity disabled={disabled} style={[btnOuter, containerStyle && containerStyle]}
                          onPress={onPress}>
            <Text style={[btnText, textStyle && textStyle]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    btnOuter: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: hp('1.5%'),
        backgroundColor: Constant.color.lightblue,
        borderRadius: 8,
        paddingTop: hp('2%')
    },
    btnText: {
        color: Constant.color.white,
        fontSize: Constant.fontSize.medium,
        fontFamily: Constant.font.linateHeavy
    }
});

AppButton.defautlProps = {
    disabled: false,
};

export {AppButton};
