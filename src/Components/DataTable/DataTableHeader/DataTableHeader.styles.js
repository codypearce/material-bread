import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  dataTableHeader: {
    height: 64,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    minWidth: 'auto',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  left: { flexDirection: 'row', alignItems: 'center' },
  title: {
    fontSize: 20,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
