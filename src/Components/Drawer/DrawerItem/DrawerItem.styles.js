import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 8,
    zIndex: 10,
  },
  text: {
    fontSize: 14,
    color: 'rgba(0,0,0,.87)',
    fontWeight: '500',
    zIndex: 10,
  },
});

export default styles;
