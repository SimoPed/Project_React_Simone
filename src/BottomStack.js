import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeStack} from "./Navigation/HomeStack";
import Ionicons from "@expo/vector-icons/Ionicons";
import {CategoryStack} from "./Navigation/CategoryStack";
import {AwardStack} from "./Navigation/AwardStack";

const Tab = createBottomTabNavigator();

export const BottomStack = () => {
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                options={{
                    title: 'Categories',
                    tabBarIcon: ({focused}) => <Ionicons name="copy-outline" size={24}/>,
                }}
                name='Categories'
                component={CategoryStack}
            />
            <Tab.Screen
                options={{
                    title: 'Home',
                    tabBarIcon: ({focused}) => <Ionicons name="home-outline" size={24}/>,
                }}
                name='HomePage'
                component={HomeStack}
            />
            <Tab.Screen
                options={{
                    title: 'Awards',
                    tabBarIcon: ({focused}) => <Ionicons name="trophy-outline" size={24}/>,
                }}
                name='Awards'
                component={AwardStack}
            />
        </Tab.Navigator>
    );
}