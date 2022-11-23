import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Awards} from "../Screens/Awards";

const Stack = createNativeStackNavigator();

export const AwardStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name='Awards'
                component={Awards}
            />
        </Stack.Navigator>
    );
}