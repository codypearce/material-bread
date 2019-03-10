import { TableCell as MaterialTableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const TableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#263238',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(MaterialTableCell);

export default TableCell;
