import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from './../data/dummy-data';

import MealItem from './../components/MealItem';

const CategorMealScreen = props => {

    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                affordability={itemData.item.affordability}
                complexity={itemData.item.complexity}
                image={itemData.item.imageUrl}
                onSelect={() => {
                    props.navigation.navigate("MealDetail", {
                        mealId: itemData.item.id
                    });
                }}
            />
        );
    }


    const catId = props.navigation.getParam("categoryId"); 
   
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
    

    return (
        <View style={styles.screen}>
            <FlatList 
                data={displayedMeals}
                keyExtractor={item => item.id}
                renderItem={renderMealItem}
                style={{width: "90%"}}
            />
        </View>
    );
}

CategorMealScreen.navigationOptions = navData => {
    const catId = navData.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default CategorMealScreen;