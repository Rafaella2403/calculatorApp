import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleProp, TextStyle } from 'react-native';

import styles from './Button.style';
import { IButton, VariantStyleButton } from './types';

export default class Button extends Component<IButton> {
  getStyleButton = (): StyleProp<TextStyle> => {
    const { variantStyleButton } = this.props;

    const styleMap: { [key in VariantStyleButton]?: StyleProp<TextStyle> } = {
      [VariantStyleButton.ARITHMETIC_BUTTON]: styles.arithmeticButton,
      [VariantStyleButton.DOUBLE_WIDTH_BUTTON]: styles.doubleWidthButton,
      [VariantStyleButton.TRIPLE_WIDTH_BUTTON]: styles.tripleWidthButton,
    };

    return styleMap[variantStyleButton!] || {};
  };

  render() {
    const { label, onPress } = this.props;
    const combinedStyle = [styles.standardButton, this.getStyleButton()];

    return (
      <TouchableOpacity onPress={() => onPress(this.props.label)}>
        <Text style={combinedStyle}>{label}</Text>
      </TouchableOpacity>
    );
  }
}
