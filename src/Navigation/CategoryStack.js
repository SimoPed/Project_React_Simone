import React from 'react';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {Categories} from "../Screens/Categories";
import CategoryQuestions from "../Screens/CategoryQuestions";

const Stack = createNativeStackNavigator();

export const CategoryStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{headerShown: false}}
                name='Categories'
                component={Categories}
            />
            <Stack.Screen

                options={{headerShown: false, gestureEnabled: false}}
                name='CategoryQuestions'
                component={CategoryQuestions}
            />
        </Stack.Navigator>
    );
}