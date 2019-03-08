import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText } from '@material-ui/core';
import { navigate } from '@reach/router';

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  // root: {
  //   '&$selected': {
  //     backgroundColor: '#263238',
  //     color: 'white',
  //   },
  //   '&&:hover': {
  //     backgroundColor: '#263238',
  //     '& *': {
  //       color: 'white !important',
  //     },
  //   },
  //   '&&:active': {
  //     backgroundColor: '#263238',
  //     '& *': {
  //       color: 'white !important',
  //     },
  //   },
  //   '&&:focus': {
  //     backgroundColor: '#263238',
  //     '& *': {
  //       color: 'white !important',
  //     },
  //   },
  // },
  // selected: {},
});

export class DrawerItem extends Component {
  static propTypes = {
    classes: PropTypes.object,
    label: PropTypes.string,
    link: PropTypes.string,
    selectItem: PropTypes.func,
    selected: PropTypes.bool,
  };

  handleClick = () => {
    const { selectItem, label, link } = this.props;
    selectItem(label.toLowerCase());
    navigate(link);
  };

  render() {
    const { label, selected, classes } = this.props;

    return (
      <ListItem
        button
        onClick={this.handleClick}
        selected={selected}
        style={{}}
        classes={classes}>
        <ListItemText
          primary={label}
          style={{
            fontSize: 14,

            color: '#000',
          }}
          disableTypography
        />
      </ListItem>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DrawerItem);
