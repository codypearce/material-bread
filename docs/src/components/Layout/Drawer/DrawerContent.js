import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, Divider } from '@material-ui/core';
import DrawerItem from './DrawerItem';
import DrawerItemExpand from './DrawerItemExpand';

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class DrawerContent extends React.Component {
  static propTypes = {
    posts: PropTypes.array,
  };

  render() {
    const { posts } = this.props;
    console.log(posts);
    return (
      <div>
        <div style={{ padding: '10px 20px' }}>
          <h3>Material Bread</h3>
          <p>Beta</p>
        </div>
        <Divider />
        <List>
          <DrawerItem label="Home" link="/" />

          <DrawerItemExpand
            label="Getting Started"
            pageMenuItems={posts
              .filter(post => post.node.frontmatter.group === 'getting-started')
              .filter(post => post.node.frontmatter.layout === 'page')
              .filter(post => post.node.frontmatter.status === 'complete')}
          />
          <DrawerItem label="Playground" link="/playground" />
          <DrawerItem label="Contributing" link="/contributing" />
          <DrawerItem label="About" link="/about" />
        </List>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DrawerContent);
