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
    left: 24,
    bottom: 24,
  },

  title: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
    color: '#FFFFFF',
    letterSpacing: 0.15,
    marginBottom: 7,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 16,
    color: '#FFFFFF',
    letterSpacing: 0.25,
  },
});

export default styles;
