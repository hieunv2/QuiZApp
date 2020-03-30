import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Detail = React.memo(() => {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
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

export default Detail;
