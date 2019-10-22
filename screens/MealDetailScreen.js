import React from 'react';
import { Platform } from 'react-native';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from './../data/dummy-data';
import HeaderButton from './../components/HeaderButton';


const MealDetailScreen = props => {

    const mealId = props.navigation.getParam("mealId");
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen} >
            <Text>{selectedMeal.title}</Text>
        </View>
    );
}

MealDetailScreen.navigationOptions = navData => {

    const mealId = navData.navigation.getParam("mealId");
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: selectedMeal.title,
        // JSX can be written here to render content
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Favourites" iconName="ios-star" onPress={() => {
                    console.log("Mark as favourite");
                }} />
            </HeaderButtons>
        )
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default MealDetailScreen;


// cgmm 3 practical
// cns last wala
// DS file