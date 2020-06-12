import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    minWidth: 'auto',
  },

  footerFont: {
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.4,
    color: 'rgba(0,0,0,1)',
  },

  currentNumber: {
    marginRight: 24,
  },

  rowsPerPage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 32,
  },

  rowsPerPageText: {
    marginRight: 8,
  },

  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default styles;
