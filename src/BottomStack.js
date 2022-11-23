import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeStack} from "./Navigation/HomeStack";
import Ionicons from "@expo/vector-icons/Ionicons";
import {CategoryStack} from "./Navigation/CategoryStack";
import {AwardStack} from "./Navigation/AwardStack";
import {View} from "react-native";
import Icon from "./icon/Icons";
import {getFocusedRouteNameFromRoute} from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export const BottomStack = () => {
    return(
        <Tab.Navigator screenOptions={{headerShown: false,
        tabBarStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 60,
            position: 'absolute',
            bottom: 16,
            right: 16,
            left: 16,
            paddingTop: 6,
            borderRadius: 20
        }
        }}>
            <Tab.Screen
                options={{
                    tabBarActiveTintColor: 'red',
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => <Ionicons name="copy-outline" size={24}/>,
                }}
                name='Categories'
                component={CategoryStack}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => <Ionicons name="home-outline" size={24}/>,
                }}
                name='HomePage'
                component={HomeStack}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => <Ionicons name="trophy-outline" size={24}/>,
                }}
                name='Awards'
                component={AwardStack}
            />
        </Tab.Navigator>
    );
}