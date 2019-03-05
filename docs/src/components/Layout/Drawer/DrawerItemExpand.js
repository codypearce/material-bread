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
    selectItem: PropTypes.func,
    itemSelected: PropTypes.string,
    sectionExpanded: PropTypes.bool,
  };
  state = {
    open: false,
  };

  componentDidMount() {
    if (this.props.sectionExpanded) {
      this.setState({ open: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.sectionExpanded && !prevProps.sectionExpanded) {
      this.setState({ open: true });
    }
  }
  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  handleSubItemClick = (path, name) => {
    const { selectItem } = this.props;
    selectItem(name);
    navigate(path);
  };
  render() {
    const { pageMenuItems, landingMenuItems, label, itemSelected } = this.props;

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
                      onClick={
                        (() => this.handleSubItemClick(post.frontmatter.path),
                        post.frontmatter.title.toLowerCase())
                      }
                      selected={
                        post.frontmatter.title.toLowerCase() == itemSelected
                      }>
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
                  onClick={() =>
                    this.handleSubItemClick(
                      post.frontmatter.path,
                      post.frontmatter.title.toLowerCase(),
                    )
                  }
                  selected={
                    post.frontmatter.title.toLowerCase() == itemSelected
                  }>
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
