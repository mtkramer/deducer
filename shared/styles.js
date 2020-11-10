import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: 'yellowgreen',
    height: 60
  },
  screen: {
    flex: 1,
    backgroundColor: '#c0c0c0da',
    padding: 40
  },
  sample: {
    height: 125,
    width: 200,
    margin: 10,
    borderRadius: 3
  },
  about: {
    fontSize: 20,
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: 'column',
    padding: 10,
    margin: 20
  }
});

export const samples = [
  { '0': require('../assets/machu-picchu-moray.jpg') },
  { '1': require('../assets/crazy-2pt.jpg') },
  { '2': require('../assets/relativity.jpg') },
  { '3': require('../assets/hyper-family.png') }
];
