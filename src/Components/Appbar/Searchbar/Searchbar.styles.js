import { StyleSheet } from 'react-native';
import { shadow } from '../../..';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,1)',
    height: 56,
    paddingHorizontal: 16,
  },
  searchInput: {
    fontSize: 16,
    flex: 1,
    marginLeft: 8,
    height: 30,
    ...shadow(0),
  },
});

export default styles;
