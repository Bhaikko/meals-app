import React from 'react';

import { CATEGORIES, MEALS } from './../data/dummy-data';

import MealList from './../components/MealList';

const CategorMealScreen = props => {

    const catId = props.navigation.getParam("categoryId"); 
   
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
    
    return (
        <MealList 
            listData={displayedMeals}
            navigation={props.navigation}
        />
    );
    
}

CategorMealScreen.navigationOptions = navData => {
    const catId = navData.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
    }
}


export default CategorMealScreen;