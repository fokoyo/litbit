import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Audio } from "expo-av";

import { Francis, Parth } from './codeBOIS';

export default function App() {
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
    <View style={styles.container}>
      <Parth selectedSoundEffect={selectedSoundEffect} setSelectedSoundEffect={setSelectedSoundEffect} onSoundEffectSelected={onSoundEffectSelected}/>
      <Francis />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F09D51',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
