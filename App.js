import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Francis, Parth } from './codeBOIS';

export default function App() {
  return (
    <View style={styles.container}>
      <Parth />
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
