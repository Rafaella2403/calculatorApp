import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleProp, TextStyle } from 'react-native';

import styles from './Button.style';

export enum VariantStyleButton {
  ARITHMETIC_BUTTON = 'arithmeticButton',
  STANDARD_BUTTON = 'standardButton',
  DOUBLE_WIDTH_BUTTON= 'doubleWidthButton',
  TRIPLE_WIDTH_BUTTON= 'tripleWidthButton',
}

interface IButton {
  label: string;
  onPress: () => void;
  variantStyleButton?: VariantStyleButton
}

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
      <TouchableOpacity onPress={onPress}>
        <Text style={combinedStyle}>{label}</Text>
      </TouchableOpacity>
    );
  }
}
