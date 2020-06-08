import { StyleSheet } from 'react-native';
import shadow from '../../Utils/Shadow/shadow';

const styles = StyleSheet.create({
  bottomNavigation: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',

    ...shadow(8),
  },
});

export default styles;
