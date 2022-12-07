import React from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Constants from 'expo-constants';
import CircularProgress from "react-native-circular-progress-indicator";
import {useFonts, Inter_900Black} from '@expo-google-fonts/inter';

export const Awards = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, paddingTop: Constants.statusBarHeight}}>
            <ImageBackground
                style={{flex: 1}}
                source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Flag_blue_white_5x3.svg/1200px-Flag_blue_white_5x3.svg.png'}}>
                <ScrollView>
                    <View>
                        <Text style={styles.title}>Your awards</Text>
                        <Text style={{marginTop: 10, fontSize: 16, color: 'white', marginLeft: 10}}>Always do
                            better!</Text>
                    </View>
                    <View
                        style={{flexDirection: 'row', alignItems: 'center', shadowColor: 'black', shadowOpacity: 0.4}}>
                        <ScrollView
                            horizontal={true}
                            contentContainerStyle={{alignItems: 'center'}}
                        >
                            <View style={{
                                width: '25%',
                                alignItems: 'center',
                                marginTop: 30,
                                backgroundColor: 'white',
                                borderRadius: 20,
                                marginRight: 20,
                                marginLeft: 25
                            }}>
                                <Text style={{marginBottom: 5, marginTop: 20}}>Level 1</Text>
                                <Text style={{
                                    marginBottom: 10,
                                    fontFamily: 'Inter_900Black',
                                    fontSize: 18
                                }}>Beginner</Text>
                                <CircularProgress
                                    radius={80}
                                    value={100}
                                    textColor={'white'}
                                    fontSize={15}
                                    valueSuffix={'%'}
                                    duration={3000}/>
                                <Text style={{marginTop: 10}}>Good job!</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 40,
                                    marginBottom: 20,
                                    marginRight: 20,
                                    marginLeft: 20
                                }}>
                                    <TouchableOpacity
                                        style={{
                                            borderRadius: 20,
                                            borderWidth: 1,
                                            borderColor: 'black',
                                            marginRight: 80
                                        }}>
                                        <Text style={{
                                            paddingTop: 10, paddingBottom: 10, paddingLeft: 25, paddingRight: 25
                                        }}>Details</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{backgroundColor: 'blue', borderRadius: 20}}
                                                      onPress={() => {
                                                          navigation.navigate('Categories')
                                                      }}>
                                        <Text style={{
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            paddingLeft: 25,
                                            paddingRight: 25,
                                            color: 'white'
                                        }}>Practice</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{
                                alignItems: 'center',
                                marginTop: 30,
                                backgroundColor: 'white',
                                borderRadius: 20,
                                marginRight: 20
                            }}>
                                <Text style={{marginBottom: 5, marginTop: 20}}>Level 2</Text>
                                <Text style={{
                                    marginBottom: 10,
                                    fontFamily: 'Inter_900Black',
                                    fontSize: 18
                                }}>Intermediate</Text>
                                <CircularProgress
                                    radius={80}
                                    value={42}
                                    textColor={'white'}
                                    fontSize={15}
                                    valueSuffix={'%'}
                                    duration={3000}/>
                                <Text style={{marginTop: 10}}>Accuracy</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 40,
                                    marginBottom: 20,
                                    marginRight: 20,
                                    marginLeft: 20
                                }}>
                                    <TouchableOpacity
                                        style={{
                                            borderRadius: 20,
                                            borderWidth: 1,
                                            borderColor: 'black',
                                            marginRight: 80
                                        }}>
                                        <Text style={{
                                            paddingTop: 10, paddingBottom: 10, paddingLeft: 25, paddingRight: 25
                                        }}>Details</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{backgroundColor: 'blue', borderRadius: 20}}
                                                      onPress={() => {
                                                          navigation.navigate('Categories')
                                                      }}>
                                        <Text style={{
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            paddingLeft: 25,
                                            paddingRight: 25,
                                            color: 'white'
                                        }}>Practice</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{
                                alignItems: 'center',
                                marginTop: 30,
                                backgroundColor: 'white',
                                borderRadius: 20,
                                marginRight: 20
                            }}>
                                <Text style={{marginBottom: 5, marginTop: 20}}>Level 3</Text>
                                <Text
                                    style={{marginBottom: 10, fontFamily: 'Inter_900Black', fontSize: 18}}>Expert</Text>
                                <CircularProgress
                                    radius={80}
                                    value={0}
                                    textColor={'white'}
                                    fontSize={15}
                                    valueSuffix={'%'}
                                    duration={3000}/>
                                <Text style={{marginTop: 10}}>You can do it!</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 40,
                                    marginBottom: 20,
                                    marginRight: 20,
                                    marginLeft: 20
                                }}>
                                    <TouchableOpacity
                                        style={{
                                            borderRadius: 20,
                                            borderWidth: 1,
                                            borderColor: 'black',
                                            marginRight: 80
                                        }}>
                                        <Text style={{
                                            paddingTop: 10, paddingBottom: 10, paddingLeft: 25, paddingRight: 25
                                        }}>Details</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{backgroundColor: 'blue', borderRadius: 20}}
                                                      onPress={() => {
                                                          navigation.navigate('Categories')
                                                      }}>
                                        <Text style={{
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            paddingLeft: 25,
                                            paddingRight: 25,
                                            color: 'white'
                                        }}>Practice</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{
                                alignItems: 'center',
                                marginTop: 30,
                                backgroundColor: 'white',
                                borderRadius: 20,
                                marginRight: 100
                            }}>
                                <Text style={{marginBottom: 5, marginTop: 20}}>Level 4</Text>
                                <Text style={{
                                    marginBottom: 10,
                                    fontFamily: 'Inter_900Black',
                                    fontSize: 18
                                }}>Champion</Text>
                                <CircularProgress
                                    radius={80}
                                    value={0}
                                    textColor={'white'}
                                    fontSize={15}
                                    valueSuffix={'%'}
                                    duration={3000}/>
                                <Text style={{marginTop: 10}}>You can do it!</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 40,
                                    marginBottom: 20,
                                    marginRight: 20,
                                    marginLeft: 20
                                }}>
                                    <TouchableOpacity
                                        style={{
                                            borderRadius: 20,
                                            borderWidth: 1,
                                            borderColor: 'black',
                                            marginRight: 80
                                        }}>
                                        <Text style={{
                                            paddingTop: 10, paddingBottom: 10, paddingLeft: 25, paddingRight: 25
                                        }}>Details</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{backgroundColor: 'blue', borderRadius: 20}}
                                                      onPress={() => {
                                                          navigation.navigate('Categories')
                                                      }}>
                                        <Text style={{
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            paddingLeft: 25,
                                            paddingRight: 25,
                                            color: 'white'
                                        }}>Practice</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={styles.friends}>
                        <Text style={{
                            marginLeft: 10,
                            marginTop: 10,
                            fontSize: 20,
                            fontFamily: 'Inter_900Black'
                        }}>Friends</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                            <Image
                                source={{uri: 'https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png'}}
                                resizeMode={'contain'}
                                style={{height: 50, width: 50, marginLeft: 10}}
                            />
                            <View>
                                <Text style={{marginLeft: 10}}>William Lingard</Text>
                                <Text style={{marginLeft: 10, marginTop: 5, opacity: 0.5, fontSize: 12}}>325
                                    points</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/194/194826.png'}}
                                   resizeMode={'contain'}
                                   style={{height: 50, width: 50, marginLeft: 10}}
                            />
                            <View>
                                <Text style={{marginLeft: 10}}>Maren Workman</Text>
                                <Text style={{marginLeft: 10, marginTop: 5, opacity: 0.5, fontSize: 12}}>124
                                    points</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                            <Image
                                source={{uri: 'https://kuttingkorner.co.uk/wp-content/uploads/2021/06/Sian-Walmsley_new-150x150.png'}}
                                resizeMode={'contain'}
                                style={{height: 50, width: 50, marginLeft: 10}}
                            />
                            <View>
                                <Text style={{marginLeft: 10}}>Manuela Rossi</Text>
                                <Text style={{marginLeft: 10, marginTop: 5, opacity: 0.5, fontSize: 12}}>437
                                    points</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/146/146035.png'}}
                                   resizeMode={'contain'}
                                   style={{height: 50, width: 50, marginLeft: 10}}
                            />
                            <View>
                                <Text style={{marginLeft: 10}}>Brandon Matrovs</Text>
                                <Text style={{marginLeft: 10, marginTop: 5, opacity: 0.5, fontSize: 12}}>258
                                    points</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontFamily: 'Inter_900Black',
        color: 'white',
        marginLeft: 10
    },
    friends: {
        backgroundColor: 'rgba(33, 22, 51, 0.2)',
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20
    }
});