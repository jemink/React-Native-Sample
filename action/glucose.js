import { REGISTER_GLUCOSE_LEVEL } from '../actions/types';
import { makeRequest } from '../api/apiCall';
import {setAsyncStorage, showAPICallError} from '../helper/appHelper';
import APIConstant from '../api/apiConstant';
import {apiErrorHandler} from "./errorHandle";
import I18n from 'react-native-i18n';

export const registerGlucoseLevel = (glucoseData) => {
    return (dispatch, getState) => {
        return makeRequest(APIConstant.BASE_URL + APIConstant.REGISTER_GLUCOSE_LEVEL,'post',glucoseData)
            .then((response)=>{    
                         
                if(response && response.data && response.data.status === '200'){
                    dispatch({
                        type: REGISTER_GLUCOSE_LEVEL,
                        payload: response.data.result,
                    });
                    return Promise.resolve({
                        status: response.data.status,
                        message: I18n.t("success.message")
                    });
                }else{
                    if(response && response.data.Message){
                        return Promise.resolve({
                            status:response.data.status,
                            message:response.data.Message
                        });
                    }else{
                        return Promise.resolve({
                            status:response.data.status,
                            message:'Something went wrong'
                        });
                    }
                }
            })
            .catch((error)=>{
                // return Promise.reject(error);
                return dispatch(apiErrorHandler(error));
            })
    };
};