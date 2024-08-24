import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  standardButton: {
    padding: 20,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    backgroundColor: '#F0F0F0',
    borderColor: '#888888',
    borderWidth: 1,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '500',
  },
  doubleWidthButton: {
    width: Dimensions.get('window').width / 4 * 2,
  },
  tripleWidthButton: {
    width: Dimensions.get('window').width / 4 * 3,
  },
  arithmeticButton: {
    backgroundColor: '#FF9500',
    color: '#FFFFFF',
  },
});
