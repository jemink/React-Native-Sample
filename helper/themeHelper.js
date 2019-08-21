import { Platform, Dimensions, PixelRatio } from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const isIOS = (Platform.OS === 'ios');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 375;

export function normalize(size) {
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}
module.exports = {
    //API Constant356eae#2967AE
    color: {
        black: '#02152a',
        white: '#ffffff',
        button: "#00cb6f3",
        blue: "#054993",
        darkBlue: "#072F5F",
        navyblue: "#204993",
        skyblue: "#376ee3",
        lightblue: '#0cb6f3',
        lightSky:'#e5f2ff',
        facebook: "#3667b8",
        twitter: "#00a3f9",
        instragram: "#e50069",
        textInput: '#0a1d41',
        transparent: 'transparent',
        lightGray: '#b5c8dd',
        gray: '#808080',
        green: '#67b70a',
        red: '#dc3117',
        yellow: '#f8b833',
        darkYellow: '#FBAB28',
        violet: '#5625A5',
        darkGreen: '#56A60D',
        orange:'#f77b02'


    },
    font:{
        linateBold: isIOS && 'Linotte-Bold' || 'Linotte_Bold',
        linateHeavy: isIOS && 'Linotte-Heavy' || 'Linotte_Heavy',
        robotoRegular: isIOS && 'Roboto-Regular' || 'Roboto_Regular',
        robotoBold: isIOS && 'Roboto-Bold' || 'Roboto_Bold',
    },
    style:{
        container:{width:SCREEN_WIDTH*0.85, alignSelf:'center'}
    },
    screen: Dimensions.get('window'),
    isIOS: isIOS,
    isANDROID: Platform.OS === 'android',
    isiPAD: ((SCREEN_HEIGHT/SCREEN_WIDTH) < 1.6),

    screenHeight:  isIOS && SCREEN_HEIGHT || SCREEN_HEIGHT - 24,
    screenWidth:  SCREEN_WIDTH,
    fullScreenHeight:  SCREEN_HEIGHT,

    fontSize:{
        xxmini:normalize(8),
        xmini: normalize(10),
        mini: normalize(12),
        xsmall: normalize(14),
        small: normalize(15),
        medium: normalize(17),
        large: normalize(20),
        xlarge: normalize(30),
        xxlarge:normalize(36),
        xxxlarge: normalize(40)
    },
    normalize,

    shadowStyle:{
        shadowColor: '#D0E0F0',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 2,
    }
};