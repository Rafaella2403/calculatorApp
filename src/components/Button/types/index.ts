export enum VariantStyleButton {
  ARITHMETIC_BUTTON = 'arithmeticButton',
  STANDARD_BUTTON = 'standardButton',
  DOUBLE_WIDTH_BUTTON= 'doubleWidthButton',
  TRIPLE_WIDTH_BUTTON= 'tripleWidthButton',
}

export interface IButton {
  label: string;
  onPress: () => void;
  variantStyleButton?: VariantStyleButton
}
