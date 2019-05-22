import { StyleSheet, Platform } from 'react-native';
import shadow from '../../Utils/Shadow/shadow';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: '100%',

    borderRadius: 4,
    paddingTop: 24,
    maxWidth: Platform.OS == 'web' ? 560 : '100%',

    maxHeight: Platform.OS == 'web' ? 'calc(100vh - 20px)' : '100%',
    overflow: 'hidden',

    ...shadow(12),
  },
  contentContainer: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 8,
  },
  title: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 20,
  },
  supportingText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.54)',
    marginBottom: 16,
    lineHeight: 24,
  },
  actionItems: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
});

export default styles;
