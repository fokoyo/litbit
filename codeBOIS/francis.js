import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import * as Speech from 'expo-speech';

import { Pedometer } from 'expo-sensors';

const styles = StyleSheet.create({
    root: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    count: {
        fontWeight: 'bold',
        fontSize: 1500
    },
    count_text: {
        fontSize: 500
    }
});


const CountDisplay = ({
    count = 0,
    playSound = () => { },
    selectedSoundEffect = {},
    ...other
}) => {
    console.log('count display:', count);

    if (selectedSoundEffect.value === 'count-out-loud')
        Speech.speak(`${count}`);
    else
        playSound();

    return (
        <View style={styles.root}>
            <Text style={styles.count}>
                {count}
            </Text>
            <Text style={styles.count_text}>
                steps
            </Text>
        </View>
    );
}

const Work = ({
    playSound = () => { },
    selectedSoundEffect = {},
    ...props
}) => {

    const [count, setCount] = useState(0);


    useEffect(() => {
        Pedometer.watchStepCount(result => {
            setCount(result.steps);
        });
    }, []);

    return (
        <View>
            <CountDisplay count={count} playSound={playSound} selectedSoundEffect={selectedSoundEffect} />
        </View>
    )


}
export default Work;
