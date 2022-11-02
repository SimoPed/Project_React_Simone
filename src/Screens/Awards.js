import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from "react-native";

export const Awards = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
          <View style={{alignItems: 'center'}}>
              <Text style={styles.title}>Your Awards</Text>
          </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontStyle: 'italic'
    }
});