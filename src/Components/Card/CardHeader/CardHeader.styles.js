import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,.2)',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: 'rgba(0,0,0,.87)',
    flexWrap: 'wrap',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(0,0,0,.6)',
    flexWrap: 'wrap',
  },
});

export default styles;
