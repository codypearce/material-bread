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
  // root: {
  //   '&$selected': {
  //     backgroundColor: '#263238',
  //     '& *': {
  //       color: 'white !important',
  //     },
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
    const {
      markdownMenuItems,
      reactPageMenuItems,
      landingMenuItems,
      label,
      itemSelected,
      classes,
    } = this.props;

    return (
      <Fragment>
        <ListItem
          button
          onClick={this.handleClick}
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
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit style={{}}>
          <List component="div" disablePadding>
            {landingMenuItems &&
              landingMenuItems.map(({ node: post }) => {
                return (
                  <ListItem
                    button
                    key={post.id}
                    classes={classes}
                    style={{}}
                    onClick={
                      (() => this.handleSubItemClick(post.frontmatter.path),
                      post.frontmatter.title.toLowerCase())
                    }
                    selected={
                      post.frontmatter.title.toLowerCase() == itemSelected
                    }>
                    <ListItemText
                      style={{
                        fontSize: 14,
                        color: '#000',
                        paddingLeft: 16,
                      }}
                      primary={'Overview'}
                      disableTypography
                    />
                  </ListItem>
                );
              })}
            {markdownMenuItems &&
              markdownMenuItems.map(({ node: post }) => {
                return (
                  <ListItem
                    button
                    key={post.id}
                    style={{}}
                    classes={classes}
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
                      style={{
                        fontSize: 14,
                        paddingLeft: 16,
                        color: '#000',
                      }}
                      primary={post.frontmatter.title}
                      disableTypography
                      classes={classes}
                    />
                  </ListItem>
                );
              })}
            {reactPageMenuItems &&
              reactPageMenuItems.map(post => {
                return (
                  <ListItem
                    button
                    key={post.id}
                    style={{ paddingLeft: 12 }}
                    classes={classes}
                    onClick={() =>
                      this.handleSubItemClick(
                        post.path,
                        post.title.toLowerCase(),
                      )
                    }
                    selected={post.title.toLowerCase() == itemSelected}>
                    <ListItemText
                      style={{
                        fontSize: 14,
                        color: '#000',
                        paddingLeft: 16,
                      }}
                      primary={post.title}
                      disableTypography
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
