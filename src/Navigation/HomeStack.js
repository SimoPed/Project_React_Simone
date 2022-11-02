import React from 'react';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {HomePage} from "../Screens/HomePage";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name='HomePage'
                component={HomePage}
            />
        </Stack.Navigator>
    );
}