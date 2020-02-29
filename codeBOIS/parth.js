import React from 'react';
import { View, Picker, Button } from 'react-native';
import sounds from '../assets/sounds';

const styles= {
    itemSpace:{ marginBottom: 20 },
}

const ParthWork = ({
    selectedSoundEffect,
    setSelectedSoundEffect,
    onSoundEffectSelected,
    ...props
}) => {

    return (
        <View>
            <View style={styles.itemSpace}>
                <Button title="Start" onPress={() => {

                }}/>
            </View>
            <View style={styles.itemSpace}>
                <Button title="Stop"/>
            </View>
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
        </View>
    );
}

export default ParthWork;