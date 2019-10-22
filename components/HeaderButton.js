import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from './../constants/Colors';

// THis is built such that the extra configuration is prevented required for header button
const CustomHeaderButton = props => {
    return (
        <HeaderButton 
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === "android" ? "white" : Colors.primaryColor}
        />
    );
}

export default CustomHeaderButton;