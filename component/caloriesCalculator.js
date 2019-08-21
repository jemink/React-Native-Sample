import React, {Component} from 'react';
import {
    StyleSheet, Image, Text, View, TouchableOpacity, ScrollView, ImageBackground,
    Modal, TextInput,Alert, TouchableWithoutFeedback, Keyboard, Platform
} from 'react-native';
import Constant from '../../helper/themeHelper';
import {tabBarWithBack} from '../../helper/appConstant';
import {AppButton, DayTab, BottomTab} from "../common";
import {style} from "../common/style";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helper/responsiveScreen';
import AnimatedCircularProgress from 'react-native-conical-gradient-progress';
import moment from "moment";
import {getAsyncStorage} from "../../helper/appHelper";
import I18n from 'react-native-i18n';

const {font, fontSize, color} = Constant;

class CaloriesCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            kcal_total: 0,
            food_cals_total: 0, //will be calculated from foodCalories array
            excercise_cals_total: 0, //will be calculated from excerciseCalories array
            new_kcal_total: '',
            kcal_left: 0,
            modalVisiblity: false,
            isEditCaloriesModal: false,
            addCaloriesModalText: '',
            tempCalsVal: '',
            token: '',
            customHeight: '0.01%',
            selectedDate: moment(new Date, 'YYYY-MM-DD').format('YYYY-MM-DD'),
            foodCalories: [],
            // foodCalories: [{time: '12:30', calorie: '100'}],
            excerciseCalories: [{time: '2:30', calorie: '100'}]
            // excerciseCalories: [{time: '2:30', calorie: '100'}]
        };
    }

    componentWillUnmount() {
        this.keyboardDidHideListener.remove();
    }

    componentDidMount() {
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this.onKeyboardHide,
        );
    }

    validateVal = (input) => {
        return input === null ? 0 : input;
    };

    componentWillReceiveProps = (nextProps) => {
        this.callGetCaloriesApi();
    };

    callGetCaloriesApi()
    {
        const {handleLocalAction, navigation, localActions, excerciseCalories, foodCalories} = this.props;
        const {token, selectedDate} = this.state;

        let json_obj =  {
            in_Token: token,
            in_Date: selectedDate
        };

        handleLocalAction({
            type: localActions.GET_CALORIE_CALCULATOR, data:json_obj
        }).then(res => {
            if (res) {
                if (res.status === '200') {
                    const result = res.data.result[0];

                    result.TotalCalory = this.validateVal(result.TotalCalory);
                    result.FoodCalory = this.validateVal(result.FoodCalory);
                    result.ExerciseCalory = this.validateVal(result.ExerciseCalory);

                    let kcal_left_val = parseInt(result.TotalCalory) -
                        parseInt(result.FoodCalory) +
                        parseInt(result.ExerciseCalory);

                    this.setState({
                        food_cals_total: result.FoodCalory,
                        excercise_cals_total: result.ExerciseCalory,
                        kcal_total: result.TotalCalory,
                        kcal_left: (kcal_left_val < 0) ? 0 : kcal_left_val,
                        excerciseCalories,
                        foodCalories
                    });
                }                
                else {
                    if (res.message !== "Token is expired or doesnt exists" || res.message !== "Token invalid!")                
                    {
                        alert(res.message);
                    }   
                }
            }
        }).catch(e => {
            console.log(e);
        });
    }
   
    onKeyboardHide = () => {
        this.setState({customHeight: '0.01%'});
        Keyboard.dismiss();
    };

    calculateFoodCalories = () => {
        let {foodCalories} = this.state;
        let food_cals_total = 0;

        foodCalories.forEach(function (obj, i) {
            food_cals_total += parseInt(obj.calorie)
        });

        this.setState({food_cals_total});
    };

    calculateExcerciseCalories = () => {
        let {excerciseCalories} = this.state;
        let excercise_cals_total = 0;

        excerciseCalories.forEach(function (obj) {
            excercise_cals_total -= parseInt(obj.calorie)
        });

        this.setState({excercise_cals_total});
    };

    componentWillMount = () => {
        getAsyncStorage('User').then((userData) => {
            let data = JSON.parse(userData);    

            this.setState({
                token: data.token
            });
            this.callGetCaloriesApi();
        }).catch((error) => {
            alert(JSON.stringify(error))
        });

        this.calculateFoodCalories();
        this.calculateExcerciseCalories();
    };

    progressBarData = (kcal_left, kcal_total) => {
        const {progressBarData, progressBarDataText} = styles;

        return (
            <View style={{...progressBarData}}>
                <Text style={{...progressBarDataText, fontSize: Constant.isIOS ? fontSize.small : fontSize.medium}}>
                    <Text style={{fontFamily: font.linateHeavy, fontSize: fontSize.xxlarge}}>
                        {`${parseInt(kcal_left).toFixed(0)}\n`}
                    </Text>
                    <Text>{`${I18n.t("caloriesCalculator.kcalLeft")}\n───────\n${I18n.t("caloriesCalculator.total")}:\n${parseInt(kcal_total).toFixed(0)} kcal`}</Text>
                </Text>
            </View>
        )
    };

    dataBox = (icon, txt, val, actionIcon) => {
        const {dataBox, dataBoxLeftView, dataBoxRightView, valText, centerIt} = styles;

        return (
            <View style={dataBox}>
                {/*Left side block, i.e Icon and data*/}
                <View style={dataBoxLeftView}>
                    <Image style={{height: hp('12%'), width: wp('12%')}}
                           resizeMode='contain'
                           source={{uri: icon}}
                    />
                    <View style={{marginLeft: wp('6%')}}>
                        <Text style={{fontSize: Constant.isIOS ? fontSize.xmini : fontSize.xsmall, fontFamily: font.robotoBold}}>{txt}:</Text>
                        <Text style={valText}>{parseInt(val).toFixed(0)}<Text style={{fontSize: fontSize.xsmall}}>{' kcal'}</Text></Text>
                    </View>
                </View>
                {/*Right side block, i.e Edit/Add button*/}
                <TouchableOpacity style={{...dataBoxRightView, ...centerIt}}
                                  activeOpacity={0.9}
                                  onPress={() => {
                                      actionIcon ? this.setState({modalVisiblity: true, isEditCaloriesModal: true})
                                          : this.setState({modalVisiblity: true, isEditCaloriesModal: false,addCaloriesModalText :txt})
                                  }}
                >
                    {/*<Image style={{height: hp('6.3%'), width: wp('6.3%')}}*/}
                    <Image style={{height: '50%', width: '35%'}}
                           resizeMode='contain'
                           source={{uri: actionIcon || 'add_calories_icon'}}
                    />
                    <Text style={{color: color.white, fontSize: Constant.isIOS ? fontSize.xmini : fontSize.mini}}>{actionIcon ? I18n.t("caloriesCalculator.edit") : I18n.t("caloriesCalculator.add")}</Text>
                </TouchableOpacity>
            </View>
        )
    };

    OnOkClick = () => {
        this.setState({modalVisiblity: false});
    };

    closeModal = () => {
        this.setState({modalVisiblity: false})
    };

    onTotalCaloriesValChange = (new_kcal_total) => {
        this.setState({new_kcal_total});
    };

    onNewCaloriesValChange = (tempCalsVal) => {
        this.setState({tempCalsVal});
    };

    submitTotalCaloriesVal = () => {

        const {handleLocalAction, localActions, userDetail} = this.props;
        let {new_kcal_total} = this.state;

        handleLocalAction({
            type: localActions.ADD_TOCALORIE_CALCULATOR, data: {
                in_Token: userDetail[0].Token,
                in_TotalCalory: parseInt(new_kcal_total),
                in_FoodCalory: 0,
                in_ExerciseCalory: 0
            }
        });

        this.state.new_kcal_total !== '' && this.setState({kcal_total: new_kcal_total, new_kcal_total: ''});
        this.closeModal();
    };

    adjustCustomHeight = () => {
      this.setState({customHeight: '30%'})
    };

    renderEditTotalCalories = () => {
        const {cardContainer, label, cardTitle, centerIt, textInput, inputContainer, textInputIcon, modalImage} = styles;
        const {new_kcal_total, customHeight} = this.state;

        return (
            <ScrollView contentContainerStyle={{...cardContainer, justifyContent: 'space-between'}}
                        scrollEnabled={true}
                        bounces={false}
                        showsVerticalScrollIndicator={false}
            >
                {/*Top part, close icon and Main icon*/}
                <View>
                    <TouchableOpacity onPress={()=>this.closeModal()} style={{width: wp('10%')}}>
                        <Image source={{uri: 'close'}}
                               style={{height: hp('5%')}}
                               resizeMode='contain'
                        />
                    </TouchableOpacity>
                    <View style={centerIt}>
                        <Image source={{uri: 'total_calories_day_big_icon'}} style={modalImage}
                               resizeMode='contain'/>
                        <Text style={cardTitle}>{I18n.t("caloriesCalculator.modalTitle")}</Text>
                    </View>
                </View>
                {/*Label and Text Input*/}
                <View>
                    <Text style={label}>{I18n.t("caloriesCalculator.totalCal")}</Text>
                    <View style={inputContainer}>
                        <Image resizeMode='contain'
                               source={{uri: 'total_calories_placeholder_icon'}}
                               style={textInputIcon}
                        />
                        <TextInput placeholder={I18n.t("caloriesCalculator.desiredCal")}
                                   placeholderTextColor={Constant.color.lightGray}
                                   keyboardType={'number-pad'}
                                   returnKeyType={'done'}
                                   style={textInput}
                                   value={new_kcal_total.toString()}
                                   onChangeText={this.onTotalCaloriesValChange}
                                   underlineColorAndroid={Constant.color.transparent}
                                   clearButtonMode={'while-editing'}
                                   maxLength={5}
                                   onFocus={this.adjustCustomHeight}
                        />
                    </View>
                    <View style={{height: Constant.isANDROID && hp(customHeight)}}/>
                </View>
                {/*Ok Button*/}
                <AppButton
                    containerStyle={{
                        backgroundColor: Constant.color.lightblue,
                        marginTop: '5%',
                    }}
                    title={'OK'}
                    onPress={() => this.submitTotalCaloriesVal()}
                />
            </ScrollView>
        )
    };

    pushCalories = (mappingArray, isFood) => {

        const {handleLocalAction, localActions, userDetail} = this.props;
        let {tempCalsVal} = this.state;
        let currentTime = moment().format('HH:mm');
        let cals = parseInt(tempCalsVal);

        handleLocalAction({
            type: localActions.ADD_TOCALORIE_CALCULATOR, data: {
                in_Token: userDetail[0].Token,
                in_FoodCalory: isFood ? cals : 0,
                in_ExerciseCalory: !isFood ? cals : 0,
                in_time: currentTime
            }
        });

        if (tempCalsVal !== '') {
            // mappingArray.push({time: currentTime, calorie: cals});
            this.setState({tempCalsVal: ''});
        }
        isFood ? this.calculateFoodCalories() : this.calculateExcerciseCalories();

    };

    removeCalories = (mappingArray, index, isFood) => {
        const {handleLocalAction, localActions, userDetail} = this.props;

        handleLocalAction({
            type: localActions.ADD_TOCALORIE_CALCULATOR, data: {
                in_Token: userDetail[0].Token,
                in_FoodCalory: isFood ? (mappingArray[index].calorie * -1) : 0,
                in_ExerciseCalory: !isFood ? (mappingArray[index].calorie * -1) : 0,
                in_time: mappingArray[index].time
            }
        });

        this.setState({mappingArray: mappingArray.splice(index, 1)});
        isFood ? this.calculateFoodCalories() : this.calculateExcerciseCalories();
    };

    renderAddCalories = () => {
        const {cardContainer, label, cardTitle, centerIt, textInput, inputContainer, textInputIcon, modalScrollViewSeperator,
            rowCenter, filterSubtitleText, addButton, modalImage, modalScrollView, modalDeleteIcon}= styles;
        const {addCaloriesModalText, tempCalsVal, foodCalories, excerciseCalories} = this.state;
        let isFood = false, emptyValsArray = [];
        (addCaloriesModalText === I18n.t("caloriesCalculator.foodCal")) && (isFood = true);

        let mappingArray = isFood ? foodCalories : excerciseCalories;
        let operator = isFood ? '+' : '-';
        const mappingArrayLength  = mappingArray.length;
        for (let i = 0; i < (6 - mappingArrayLength); i++) emptyValsArray.push(i.toString());

        return (
            <ScrollView contentContainerStyle={{...cardContainer, paddingHorizontal: 0}}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={true}
            >
                {/*View above scrollbar*/}
                <View style={{paddingHorizontal: wp('4%')}}>
                    {/*Close button*/}
                    <TouchableOpacity onPress={()=>this.closeModal()} style={{width: wp('10%')}}>
                        <Image source={{uri: 'close'}}
                               style={{height: hp('5%')}}
                               resizeMode='contain'
                        />
                    </TouchableOpacity>
                    {/*Main Icon and Heading*/}
                    <View style={{...centerIt}}>
                        <Image source={{uri: isFood ? 'food_calories_big_icon' : 'excercise_calories_big_icon'}} style={modalImage}
                               resizeMode='contain'/>
                        <Text style={cardTitle}>{addCaloriesModalText.toUpperCase()}</Text>
                    </View>
                    {/*Label*/}
                    <Text style={{...label, marginTop: '1%'}}>{I18n.t("caloriesCalculator.numberOfCal")}</Text>
                    {/*Text input and Add button*/}
                    <View style={{flexDirection: 'row', height: '19%'}}>
                        <View style={{...inputContainer, width: '83%'}}>
                            <Image resizeMode='contain'
                                   source={{uri: 'total_calories_placeholder_icon'}}
                                   style={textInputIcon}
                            />
                            <TextInput placeholder={I18n.t("caloriesCalculator.calConsume")}
                                       placeholderTextColor={Constant.color.lightGray}
                                       keyboardType={'number-pad'}
                                       returnKeyType={'done'}
                                       style={textInput}
                                       value={tempCalsVal.toString()}
                                       onChangeText={this.onNewCaloriesValChange}
                                       onSubmitEditing={()=>Keyboard.dismiss()}
                                       underlineColorAndroid={Constant.color.transparent}
                                       clearButtonMode={'while-editing'}
                                       maxLength={5}
                            />
                        </View>
                        {/*Add button*/}
                        <TouchableOpacity style={{...addButton, ...centerIt}}
                                          onPress={()=>this.pushCalories(mappingArray, isFood)}>
                            <Image resizeMode='contain'
                                   source={{uri: 'add_calorie_data_icon'}}
                                   style={{...textInputIcon, marginLeft: 0}}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={{backgroundColor: Constant.color.lightSky}}
                            contentContainerStyle={modalScrollView} showsVerticalScrollIndicator={false}>
                    {
                        mappingArrayLength > 0 &&
                        mappingArray.map((data, index) => {
                            return (
                                <View style={rowCenter} key={index}>
                                    <TouchableOpacity onPress={() => this.removeCalories(mappingArray, index, isFood)}>
                                        <Image source={{uri: 'clear_filters'}}
                                               style={modalDeleteIcon}
                                               resizeMode='contain'/>
                                    </TouchableOpacity>
                                    <Text style={[filterSubtitleText, {marginLeft: wp('2%')}]}
                                          numberOfLines={1}>
                                        {data.time && data.calorie && `${data.time} | `}
                                        <Text style={{color: color.black}}>{`${operator}${data.calorie} kcal`}</Text>
                                    </Text>
                                </View>
                            )
                        })
                    }
                    {
                        emptyValsArray.length > 0 &&
                            emptyValsArray.map((data, index) => {
                                return (
                                    <View style={rowCenter} key={index}>
                                        <Image source={{ uri: 'clear_filters' }} style={modalDeleteIcon} resizeMode='contain' />
                                        <Text style={[filterSubtitleText, { marginLeft: wp('2%') }]} numberOfLines={1}>
                                            {'.............................'}
                                        </Text>
                                    </View>
                                )
                        })
                    }
                    <View style={modalScrollViewSeperator} />
                </ScrollView>
                {/*Ok button*/}
                <AppButton
                    containerStyle={{
                        backgroundColor: Constant.color.lightblue,
                        marginTop: hp('3%'),
                        marginHorizontal: wp('4%')
                    }}
                    style={{paddingHorizontal: wp('4%')}}
                    title={'OK'}
                    onPress={()=>this.OnOkClick()}
                />
            </ScrollView>
        )
    };

