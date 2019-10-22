import React from 'react';
import { FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from './../components/HeaderButton';
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
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item 
                    title="Menu" 
                    iconName="ios-menu" 
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    }
}



export default CategoriesScreen;