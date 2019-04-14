import { StyleSheet } from 'react-native';
import { shadow } from '../..';

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },

  card: {
    ...shadow(6),
    borderRadius: 4,
    backgroundColor: '#323232',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    flexWrap: 'wrap',
    color: 'white',
    marginLeft: 16,
    marginVertical: 14,
  },
});

export default styles;
