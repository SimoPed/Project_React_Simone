import React, {useCallback, useEffect, useState} from 'react';
import {Card} from "../components/Card";
import {categories} from "../mocks/categories";
import {View, FlatList, Text, StyleSheet, SafeAreaView} from "react-native";
import {Inter_900Black, useFonts} from "@expo-google-fonts/inter";

export const Categories = ({navigation}) => {

    const [list, setList] = useState([]);

    useEffect(() => {
            setList(categories);
    },[])

    const onPress = useCallback(() => {
        navigation.navigate('CategoryQuestions')
    },[])

    const renderItem = useCallback(({item}) => {
        return(
        <Card
            category={item.category}
            id={item.id}
            image={item.image}
            onPress={onPress}
        />
        );
    },[])

    const ItemSeparatorComponent = useCallback(() => {
        return <View style={{height: 20}} />
    },[])

    return(
        <SafeAreaView style={{flex: 1, marginTop: 30}}>
            <View style={{alignItems: 'center'}}>
            <Text style={styles.title}>Choose the category</Text>
            </View>
            <FlatList
                data={list}
                renderItem={renderItem}
                ItemSeparatorComponent={ItemSeparatorComponent}
                contentContainerStyle={{paddingHorizontal: 16}}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        marginBottom: 20,
        fontFamily: 'Inter_900Black'
    }
});