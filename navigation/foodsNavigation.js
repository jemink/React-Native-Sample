import {createAppContainer, createStackNavigator} from 'react-navigation';
import { transitionConfig } from './subComponent/customTransition';

import Foods from '../screens/containers/foods';
import PrepareYourFood from '../screens/containers/prepareYourFood';
import VideoRecipe from '../screens/containers/videoRecipe';
import VideoRecipeDetail from '../screens/containers/videoRecipeDetail';
import RecipeBook from '../screens/containers/recipeBook';
import RecipeDetail from '../screens/containers/recipeDetail';
import CalorieTable from '../screens/containers/calorieTable';
import RecommendedFood from '../screens/containers/recommendedFood';
import NotRecommendedFood from '../screens/containers/notRecommendedFood';
import CalorieDetail from '../screens/containers/calorieDetail';

const FoodNavigator = createStackNavigator({
    Foods,
    PrepareYourFood,
    VideoRecipe,
    VideoRecipeDetail,
    RecipeBook,
    RecipeDetail,
    CalorieTable,
    RecommendedFood,
    NotRecommendedFood,
    CalorieDetail
}, {
    initialRouteName: 'Foods',
    headerMode: "none",
    transitionConfig,
});

export default createAppContainer(FoodNavigator);