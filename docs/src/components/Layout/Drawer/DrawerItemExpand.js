import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { navigate } from '@reach/router';

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

export class DrawerItemExpand extends Component {
  static propTypes = {
    classes: PropTypes.object,
    landingMenuItems: PropTypes.array,
    pageMenuItems: PropTypes.array,
    label: PropTypes.string,
  };
  state = {
    open: false,
  };
  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  render() {
    const { pageMenuItems, landingMenuItems, label } = this.props;

    return (
      <Fragment>
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary={label} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {landingMenuItems
              ? landingMenuItems.map(({ node: post }) => {
                  return (
                    <ListItem
                      button
                      key={post.id}
                      onClick={() => navigate(post.frontmatter.path)}>
                      <ListItemText
                        style={{ marginLeft: 16 }}
                        primary={'Overview'}
                      />
                    </ListItem>
                  );
                })
              : null}
            {pageMenuItems.map(({ node: post }) => {
              return (
                <ListItem
                  button
                  inset={true}
                  key={post.id}
                  onClick={() => navigate(`${post.frontmatter.path}`)}>
                  <ListItemText
                    style={{ marginLeft: 16 }}
                    primary={post.frontmatter.title}
                  />
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      </Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DrawerItemExpand);
