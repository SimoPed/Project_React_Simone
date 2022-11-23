import React, {memo} from 'react';
import {Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useFonts, Inter_900Black} from '@expo-google-fonts/inter';

export const Card = memo(({id, category, image, onPress}) => {

    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <TouchableOpacity onPress={() => onPress()}>
                <View style={{borderRadius: 20, overflow: 'hidden', width: '100%'}}>
                    <ImageBackground
                        source={{uri: image}}
                        resizeMode={'cover'}
                        style={{height: 150}}
                    >
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <View style={{borderRadius: 20, marginTop: 15, backgroundColor: 'rgba(33, 22, 51, 0.5)',}}>
                            <Text style={styles.category}>{category.toUpperCase()}</Text>
                            </View>
                        </View>
                        <View style={{alignItems: 'center', height: '50%', justifyContent: 'flex-end'}}>
                            <View style={{
                                flexDirection: 'row',
                                borderRadius: 20,
                                backgroundColor: 'rgba(33, 22, 51, 0.5)',
                                paddingHorizontal: 5
                            }}>
                                <Text style={{color: 'white'}}>Reward </Text>
                                <Image source={{uri: 'https://www.iconshock.com/image/Diamond/Accounting/gold'}}
                                       resizeMode={'contain'}
                                       style={{height: 20, width: 20}}
                                />
                                <Text style={{color: 'white'}}> 2500</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    category: {
        textAlign: 'center',
        fontSize: 25,
        fontStyle: 'bold',
        fontFamily: 'Inter_900Black',
        overflow: 'hidden',
        paddingHorizontal: 20,
        color: 'white'

    },
})