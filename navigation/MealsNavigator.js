// used for navigation configurations

import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';  // these navigator hold configurations for navigations

import CategoriesScreen from './../screens/CategoriesScreen';
import CategoryMealsScreen from './../screens/CategoryMealsScreen';
import MealDetailScreen from './../screens/MealDetailScreen';
// import CategoriesScreen from './../screens/CategoriesScreen';
// import CategoriesScreen from './../screens/CategoriesScreen';

import Colors from './../constants/Colors';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
}, {
    // applies to every Screen
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "" 
        },
        headerTintColor: Platform.OS === "android" ?  "white" : Colors.primaryColor
    }
});

export default createAppContainer(MealsNavigator);


