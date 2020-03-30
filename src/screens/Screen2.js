import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Screen2 = React.memo(() => {
  return (
    <View style={styles.container}>
      <Text>Screen2</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screen2;
