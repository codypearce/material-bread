import { StyleSheet } from 'react-native';
import shadow from '../../Utils/Shadow/shadow';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    ...shadow(8),
  },
});

export default styles;
