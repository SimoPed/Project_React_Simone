import React from 'react';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {Categories} from "../Screens/Categories";
import CategoryQuestions from "../Screens/CategoryQuestions";

const Stack = createNativeStackNavigator();

export const CategoryStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name='Categories'
                component={Categories}
            />
            <Stack.Screen
                name='CategoryQuestions'
                component={CategoryQuestions}
            />
        </Stack.Navigator>
    );
}