import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import Constant from '../../helper/themeHelper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../helper/responsiveScreen';
import {LineChart, AbstractChart} from '../../helper/chart'

const LineChartCard = (props) => {

    const {labels, plottingDataSystolic, plottingDataDiastolic, plottingDataPulse} = props;

    return (
        <LineChart
        data={{
            labels,
            datasets: [
                {
                    data: plottingDataSystolic,
                    color: (opacity = 1) => `rgba(251, 171, 40, ${opacity})`
                },
                // {data: [50,90,70,110,100,150,130], color: (opacity = 1) => `rgba(75,0,130, ${opacity})` },
                {
                    data: plottingDataDiastolic,
                    color: (opacity = 1) => `rgba(86,37,165, ${opacity})`
                },
                {
                    data: plottingDataPulse,
                    color: (opacity = 1) => `rgba(86,166,13, ${opacity})`
                },                
            ]
        }}
        width={wp('95%')}
        height={230}      
        withDots={true}                      
        withShadow={false}
        withInnerLines={true} //change
        withOuterLines={false}
        adjustmentFactor={0.00039}
        chartConfig={{
            backgroundColor: '#e5f2ff',
            backgroundGradientFrom: '#e5f2ff',
            backgroundGradientTo: '#e5f2ff',   //change
            strokeWidth: 3,  //5
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 15, 55, ${opacity})`,
            style: {
                borderRadius: 18
            }
        }}
        style={{
            marginTop: hp('2.5%'),
            marginLeft: -wp('6%'),
            borderRadius: 1,
        }}
    />
    )
};
export { LineChartCard };