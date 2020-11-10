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
    borderRadius: 3,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#333',
    shadowOpacity: .75
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
