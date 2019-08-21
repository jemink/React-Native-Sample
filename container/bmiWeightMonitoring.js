import {connect} from "react-redux";
import {getWeightForDay, getWeightForWeek, getWeightForMonth} from "../../actions/BMI";
import {BmiWeightMonitoring} from "../components/bmiWeightMonitoring";

const handleLocalAction = (dispatch, action, navigation) => {
    const {type} = action;
    switch (type) {
        case localActions.GET_WEIGHT_FORDAY:
            return dispatch(getWeightForDay(action.data));
        case localActions.GET_WEIGHT_FORWEEK:
            return dispatch(getWeightForWeek(action.data));
        case localActions.GET_WEIGHT_FORMONTH:
            return dispatch(getWeightForMonth(action.data));
    }
};

export const localActions = {
    GET_WEIGHT_FORDAY: 'GET_WEIGHT_FORDAY',
    GET_WEIGHT_FORWEEK: 'GET_WEIGHT_FORWEEK',
    GET_WEIGHT_FORMONTH: 'GET_WEIGHT_FORMONTH'
};


const mapStateToProps = (state) => {
    const {userDetail} = state.user;
    const {safeArea} = state.appReducer;
    return {
        safeArea,
        userDetail,
        localActions
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        handleLocalAction: (actionType, navigation) => handleLocalAction(dispatch, actionType, navigation)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BmiWeightMonitoring);

