import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    minWidth: 'auto',
  },

  currentNumber: {
    fontSize: 12,
    marginRight: 44 / 2,
    color: 'rgba(0,0,0,.6)',
  },
  rowsPerPage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
  },
  rowsPerPageText: {
    fontSize: 12,
    marginRight: 24,
    color: 'rgba(0,0,0,.6)',
  },
  text: {
    fontSize: 12,
    color: 'rgba(0,0,0,.6)',
  },
});

export default styles;
