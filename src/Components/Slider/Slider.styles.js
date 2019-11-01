import { I18nManager, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 50,
    justifyContent: 'center',
  },
  fullTrack: {
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
  },
});

export default styles;
