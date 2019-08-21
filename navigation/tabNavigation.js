import React, {Component} from "react";
import {View} from 'react-native';
import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import {AppNavigator, Notification} from "../../src/screens/common";
import HomeTabBar from "../screens/containers/homeTabBar";
import {transitionConfig} from './subComponent/customTransition';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../helper/responsiveScreen';

import Monitoring from './monitoringNavigation';
import Foods from './foodsNavigation';
import Fitness from './fitnessNavigation';
import FreeTime from './freeTimeNavigation';
import Health from './healthNavigation';
import Constant from '../helper/themeHelper';
import Chat from './chatNavigation';

import { EventRegister } from 'react-native-event-listeners'
// import SideMenu from "../screens/components/home";
import SideMenu from 'react-native-side-menu';
import {Menu} from "../screens/common/menu";

const topbar = createMaterialTopTabNavigator({
    Monitoring,
    Foods,
    Fitness,
    Health,
    FreeTime,
    Chat
}, {
    mode: 'model',
    swipeEnabled: false,
    lazy: true,
    tabBarComponent: props => {
        return (
            <HomeTabBar currentTab={props.navigation.state.index} navigation={props.navigation}/>
        )
    },
    transitionConfig,
});

const Container = createAppContainer(topbar);

export default class initialNavigator extends Component {
    static router = topbar.router;

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            isOpenNotification: false,
        };
    }

    componentWillMount() {
        this.listener = EventRegister.addEventListener('bottomTabEvent', () => {
            this.setState({isOpen: false,  isOpenNotification: false,});
        })
    }

    componentWillUnmount() {
        EventRegister.removeEventListener(this.listener)
    }

    onPressMenu = (isOpen) => {
        if(this.state.isOpenNotification){
            this.setState({isOpenNotification: false});
        }
        this.setState({isOpen: !isOpen})
    };

    onMenuClose = (isOpen) => {
        this.setState({isOpen});
    };

    onPressNotification = () => {
        if(this.state.isOpen){
            this.setState({isOpen: false});
        }
        this.setState({isOpenNotification: !this.state.isOpenNotification});
    };

    render() {
        const menu = <Menu navigation={this.props.navigation} onItemAction={() => this.onMenuClose(false)}/>;
        return (
            <View style={{flex: 1}}>
                <AppNavigator onPressMenu={() => this.onPressMenu(this.state.isOpen)}
                              isMenuOpen={this.state.isOpen}
                              onPressNotification={this.onPressNotification}
                              isOpen={this.state.isOpenNotification}/>
                <View style={{flex: 1}}>
                    <SideMenu
                        menu={menu}
                        isOpen={this.state.isOpen}
                        menuPosition={'right'}
                        onChange={(isOpen)=>this.onMenuClose(isOpen)}
                    >
                        <Container navigation={this.props.navigation}/>
                    </SideMenu>
                </View>
                <Notification isOpen={this.state.isOpenNotification}/>
            </View>
        )
    }
};