import React from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";

export const App = ({navigation}) => {

    navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('./img/background.png')}
                             resizeMode='cover'
                             style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.text}>Trivia</Text>
                    <Text style={{fontSize: 20, marginTop: 150}}>Become a Champion!</Text>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            navigation.navigate('HomePage')
                        }}
                    >
                        <Text style={{fontSize: 20, fontStyle: 'italic'}}>Let's Start</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontStyle: 'italic',
        fontSize: 60
    },
    button: {
        borderRadius: 20,
        backgroundColor: 'orange',
        paddingLeft: 50,
        paddingRight: 50,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginTop: 50
    }
});
