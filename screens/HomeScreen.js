import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
      <Text>HomeScreen</Text>
      </View>
    );
  }
}

const styles= StyleSheet.create({
    container: {
        paddingTop: 20
    }
})
