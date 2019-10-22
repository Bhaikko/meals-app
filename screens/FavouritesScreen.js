import React from 'react';

import MealList from './../components/MealList';

import { MEALS } from './../data/dummy-data';

const FavouritesScreen = props => {

    const favourites = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");

    return (
        <MealList
            listData={favourites}
            navigation={props.navigation}
        />
    );
}

FavouritesScreen.navigationOptions = navData => {
    return {
        headerTitle: "Your Favourites"
    }
}


export default FavouritesScreen;