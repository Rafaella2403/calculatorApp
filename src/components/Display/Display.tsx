import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './Display.style';

interface IDisplay {
  displayValue: string;
}

export default class Display extends Component<IDisplay> {

  render() {
    return (
      <View style={styles.display}>
        <Text
          style={styles.text}
          numberOfLines={1}
        >{this.props.displayValue}</Text>
      </View>
    );
  }
}
