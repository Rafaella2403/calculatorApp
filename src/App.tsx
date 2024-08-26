/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Display } from './components';
import { VariantStyleButton } from './components/Button/types';

interface IState {
  displayValue: string,
  clearDisplay: boolean,
  operation: null | string,
  values: number[],
  current: number,
}

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class App extends Component<IState> {
  state: IState = { ... initialState};

  renderButtons = () => {
    const buttons = [
      { label: 'AC', onPress: this.clearMemory, variant: VariantStyleButton.TRIPLE_WIDTH_BUTTON },
      { label: '/', onPress: this.setOperation, variant: VariantStyleButton.ARITHMETIC_BUTTON },
      { label: '7', onPress: this.setDigit },
      { label: '8', onPress: this.setDigit },
      { label: '9', onPress: this.setDigit },
      { label: '*', onPress: this.setOperation, variant: VariantStyleButton.ARITHMETIC_BUTTON },
      { label: '4', onPress: this.setDigit },
      { label: '5', onPress: this.setDigit },
      { label: '6', onPress: this.setDigit },
      { label: '-', onPress: this.setOperation, variant: VariantStyleButton.ARITHMETIC_BUTTON },
      { label: '1', onPress: this.setDigit },
      { label: '2', onPress: this.setDigit },
      { label: '3', onPress: this.setDigit },
      { label: '+', onPress: this.setOperation, variant: VariantStyleButton.ARITHMETIC_BUTTON },
      { label: '0', onPress: this.setDigit, variant: VariantStyleButton.DOUBLE_WIDTH_BUTTON },
      { label: '.', onPress: this.setDigit },
      { label: '=', onPress: this.setOperation, variant: VariantStyleButton.ARITHMETIC_BUTTON },
    ];

    return buttons.map(({ label, onPress, variant }, index) => (
      <Button
        key={index}
        label={label}
        onPress={onPress}
        variantStyleButton={variant}
      />
    ));
  };

  setDigit = (n: string) => {
    const clearDisplay = this.state.displayValue === '0'
      || this.state.clearDisplay;

    if (
      n === '.'
      && !clearDisplay
      && this.state.displayValue.includes('.')
    ) {
      return;
    }
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];

      values[this.state.current] = newValue;
      this.setState({ values });
    }
  };

  clearMemory = () => {
    this.setState({ ...initialState });
  };

  setOperation = (operation: string) => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === '=';
      const values = [ ...this.state.values ];
      try {
        values[0] =
          // eslint-disable-next-line no-eval
          eval(`${values[0]} ${this.state.operation} ${values[1]}`);
      } catch (err) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values,
      });
    }

  };

  render() {
    return (
      <View style={{height: '100%'}}>
        <Display displayValue={this.state.displayValue}/>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
          {this.renderButtons()}
        </View>
      </View>
    );
  }
}
