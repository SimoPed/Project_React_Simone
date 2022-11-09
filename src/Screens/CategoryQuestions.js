import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const getCategoryQuestions = async () => {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple');
    const data = await response.json();
    return data.results;
}

const CategoryQuestions = () => {


    const [listQuestion, setListQuestion] = useState([])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        getCategoryQuestions().then(setListQuestion)
    }, [])

    useEffect(() => {
        setIndex(index => index + 1)
    }, [])


    if (!listQuestion.length) {
        return null;
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'rgb(100, 79, 209)'}}>
                <View style={{alignItems: 'center',  marginRight: 10, marginLeft: 10}}>
                    <Text style={styles.question}>{listQuestion[index].question.replaceAll('&#039;', '\'').replaceAll('&oacute;', 'o')}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 30}}>
                        <TouchableOpacity
                            style={styles.answers}>
                            <View style={styles.firstCircle}>
                                <Text style={{fontSize: 25, fontStyle: 'bold', color: 'white'}}>A</Text>
                            </View>
                            <Text style={styles.response}>{listQuestion[index].correct_answer}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.answers}>
                            <View style={styles.secondCircle}>
                                <Text style={{fontSize: 25, fontStyle: 'bold', color: 'white'}}>B</Text>
                            </View>
                            <Text style={styles.response}>{listQuestion[index].incorrect_answers[0]}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
                        <TouchableOpacity
                            style={styles.answers}>
                            <View style={styles.thirdCircle}>
                                <Text style={{fontSize: 25, fontStyle: 'bold', color: 'white'}}>C</Text>
                            </View>
                            <Text style={styles.response}>{listQuestion[index].incorrect_answers[1]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.answers}>
                            <View style={styles.fourthCircle}>
                                <Text style={{fontSize: 25, fontStyle: 'bold', color: 'white'}}>D</Text>
                            </View>
                            <Text style={styles.response}>{listQuestion[index].incorrect_answers[2]}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    answers: {
        width: '40%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20
    },
    response: {
        fontSize: 20,
        fontFamily: 'Inter_900Black',
        textAlign: 'center'
    },
    question: {
        fontSize: 25,
        fontFamily: 'Inter_900Black',
        textAlign: 'center',
        color: 'white'
    },
    firstCircle: {
        marginBottom: 20,
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    secondCircle: {
        marginBottom: 20,
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    thirdCircle: {
        marginBottom: 20,
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    fourthCircle: {
        marginBottom: 20,
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default CategoryQuestions;