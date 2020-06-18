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

    ...shadow(24),
  },
  contentContainer: {
    flex: Platform.OS == 'web' ? 1 : 0,
    paddingLeft: 24,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
    color: '#212121',
    letterSpacing: 0.15,
    marginBottom: 24,
    marginRight: 24,
  },
  supportingText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.6)',
    marginRight: 24,
    letterSpacing: 0.44,
    lineHeight: 24,
  },
  actionItems: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 8,
    paddingBottom: 8,
    marginTop: 24,
  },
});

export default styles;
