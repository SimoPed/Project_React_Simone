import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import {useFonts, Inter_900Black} from '@expo-google-fonts/inter';
import MemoedTouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";

export const Awards = () => {
    return (
      <SafeAreaView style={{flex: 1, marginLeft: 10, marginRight: 10}}>
          <View>
              <Text style={styles.title}>Your awards</Text>
              <Text style={{marginTop: 10, fontSize: 16}}>Always do better!</Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 30}}>
              <Text style={{marginBottom: 5}}>Level 2</Text>
              <Text style={{marginBottom: 10, fontFamily: 'Inter_900Black', fontSize: 18}}>Intermediate</Text>
              <CircularProgress
                  radius={80}
                  value={42}
                  textColor={'white'}
                  fontSize={15}
                  valueSuffix={'%'}
                  duration={3000}/>
              <Text style={{marginTop: 10}}>Accuracy</Text>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                  <TouchableOpacity style={{borderRadius: 20, borderWidth: 1, borderColor: 'black', marginRight: 80}}>
                      <Text style={{paddingTop: 10, paddingBottom: 10, paddingLeft: 25, paddingRight: 25}}>Details</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor: 'blue', borderRadius: 20}}>
                      <Text style={{paddingTop: 10, paddingBottom: 10, paddingLeft: 25, paddingRight: 25, color: 'white'}}>Practice</Text>
                  </TouchableOpacity>
              </View>
          </View>

      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontFamily: 'Inter_900Black'
    }
});