import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    borderRadius: 4,
    backgroundColor: '#323232',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
    paddingHorizontal: 8,
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 10,
  },
});

export default styles;
