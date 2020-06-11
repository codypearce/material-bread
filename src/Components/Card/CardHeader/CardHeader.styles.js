import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,.2)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  left: {
    flexDirection: 'row',
    flexShrink: 1,
  },

  textContainer: {
    marginLeft: 16,
    flexWrap: 'wrap',
    flexShrink: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.15,
    color: '#000000',
    flexWrap: 'wrap',
    marginBottom: 7,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.25,
    color: '#212121',
    flexWrap: 'wrap',
  },
});

export default styles;
