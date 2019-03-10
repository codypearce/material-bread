import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TableCell from './TableCell';

class PropsTable extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    data: PropTypes.array,
    classes: PropTypes.object,
  };

  render() {
    const { data, classes } = this.props;
    return (
      <Table className={classes.table}>
        <TableHead style={{ borderRadius: 6 }}>
          <TableRow>
            <TableCell
              style={{
                borderTopLeftRadius: 6,
                borderBottomLeftRadius: 6,
              }}>
              Name
            </TableCell>
            <TableCell component="th" scope="row">
              Description
            </TableCell>
            <TableCell>Type</TableCell>
            <TableCell
              align="right"
              style={{
                borderTopRightRadius: 6,
                borderBottomRightRadius: 6,
              }}>
              Default
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell component="th" scope="row">
                {row.description}
              </TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell align="right">{row.defaultValue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 20,
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    overflowX: 'auto',
    borderRadius: 6,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

export default withStyles(styles)(PropsTable);
