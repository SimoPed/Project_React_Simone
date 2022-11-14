import React, {useState} from 'react';
import {Text, View, StyleSheet} from "react-native";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import Constants from 'expo-constants';

export const Timer = () => {
    const [isPlaying, setIsPlaying] = useState(true)

    return (
        <View style={styles.container}>
            <CountdownCircleTimer
                size={120}
                isPlaying={isPlaying}
                duration={10}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[10, 6, 3, 0]}
                onComplete={() => ({shouldRepeat: false})}
            >
                {({ remainingTime, color }) => (
                    <Text style={{ color, fontSize: 40 }}>
                        {remainingTime}
                    </Text>
                )}
            </CountdownCircleTimer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 70
    }
});