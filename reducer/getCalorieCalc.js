import {
    GET_CALORIE_CALCULATOR, 
    ADD_TOCALORIE_CALCULATOR
} from '../actions/types';
import {appDefaultReducer} from './defaultReducer';
const INITIAL_STATE = appDefaultReducer.getCalorieCalculator;

export default (state = INITIAL_STATE, action) => {
    let data = action.payload;
    switch (action.type) {
        case GET_CALORIE_CALCULATOR: {
            return {
                ...state,
                getCalorieCalculator: data,
            };
        } 
        case ADD_TOCALORIE_CALCULATOR: {

            //case 1 (update Exercise calories)
            if (data.FoodCalory === '0' && data.ExerciseCalory && data.ExerciseCalory !== '') {
                let ExerciseCalory = parseInt(data.ExerciseCalory);
                let stateExerciseCals = state.excerciseCalories;
                //case 1.1 (append to excerciseCalories array in redux store)
                if (ExerciseCalory > 0) {
                    //check for new day
                    if(stateExerciseCals.length !== 0 && stateExerciseCals[stateExerciseCals.length - 1].time > data.time){
                        state.excerciseCalories = [];
                    }
                    state.excerciseCalories.push({
                        time: data.time || '0:0',
                        calorie: ExerciseCalory
                    });
                    //case 1.2 (delete object from excerciseCalories array)
                } else {
                    stateExerciseCals.filter((obj, index) => {
                        if (obj.calorie === (ExerciseCalory * -1) && obj.time === data.time)
                            stateExerciseCals.splice(index, 1);
                    })
                }
                //case 2 (update Food calories)
            } else if (data.FoodCalory !== '') {
                let FoodCalory = parseInt(data.FoodCalory);
                let stateFoodCals = state.foodCalories;
                //case 2.1 (append to foodCalories array in redux store)
                if (FoodCalory > 0) {
                    //check for new day
                    if(stateFoodCals.length !== 0 && stateFoodCals[stateFoodCals.length - 1].time > data.time){
                        state.foodCalories = [];
                    }
                    state.foodCalories.push({
                        time: data.time || '0:0',
                        calorie: FoodCalory
                    });
                    //case 2.2 (delete object from foodCalories array)
                } else {
                    stateFoodCals.filter((obj, index) => {
                        if (obj.calorie === (FoodCalory * -1) && obj.time === data.time)
                            stateFoodCals.splice(index, 1);
                    })
                }
            }
            return {
                ...state,
                addToCalorieCalculator: data,
                excerciseCalories: [...state.excerciseCalories],
                foodCalories: [...state.foodCalories]
                // excerciseCalories: []
            };
        }               
        default:
            return state;
    }
}
