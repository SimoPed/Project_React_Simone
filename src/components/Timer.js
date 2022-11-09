import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";

const Timer = () => {
    const [time, setTime] = React.useState(10);
    const timerRef = useRef(time);

    useEffect(() => {
        const timerId = setInterval(() => {
            timerRef.current -= 1;
            if (timerRef.current < 0) {
                clearInterval(timerId);
            } else {
                setTime(timerRef.current);
            }
        }, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{backgroundColor: 'red', borderRadius: 50, width: 100, height: 100, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{padding: 40, fontSize: 25}}>{time}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

});

export default Timer;