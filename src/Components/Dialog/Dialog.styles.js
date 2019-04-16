import { StyleSheet } from 'react-native';
import shadow from '../../Utils/Shadow/shadow';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderRadius: 4,
    paddingTop: 24,
    maxWidth: 560,
    ...shadow(12),
  },
});

export default styles;
