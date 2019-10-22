import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from './../data/dummy-data';
import CategoryGridTile from './../components/CategoryGridTile';


const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                onSelect={() => {
                    props.navigation.navigate("CategoryMeals", {
                        categoryId: itemData.item.id 
                    })
                }}
                color={itemData.item.color}
            />
        );
    }
    return (
        <FlatList 
            numColumns={2}  // used to render grid
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={renderGridItem}
        />
    );
}

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: "Categories",
        
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    
});

export default CategoriesScreen;