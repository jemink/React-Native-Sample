import {
    SET_BOTTOM_TAB,
    SET_SAFE_AREA,
    SET_VISIBLE_TAB,
    UPDATE_PROGRESS_DATA,
    USER_ALL_DETAILS,
    USER_DETAILS,
    GET_NOTIFICATION
} from '../actions/types';
import {appDefaultReducer} from "../reducers/defaultReducer";
import { makeRequest } from '../api/apiCall';
import {setAsyncStorage, showAPICallError} from '../helper/appHelper';
import APIConstant from '../api/apiConstant';
import {apiErrorHandler} from "./errorHandle";

export const setSafeArea = (safeArea) => {
    return (dispatch, getState) => {
        return dispatch({
            type: SET_SAFE_AREA,
            payload: safeArea,
        });
    };
};

export const setVisibleTab = (visibleTab) => {
    return (dispatch, getState) => {
        return dispatch({
            type: SET_VISIBLE_TAB,
            payload: visibleTab,
        });
    };
};

export const setBottomTab = (activeBottomTabIndex) => {
    return (dispatch, getState) => {
        return dispatch({
            type: SET_BOTTOM_TAB,
            payload: activeBottomTabIndex,
        });
    };
};


export const setInitialData = () => {
    return (dispatch, getState) => {
        const initialAppData = appDefaultReducer.appReducer;
       dispatch({
            type: SET_BOTTOM_TAB,
            payload: initialAppData.bottomTab,
        });

        dispatch({
            type: SET_VISIBLE_TAB,
            payload: initialAppData.visibleTab
        });

        return true
    };
};

export const clearStore = () => {
    return (dispatch) => {
        const userData = appDefaultReducer.user;
        const progress = appDefaultReducer.progress;
        const appReducer = appDefaultReducer.appReducer;
        dispatch({
            type: UPDATE_PROGRESS_DATA,
            payload: progress.progressData

        });

        dispatch({
            type: USER_DETAILS,
            payload: userData.userDetail
        });

        dispatch({
            type: GET_NOTIFICATION,
            payload: appReducer.notification
        });
        return true
    }
};

export const getNotification = (data) => {
    return (dispatch, getState) => {
        return makeRequest(APIConstant.BASE_URL + APIConstant.GET_NOTIFICATION,'post', data)
            .then((response)=>{
                if(response && response.data && response.data.status === '200'){
                    dispatch({
                        type: GET_NOTIFICATION,
                        payload: response.data.result,
                    });
                    return Promise.resolve({
                        status: response.data.status,
                        message: 'success'
                    });
                }else{
                    if(response && response.data && response.data.Message){
                        return Promise.resolve({
                            status: response.data.status,
                            message: response.data.Message
                        });
                    }else{
                        return Promise.resolve({
                            status: response.data.status,
                            message: 'something went wrong'
                        });
                    }
                }
            })
            .catch((error)=>{
                return Promise.reject(error);
                // return dispatch(apiErrorHandler(error));
            })
    };
}