// <View style={{height: 300, width: 200, backgroundColor: '#333'}}/>


    onSelectedDate = (data) => {
        var dateObj = new Date(data);
        var momentObj = moment(dateObj);
        var momentString = momentObj.format('YYYY-MM-DD');
        this.state.selectedDate = momentString;
        this.callGetCaloriesApi();
    };

    render() {
        const {container, header, subText, subView, centerIt, bottomDataBox, bottomDataBoxTexts} = styles;
        const {safeArea, navigation} = this.props;
        const {kcal_left, kcal_total, isEditCaloriesModal, excercise_cals_total, food_cals_total} = this.state;
    
        return (
            <View style={[container,{paddingBottom: hp('10%') + safeArea.bottom}]}>
                <ScrollView
                    contentContainerStyle={{paddingBottom: 35}}
                    style={{flex: 1}}
                    stickyHeaderIndices={[1]}
                    showsVerticalScrollIndicator={false}
                >
                    <ImageBackground style={{height: hp('38%'), ...centerIt}}
                                     source={{uri: 'background_calories_calculator'}}>
                        <View style={{transform: [{scaleX: -1}]}}>
                            <AnimatedCircularProgress
                                size={hp('31%')}
                                width={12}
                                fill={kcal_total !== 0 ?(kcal_total - kcal_left) * 100 / kcal_total : 0}
                                segments={70}
                                beginColor={color.darkBlue}
                                endColor={'#00BFFF'}
                                backgroundColor={'rgba(255, 255, 255, 1)'}
                                linecap="round"
                            />
                        </View>
                        {this.progressBarData(kcal_left, kcal_total)}
                    </ImageBackground>
                    
                    <DayTab
                        selectedActivityTab={0}
                        onSelectedDate={(data) => this.onSelectedDate(data)}
                      />

                    <View style={subView}>
                        <Text style={header}>{I18n.t("caloriesCalculator.caloryTitle")}</Text>
                        <Text style={subText}>{I18n.t("caloriesCalculator.subtitle")}</Text>
                        <View style={centerIt}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {this.dataBox('total_calories_day_small_icon', I18n.t("caloriesCalculator.calperday"), kcal_total, 'edit_calories_icon')}
                                {this.dataBox('food_calories_small_icon', I18n.t("caloriesCalculator.foodCal"), food_cals_total)}
                                {this.dataBox('excercise_calories_small_icon', I18n.t("caloriesCalculator.exerciseCal"), excercise_cals_total * -1)}
                            </ScrollView>
                            <View style={{...bottomDataBox, ...centerIt}}>
                                <Text style={bottomDataBoxTexts}>
                                    <Text style={{fontFamily: font.robotoBold, fontSize: fontSize.mini}}>{I18n.t("caloriesCalculator.leftCalForToday")}{'\n'}</Text>
                                    <Text style={{fontSize: fontSize.xxlarge}}>{`${parseInt(kcal_left).toFixed(0)}\n`}</Text>
                                    <Text style={{fontSize: fontSize.small}}>{'kcal'}</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.modalVisiblity}
                    >
                        <View style={{
                            ...style.modalView,
                            paddingHorizontal: wp('6.5%'),
                            // marginTop: (Constant.isIOS ? hp('19.3%') : hp('15.8%')) + safeArea.top,
                            marginTop:Platform.OS === 'ios' ? hp('17.95%') + safeArea.top : hp('18.5%'),
                            marginBottom: Constant.isIOS ? hp('10%') + safeArea.bottom : hp('3%'),
                            minHeight: hp('70%')
                        }}
                        >
                            {isEditCaloriesModal ? this.renderEditTotalCalories() : this.renderAddCalories()}
                        </View>
                    </Modal>
                </ScrollView>
                <BottomTab tabData={tabBarWithBack} navigation={navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.lightSky,
    },
    centerIt: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    subView: {
        flex: 1,
        paddingHorizontal: wp('8%')
    },
    header: {
        textAlign: 'center',
        fontSize: fontSize.xlarge,
        color: color.blue,
        fontFamily: font.linateBold,
        marginTop: hp('4%')
    },
    subText: {
        textAlign: 'center',
        fontSize: fontSize.xsmall,
        color: color.blue,
        fontFamily: font.robotoRegular,
        marginBottom: hp('2%')
    },
    dataBox: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: color.white,
        height: hp('12%'),
        width: wp('80%'),
        marginTop: hp('1.5%'),
        borderRadius: hp('2.5%'),
        shadowColor: '#D0E0F0',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 2
    },
    dataBoxLeftView: {
        width: wp('62%'),
        flexDirection: 'row',
        padding: wp('6%'),
        alignItems: 'center'
    },
    dataBoxRightView: {
        backgroundColor: color.blue,
        width: wp('18%'),
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    valText: {
        color: color.blue,
        fontSize: fontSize.xlarge,
        fontFamily: font.linateBold,
        marginTop: hp('0.3%')
    },
    bottomDataBox: {
        backgroundColor: color.blue,
        height: hp('15%'),
        width: wp('80%'),
        marginTop: hp('1.5%'),
        borderRadius: hp('2.5%'),
    },
    bottomDataBoxTexts: {
        color: color.white,
        textAlign: 'center',
        fontFamily: font.linateBold
    },
    progressBarData: {
        position: 'absolute',
        top: hp('0%'),
        width: wp('100%'),
        height: hp('37.5%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressBarDataText: {
        color: color.white,
        textAlign: 'center',
        paddingTop: hp('2'),
        fontFamily: font.linateBold
    },
    cardContainer: {
        flex: 1,
        backgroundColor: color.white,
        paddingHorizontal: wp('4%'),
        paddingVertical: hp('2%'),
        borderRadius: hp('2.5%')
    },
    cardTitle: {
        fontFamily: font.linateBold,
        fontSize: Constant.normalize(28),
        color: Constant.color.blue,
        textAlign: 'center'
    },
    label: {
        fontFamily: font.linateBold,
        fontSize: fontSize.xsmall,
    },
    textInput: {
        fontSize: Constant.fontSize.mini,
        fontFamily: Constant.font.robotoRegular,
        padding: hp('1%'),
        color: Constant.color.black,
        flex: 1,
    },
    inputContainer: {
        backgroundColor: Constant.color.lightSky,
        padding: hp('0.5%'),
        flexDirection: 'row',
        borderRadius: hp('1.2%'),
        alignItems: 'center'
    },
    textInputIcon: {
        height: hp('5.2%'),
        width: wp('7%'),
        marginLeft: wp('2%')
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%'
    },
    filterSubtitleText: {
        fontFamily: Constant.font.robotoRegular,
        fontSize: Constant.fontSize.xsmall,
        color: Constant.color.lightGray
    },
    addButton: {
        height: '100%',
        width: '15%',
        backgroundColor: Constant.color.blue,
        marginLeft: '2%',
        borderRadius: hp('1.5%')
    },
    modalImage: {
        height: hp('10%'),
        width: wp('17%'),
        marginBottom: hp('1%')
    },
    modalScrollView: {
        backgroundColor: Constant.color.lightSky,
        paddingVertical: '3%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    modalDeleteIcon: {
        height: hp('4%'),
        width: wp('4%'),
        marginLeft: wp('4%')
    },
    modalScrollViewSeperator: {
        width: 1,
        backgroundColor: Constant.color.white,
        position: 'absolute',
        top: 15,
        bottom: 15,
        left: '51%'
    }
});

export {CaloriesCalculator};
