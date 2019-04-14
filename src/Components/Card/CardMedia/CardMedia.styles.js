import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  textContainer: {
    position: 'absolute',
    left: 16,
    bottom: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: 'rgba(255,255,255,.87)',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(255,255,255,.87)',
  },
});

export default styles;
