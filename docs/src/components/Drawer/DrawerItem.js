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
});

export class DrawerItem extends Component {
  static propTypes = {
    classes: PropTypes.object,
    label: PropTypes.string,
    link: PropTypes.string,
  };

  render() {
    const { link, label } = this.props;

    return (
      <ListItem button onClick={() => navigate(link)}>
        <ListItemText primary={label} />
      </ListItem>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DrawerItem);
