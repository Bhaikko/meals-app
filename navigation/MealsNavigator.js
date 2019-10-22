// used for navigation configurations
import React from 'react';
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';  // these navigator hold configurations for navigations
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from './../screens/CategoriesScreen';
import CategoryMealsScreen from './../screens/CategoryMealsScreen';
import MealDetailScreen from './../screens/MealDetailScreen';
import FavouriteScreen from './../screens/FavouritesScreen';
import FilterScreen from './../screens/FiltersScreen';

import Colors from './../constants/Colors';


const defaultStackNavOptions = {
    // applies to every Screen
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "" 
        },
        headerTintColor: Platform.OS === "android" ?  "white" : Colors.primaryColor
    }
}

// stack navigator is required for every navigations

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
}, defaultStackNavOptions);

const FavNavigator = createStackNavigator({
    Favorites: FavouriteScreen,
    MealDetail: MealDetailScreen
}, defaultStackNavOptions);

const tabScreenConfig = {
    // Better to use this longer format when using nested navigators
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons
                        name="ios-restaurant"
                        size={25}
                        color={tabInfo.tintColor}  
                    />
                );
            },
            tabBarColor: Colors.primaryColor    // only works for shifting: true
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: "Favourites!!!",
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons
                        name="ios-star"
                        size={25}
                        color={tabInfo.tintColor}
                    />
                );
            },
            tabBarColor: Colors.accentColor // decides the shifting color of bottomTab Navigator   
        }
    }
}

const MealsFavTabNavigator = Platform.OS === "android" 
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "white",
        shifting: true
    }) // works same as bottomTabNavigator
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            // Controls the navbar button configuration
            activeTintColor: Colors.accentColor,
        }
    });

export default createAppContainer(MealsFavTabNavigator);


