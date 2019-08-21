import {REGISTER_PEDOMETER, GET_PEDOMETER_FOR_DAY, GET_PEDOMETER_FOR_WEEK} from '../actions/types';
import {appDefaultReducer} from './defaultReducer';
const INITIAL_STATE = appDefaultReducer.pedometer;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTER_PEDOMETER: {
            return {
                ...state,
                pedometerData: action.payload,
            };
        }
        case GET_PEDOMETER_FOR_DAY: {
            return {
                ...state,
                pedometerData: action.payload,
            };
        }
        case GET_PEDOMETER_FOR_WEEK: {
            return {
                ...state,
                stepsOfWeek: action.payload,
            };
        }
        default:
            return state;
    }
}