import React, { useState, useEffect } from 'react';
import { View, Text, Picker } from 'react-native';
import { Audio } from "expo-av";
import sounds from '../assets/sounds';

const styles= {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderWidth: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        },
        welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        borderWidth: 1,
        },
        line1: {
            backgroundColor: '#FDD7E4',
        },
        instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        borderWidth: 1,
        },
    }

const ParthWork = ({
    ...props
}) => {
    const [selectedSoundEffect, setSelectedSoundEffect] = useState({});

    useEffect(() => {
        playSound();
    }, [selectedSoundEffect])

    const onSoundEffectSelected = itemValue => {
        setSelectedSoundEffect(itemValue);
    }

    const playSound =  () => {
        try {
            Audio.Sound.createAsync(
              selectedSoundEffect.sound,
              { shouldPlay: true }
            ).then((sound, status) => {
                
            });
            // Your sound is playing!
          } catch (error) {
            // An error occurred!
          }
    }

    return (
        <Picker
            selectedValue={selectedSoundEffect}
            style={{height: 50, width: 200}}
            onValueChange={(itemValue, itemIndex) =>
                onSoundEffectSelected(itemValue)
            }>
            {sounds.map(soundEffect => {
                return <Picker.Item key={soundEffect.value} label={soundEffect.label} value={soundEffect} />
            })}
        </Picker>
    );
}

export default ParthWork;