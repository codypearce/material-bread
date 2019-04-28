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
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  supportingText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.54)',
    marginBottom: 24,
    lineHeight: 24,
    paddingHorizontal: 24,
  },
  actionItems: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 8,
    paddingHorizontal: 8,
  },
});

export default styles;
