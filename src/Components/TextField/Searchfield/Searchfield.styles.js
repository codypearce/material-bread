import { StyleSheet } from 'react-native';
import { shadow } from '../../..';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 8,

    height: 40,
  },
  searchInput: {
    fontSize: 16,
    height: 40,
    marginLeft: 8,
    flex: 1,
    color: 'white',
    ...shadow(0),
  },
});

export default styles;
