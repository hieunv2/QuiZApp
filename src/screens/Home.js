import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Home = React.memo(({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="React Native by Example"
        onPress={() =>
          navigation.push('Detail', {name: 'React Native by Example '})
        }
      />
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

export default Home;
