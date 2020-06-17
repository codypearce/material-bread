import { StyleSheet } from 'react-native';
import shadow from '../../Utils/Shadow/shadow.js';

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
    borderRadius: 3,
    width: 342,
    backgroundColor: '#212121',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  text: {
    flex: 1,
    fontWeight: '400',
    flexWrap: 'wrap',
    color: 'white',
    marginLeft: 8,
    marginVertical: 8,
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.25,
  },
});

export default styles;
