import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import DrawerItem from './DrawerItem';

class DrawerItemExpand extends Component {
  static propTypes = {
    classes: PropTypes.object,
    label: PropTypes.string,
    selectItem: PropTypes.func,
    itemSelected: PropTypes.string,
    sectionExpanded: PropTypes.bool,
    markdownMenuItems: PropTypes.array,
    reactPageMenuItems: PropTypes.array,
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

  handleSubItemClick = name => {
    const { selectItem } = this.props;
    selectItem(name);
  };

  renderMarkdownMenuItems() {
    const { markdownMenuItems, itemSelected } = this.props;
    if (!markdownMenuItems) return null;
    return markdownMenuItems.map(({ node: post }) => {
      return (
        <DrawerItem
          key={post.id}
          label={post.frontmatter.title}
          link={post.frontmatter.path}
          selected={post.frontmatter.title.toLowerCase() == itemSelected}
          selectItem={this.handleSubItemClick}
          subItem
        />
      );
    });
  }
  renderReactMenuItems() {
    const { reactPageMenuItems, itemSelected } = this.props;
    if (!reactPageMenuItems) return null;
    return reactPageMenuItems.map(post => {
      return (
        <DrawerItem
          key={post.id}
          label={post.title}
          link={post.path}
          selected={post.title.toLowerCase() == itemSelected}
          selectItem={() => this.handleSubItemClick}
          subItem
        />
      );
    });
  }
  render() {
    const { label, classes } = this.props;
    const { open } = this.state;

    return (
      <Fragment>
        <ListItem button onClick={this.handleClick} classes={classes}>
          <ListItemText
            primary={label}
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: '#000',
            }}
            disableTypography
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {this.renderMarkdownMenuItems()}
            {this.renderReactMenuItems()}
          </List>
        </Collapse>
      </Fragment>
    );
  }
}

export default DrawerItemExpand;
