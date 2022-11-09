import React, {useCallback} from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    SafeAreaView,
    ScrollView,
} from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import {useFonts, Inter_900Black} from '@expo-google-fonts/inter';

export const HomePage = ({navigation}) => {

    // const onPress = useCallback(() => {
    //     navigation.navigate('Awards')
    // }, [])

    return (
        <SafeAreaView style={{flex: 1, marginLeft: 15, marginRight: 15}}>
            <ScrollView>
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 16, fontStyle: 'italic'}}>Hello George</Text>
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                            <TouchableOpacity
                                // onPress={onPress}
                                >
                                <Image source={{uri: 'https://wp-webhooks.com/storage/2021/07/icon-forminator.png'}}
                                       resizeMode={'contain'}
                                       style={{height: 50, width: 50, marginRight: 10}}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.title}>Ready to learn?</Text>
                    <Text style={{marginTop: 15, fontSize: 16}}>Start from where you left</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <ScrollView horizontal={true}>
                        <View style={styles.cyanCard}>
                            <ImageBackground
                                source={{uri: 'https://assets.dicebreaker.com/clans-of-caledonia-board-game-gameplay.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/clans-of-caledonia-board-game-gameplay.jpg'}}
                                style={{height: '100%', justifyContent: 'flex-end'}}>
                                <View style={styles.percent}>
                                    <CircularProgress
                                        radius={20}
                                        value={42}
                                        textColor={'white'}
                                        fontSize={15}
                                        valueSuffix={'%'}
                                        duration={3000}/>
                                </View>
                                <View
                                    style={{backgroundColor: 'rgba(33, 22, 51, 0.5)', borderRadius: 20, height: '40%'}}>
                                    <Text style={styles.nameCard}>Board Games</Text>
                                    <Text style={{marginLeft: 10, color: 'white', fontStyle: 'italic'}}>Chapter 16:
                                        Risiko</Text>
                                    <View style={{alignItems: 'flex-start', marginLeft: 10, marginTop: 15}}>
                                        <TouchableOpacity style={{
                                            borderRadius: 20,
                                            backgroundColor: 'white',
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={{
                                                marginLeft: 10,
                                                marginRight: 10,
                                                paddingLeft: 10,
                                                paddingBottom: 10,
                                                paddingTop: 10
                                            }}>Resume</Text>
                                            <Image
                                                source={{uri: 'https://cdn.iconscout.com/icon/free/png-256/right-arrow-1767528-1502432.png'}}
                                                resizeMode={'contain'}
                                                style={{height: 20, width: 20, marginRight: 10}}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.purpleCard}>
                            <ImageBackground
                                source={{uri: 'https://www.oxy.edu/sites/default/files/landing-page/banner-images/art-art-history_main_1440x800.jpg'}}
                                style={{height: '100%', justifyContent: 'flex-end'}}>
                                <View style={styles.percent}>
                                    <CircularProgress
                                        radius={20}
                                        value={12}
                                        textColor={'white'}
                                        fontSize={15}
                                        valueSuffix={'%'}
                                        duration={3000}/>
                                </View>
                                <View
                                    style={{backgroundColor: 'rgba(33, 22, 51, 0.5)', borderRadius: 20, height: '40%'}}>
                                    <Text style={styles.nameCard}>Art</Text>
                                    <Text style={{marginLeft: 10, color: 'white', fontStyle: 'italic'}}>Chapter 2: La
                                        Primavera</Text>
                                    <View style={{alignItems: 'flex-start', marginLeft: 10, marginTop: 15}}>
                                        <TouchableOpacity style={{
                                            borderRadius: 20,
                                            backgroundColor: 'white',
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={{
                                                marginLeft: 10,
                                                marginRight: 10,
                                                paddingLeft: 10,
                                                paddingBottom: 10,
                                                paddingTop: 10
                                            }}>Resume</Text>
                                            <Image
                                                source={{uri: 'https://cdn.iconscout.com/icon/free/png-256/right-arrow-1767528-1502432.png'}}
                                                resizeMode={'contain'}
                                                style={{height: 20, width: 20, marginRight: 10}}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.greenCard}>
                            <ImageBackground
                                source={{uri: 'https://noamkroll.com/wp-content/uploads/2022/07/Best-Music-Licensing-Platforms_.jpg'}}
                                style={{height: '100%', justifyContent: 'flex-end'}}>
                                <View style={styles.percent}>
                                    <CircularProgress
                                        radius={20}
                                        value={86}
                                        textColor={'white'}
                                        fontSize={15}
                                        valueSuffix={'%'}
                                        duration={3000}/>
                                </View>
                                <View
                                    style={{backgroundColor: 'rgba(33, 22, 51, 0.5)', borderRadius: 20, height: '40%'}}>
                                    <Text style={styles.nameCard}>Music</Text>
                                    <Text style={{marginLeft: 10, color: 'white', fontStyle: 'italic'}}>Chapter 45: What
                                        A Wonderful...</Text>
                                    <View style={{alignItems: 'flex-start', marginLeft: 10, marginTop: 15}}>
                                        <TouchableOpacity style={{
                                            borderRadius: 20,
                                            backgroundColor: 'white',
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={{
                                                marginLeft: 10,
                                                marginRight: 10,
                                                paddingLeft: 10,
                                                paddingBottom: 10,
                                                paddingTop: 10
                                            }}>Resume</Text>
                                            <Image
                                                source={{uri: 'https://cdn.iconscout.com/icon/free/png-256/right-arrow-1767528-1502432.png'}}
                                                resizeMode={'contain'}
                                                style={{height: 20, width: 20, marginRight: 10}}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.orangeCard}>
                            <ImageBackground
                                source={{uri: 'https://www.jmpraamsma.nl/wp-content/uploads/1997/11/adventure-blur-cartography-408503-1200x480.jpg'}}
                                style={{height: '100%', justifyContent: 'flex-end'}}>
                                <View style={styles.percent}>
                                    <CircularProgress
                                        radius={20}
                                        value={62}
                                        textColor={'white'}
                                        fontSize={15}
                                        valueSuffix={'%'}
                                        duration={3000}/>
                                </View>
                                <View
                                    style={{backgroundColor: 'rgba(33, 22, 51, 0.5)', borderRadius: 20, height: '40%'}}>
                                    <Text style={styles.nameCard}>Geography</Text>
                                    <Text style={{marginLeft: 10, color: 'white', fontStyle: 'italic'}}>Chapter 21:
                                        Italy</Text>
                                    <View style={{alignItems: 'flex-start', marginLeft: 10, marginTop: 15}}>
                                        <TouchableOpacity style={{
                                            borderRadius: 20,
                                            backgroundColor: 'white',
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={{
                                                marginLeft: 10,
                                                marginRight: 10,
                                                paddingLeft: 10,
                                                paddingBottom: 10,
                                                paddingTop: 10
                                            }}>Resume</Text>
                                            <Image
                                                source={{uri: 'https://cdn.iconscout.com/icon/free/png-256/right-arrow-1767528-1502432.png'}}
                                                resizeMode={'contain'}
                                                style={{height: 20, width: 20, marginRight: 10}}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                    </ScrollView>
                </View>
                <View style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
                    <Image source={{uri: 'https://it.seaicons.com/wp-content/uploads/2016/09/Lamp-icon.png'}}
                           resizeMode={'contain'}
                           style={{height: 20, width: 20, marginRight: 10}}
                    />
                    <Text style={{fontSize: 16}}>Quiz of the day</Text>
                </View>
                <View style={styles.quizDay}>
                    <ImageBackground
                        source={{uri: 'https://images.ctfassets.net/6pezt69ih962/42rMBnwzikbSLTtgYc8vt4/bca834fd835fe2a12577322309393c58/pallaidum_1200x600.png?h=550&fm=webp'}}
                        style={{height: '100%', justifyContent: 'flex-end'}}>
                        <View style={styles.percent}>
                            <Image
                                source={{uri: 'https://cdn.iconscout.com/icon/free/png-256/new-arrival-itema-tag-label-coupon-sticker-12963.png'}}
                                resizeMode={'contain'}
                                style={{height: 60, width: 60}}
                            />
                        </View>
                        <View style={{backgroundColor: 'rgba(33, 22, 51, 0.5)', borderRadius: 20, height: '50%'}}>
                            <Text style={styles.nameCard}>Musicals & Theatres</Text>
                            <Text style={{marginLeft: 10, color: 'white', fontStyle: 'italic'}}>New quiz of the
                                day</Text>
                            <View style={{alignItems: 'flex-start', marginLeft: 10, marginTop: 15}}>
                                <TouchableOpacity style={{
                                    borderRadius: 20,
                                    backgroundColor: 'white',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        marginLeft: 10,
                                        marginRight: 10,
                                        paddingLeft: 10,
                                        paddingBottom: 10,
                                        paddingTop: 10,
                                        fontSize: 25
                                    }}>Start</Text>
                                    <Image
                                        source={{uri: 'https://assets.website-files.com/6140f6af9e586a6d27b33604/615603c97dae1fa001f8c003_NC_Icon_Logo_BLK%201.png'}}
                                        resizeMode={'contain'}
                                        style={{height: 20, width: 20, marginRight: 20}}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontFamily: 'Inter_900Black'
    },
    cyanCard: {
        width: 250,
        height: 300,
        marginTop: 20,
        borderRadius: 20,
        overflow: 'hidden',
    },
    purpleCard: {
        width: 250,
        height: 300,
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 20,
        overflow: 'hidden',
    },
    greenCard: {
        width: 250,
        height: 300,
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 20,
        overflow: 'hidden',
    },
    orangeCard: {
        width: 250,
        height: 300,
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 20,
        overflow: 'hidden',
    },
    nameCard: {
        fontSize: 25,
        fontStyle: 'bold',
        marginLeft: 10,
        color: 'white'
    },
    percent: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-start',
        flex: 1,
        marginTop: 10,
        marginRight: 10,
    },
    quizDay: {
        height: 300,
        width: '100%',
        marginTop: 20,
        borderRadius: 20,
        overflow: 'hidden'
    }
});

