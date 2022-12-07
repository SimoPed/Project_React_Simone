import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeStack} from "./Navigation/HomeStack";
import Ionicons from "@expo/vector-icons/Ionicons";
import {CategoryStack} from "./Navigation/CategoryStack";
import {AwardStack} from "./Navigation/AwardStack";

const Tab = createBottomTabNavigator();

export const BottomStack = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                    position: 'absolute',
                    bottom: 15,
                    left: 15,
                    right: 15,
                    backgroundColor: '#ffffff',
                    borderRadius: 30,
                    paddingBottom: 5
            }
        }}>
            <Tab.Screen
                options={{
                    tabBarInactiveTintColor: 'green',
                    tabBarActiveTintColor: 'red',
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => <Ionicons name="home" size={24}
                                                         color={focused ? 'blue' : 'black'}/>,
                }}
                name='HomePageTab'
                component={HomeStack}
            />
            <Tab.Screen
                options={{
                    tabBarInactiveTintColor: 'green',
                    tabBarActiveTintColor: 'red',
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => <Ionicons name="copy" size={24}
                                                         color={focused ? 'blue' : 'black'}/>,
                }}
                name='CategoriesTab'
                component={CategoryStack}
            />
            <Tab.Screen
                options={{
                    tabBarInactiveTintColor: 'green',
                    tabBarActiveTintColor: 'red',
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => <Ionicons name="trophy" size={24}
                                                         color={focused ? 'blue' : 'black'}/>,
                }}
                name='AwardsTab'
                component={AwardStack}
            />
        </Tab.Navigator>
    );
}