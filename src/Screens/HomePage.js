import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView} from "react-native";

export const HomePage = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground
                source={require('../img/backgroundHome.jpg')}
                resizeMode={'cover'}
                style={{flex: 1, alignItems: 'center'}}
            >
                <View style={styles.elementContainer}>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row',}}>
                    <View style={{flexDirection: 'row', marginLeft: 10}}>
                        <Image source={{uri: 'https://www.cheergeelong.com/favicon.png'}}
                               resizeMode={'contain'}
                               style={{height: '40%', width: '18%'}}
                        />
                        <View>
                            <TouchableOpacity
                                style={{
                                    height: '40%',
                                    backgroundColor: 'blue',
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <Text style={{
                                    color: 'white',
                                    textAlign: 'center',
                                    paddingHorizontal: 20
                                }}>Trivia{'\n'}Master</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                    <Image
                        source={{uri: 'https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/heart-suit_2665-fe0f.png'}}
                        resizeMode={'contain'}
                        style={{height: '40%', width: '20%'}}
                    />
                    <View>
                        <TouchableOpacity
                            style={{
                                height: '40%',
                                backgroundColor: 'blue',
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <Text style={{color: 'white', textAlign: 'center', paddingHorizontal: 20}}>Full</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    <View style={{flexDirection: 'row', marginRight: 10}}>
                    <Image source={{uri: 'https://www.iconshock.com/image/Diamond/Accounting/gold'}}
                           resizeMode={'contain'}
                           style={{height: '40%', width: '20%'}}
                    />
                    <View>
                        <TouchableOpacity
                            style={{
                                height: '40%',
                                backgroundColor: 'blue',
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Text style={{color: 'white', textAlign: 'center', paddingHorizontal: 20}}>470.000</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    <View style={{height: '40%', width: '40%', padding: 2}}>
                        <Image source={{uri: 'https://previews.123rf.com/images/giamportone/giamportone1711/giamportone171100824/90849935-gear-and-settings-icon-symbol-outline-vector.jpg'}}
                               resizeMode={'contain'}
                               style={{height: '40%', width: '50%'}}
                        />
                    </View>
                </View>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Play</Text>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    button: {
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'orange',
        width: '90%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 520
    },
    elementContainer: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        // justifyContent: 'space-between'
        // backgroundColor: '#CCFFFF'
    }
});

