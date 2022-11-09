import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import {useFonts, Inter_900Black} from '@expo-google-fonts/inter';

export const Awards = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground style={{flex: 1}}
                source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Flag_blue_white_5x3.svg/1200px-Flag_blue_white_5x3.svg.png'}}>
                <View>
                    <Text style={styles.title}>Your awards</Text>
                    <Text style={{marginTop: 10, fontSize: 16}}>Always do better!</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', shadowColor: 'black', shadowOpacity: 0.4}}>
                    <ScrollView
                        horizontal={true}
                        pagingEnabled={true}
                        centerContent={true}
                        contentContainerStyle={{alignItems: 'center'}}
                        contentOffset={{x: -20, y: 0}}
                    >
                        <View style={{width: '26%', alignItems: 'center', marginTop: 30, backgroundColor: 'white', borderRadius: 20, marginRight: 20}}>
                            <Text style={{marginBottom: 5, marginTop: 20}}>Level 2</Text>
                            <Text style={{marginBottom: 10, fontFamily: 'Inter_900Black', fontSize: 18}}>Intermediate</Text>
                            <CircularProgress
                                radius={80}
                                value={42}
                                textColor={'white'}
                                fontSize={15}
                                valueSuffix={'%'}
                                duration={3000}/>
                            <Text style={{marginTop: 10}}>Accuracy</Text>
                            <View style={{flexDirection: 'row', marginTop: 40, marginBottom: 20, marginRight: 20, marginLeft: 20}}>
                                <TouchableOpacity
                                    style={{borderRadius: 20, borderWidth: 1, borderColor: 'black', marginRight: 80}}>
                                    <Text style={{
                                        paddingTop: 10, paddingBottom: 10, paddingLeft: 25, paddingRight: 25
                                    }}>Details</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor: 'blue', borderRadius: 20}}>
                                    <Text style={{
                                        paddingTop: 10, paddingBottom: 10, paddingLeft: 25, paddingRight: 25, color: 'white'
                                    }}>Practice</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{alignItems: 'center', marginTop: 30, backgroundColor: 'white', borderRadius: 20, marginRight: 20}}>
                            <Text style={{marginBottom: 5, marginTop: 20}}>Level 2</Text>
                            <Text style={{marginBottom: 10, fontFamily: 'Inter_900Black', fontSize: 18}}>Intermediate</Text>
                            <CircularProgress
                                radius={80}
                                value={42}
                                textColor={'white'}
                                fontSize={15}
                                valueSuffix={'%'}
                                duration={3000}/>
                            <Text style={{marginTop: 10}}>Accuracy</Text>
                            <View style={{flexDirection: 'row', marginTop: 40, marginBottom: 20, marginRight: 20, marginLeft: 20}}>
                                <TouchableOpacity
                                    style={{borderRadius: 20, borderWidth: 1, borderColor: 'black', marginRight: 80}}>
                                    <Text style={{
                                        paddingTop: 10, paddingBottom: 10, paddingLeft: 25, paddingRight: 25
                                    }}>Details</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor: 'blue', borderRadius: 20}}>
                                    <Text style={{
                                        paddingTop: 10, paddingBottom: 10, paddingLeft: 25, paddingRight: 25, color: 'white'
                                    }}>Practice</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{alignItems: 'center', marginTop: 30, backgroundColor: 'white', borderRadius: 20, marginRight: 20}}>
                            <Text style={{marginBottom: 5, marginTop: 20}}>Level 2</Text>
                            <Text style={{marginBottom: 10, fontFamily: 'Inter_900Black', fontSize: 18}}>Intermediate</Text>
                            <CircularProgress
                                radius={80}
                                value={42}
                                textColor={'white'}
                                fontSize={15}
                                valueSuffix={'%'}
                                duration={3000}/>
                            <Text style={{marginTop: 10}}>Accuracy</Text>
                            <View style={{flexDirection: 'row', marginTop: 40, marginBottom: 20, marginRight: 20, marginLeft: 20}}>
                                <TouchableOpacity
                                    style={{borderRadius: 20, borderWidth: 1, borderColor: 'black', marginRight: 80}}>
                                    <Text style={{
                                        paddingTop: 10, paddingBottom: 10, paddingLeft: 25, paddingRight: 25
                                    }}>Details</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor: 'blue', borderRadius: 20}}>
                                    <Text style={{
                                        paddingTop: 10, paddingBottom: 10, paddingLeft: 25, paddingRight: 25, color: 'white'
                                    }}>Practice</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{alignItems: 'center', marginTop: 30, backgroundColor: 'white', borderRadius: 20}}>
                            <Text style={{marginBottom: 5, marginTop: 20}}>Level 2</Text>
                            <Text style={{marginBottom: 10, fontFamily: 'Inter_900Black', fontSize: 18}}>Intermediate</Text>
                            <CircularProgress
                                radius={80}
                                value={42}
                                textColor={'white'}
                                fontSize={15}
                                valueSuffix={'%'}
                                duration={3000}/>
                            <Text style={{marginTop: 10}}>Accuracy</Text>
                            <View style={{flexDirection: 'row', marginTop: 40, marginBottom: 20, marginRight: 20, marginLeft: 20}}>
                                <TouchableOpacity
                                    style={{borderRadius: 20, borderWidth: 1, borderColor: 'black', marginRight: 80}}>
                                    <Text style={{
                                        paddingTop: 10, paddingBottom: 10, paddingLeft: 25, paddingRight: 25
                                    }}>Details</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor: 'blue', borderRadius: 20}}>
                                    <Text style={{
                                        paddingTop: 10, paddingBottom: 10, paddingLeft: 25, paddingRight: 25, color: 'white'
                                    }}>Practice</Text>
                                </TouchableOpacity>
                            </View>
                        </View>



                    </ScrollView>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontFamily: 'Inter_900Black'
    }
});