import { StyleSheet } from 'react-native';
import shadow from '../../Utils/Shadow/shadow.js';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    alignSelf: 'flex-start',
  },
  track: {
    backgroundColor: 'rgba(0,0,0,.20)',
    position: 'relative',

    ...shadow(1),
  },
  thumbRipple: {
    borderRadius: 100,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumb: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',

    ...shadow(3),
  },
});

export default styles;
