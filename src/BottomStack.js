import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeStack} from "./Navigation/HomeStack";
import Ionicons from "@expo/vector-icons/Ionicons";
import {CategoryStack} from "./Navigation/CategoryStack";
import {AwardStack} from "./Navigation/AwardStack";
import {View} from "react-native";
import Icon from "./icon/Icons";

const Tab = createBottomTabNavigator();

const TabButton = ({item}) => {
    return(
        <View>
        </View>
    )
}

export const BottomStack = () => {
    return(
        <Tab.Navigator screenOptions={{headerShown: false,
        tabBarStyle: {
            height: 60,
            position: 'absolute',
            bottom: 16,
            right: 16,
            left: 16,
            borderRadius: 20
        }
        }}>
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    // title: 'Categories',
                    tabBarIcon: ({focused}) => <Ionicons name="copy-outline" size={24}/>,
                }}
                name='Categories'
                component={CategoryStack}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    // title: 'Home',
                    tabBarIcon: ({focused}) => <Ionicons name="home-outline" size={24}/>,
                    // tabBarIcon: ({color, focused}) => (
                    //     <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={color}/>
                    // ),
                    // tabBarButton: (props) => <TabButton {...props} item={item}/>
                }}
                name='HomePage'
                component={HomeStack}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    // title: 'Awards',
                    tabBarIcon: ({focused}) => <Ionicons name="trophy-outline" size={24}/>,
                }}
                name='Awards'
                component={AwardStack}
            />
        </Tab.Navigator>
    );
}