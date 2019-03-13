import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import DrawerItem from './DrawerItem';
import DrawerItemExpand from './DrawerItemExpand';

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class DrawerContent extends React.PureComponent {
  static propTypes = {
    posts: PropTypes.array,
  };

  state = {
    itemSelected: '',
    sectionExpanded: '',
  };

  componentDidMount() {
    const pathName = window.location.pathname;
    const pathArray = pathName.split('/');

    this.handleSectionExanded(pathArray);
    this.handleSelectedItem(pathArray, pathName);
  }

  handleSectionExanded(pathArray) {
    let sectionExpanded = '';
    let arrayOfExpandedSections = ['getting-started', 'style', 'components'];

    for (let i = 0; i < arrayOfExpandedSections.length; i++) {
      if (pathArray.includes(arrayOfExpandedSections[i])) {
        sectionExpanded = arrayOfExpandedSections[i];
      }
    }

    this.selectSection(sectionExpanded);
  }

  handleSelectedItem(pathArray, pathName) {
    let name = 'home';
    if (pathName !== '/') {
      name = pathArray.pop();
    }
    const formatString = name.replace(/-/g, ' ');
    this.selectItem(formatString);
  }

  selectItem = name => {
    this.setState({
      itemSelected: name,
    });
  };

  selectSection = name => {
    this.setState({
      sectionExpanded: name,
    });
  };

  render() {
    const { posts } = this.props;
    const { itemSelected, sectionExpanded } = this.state;
    const components = [
      {
        id: 1,
        title: 'Appbar',
        path: '/components/appbar',
      },
      {
        id: 2,
        title: 'Appbar Bottom',
        path: '/components/appbar-bottom',
      },
      {
        id: 3,
        title: 'Avatar',
        path: '/components/avatar',
      },
      {
        id: 4,
        title: 'Badge',
        path: '/components/badge',
      },
      {
        id: 5,
        title: 'Banner',
        path: '/components/banner',
      },
      {
        id: 6,
        title: 'Bottom Navigation',
        path: '/components/bottom-navigation',
      },
      {
        id: 7,
        title: 'Bottom Navigation Item',
        path: '/components/bottom-navigation-item',
      },
    ];
    return (
      <div>
        <div
          style={{
            padding: '25px 20px',

            backgroundColor: '#263238',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <h3
            style={{
              fontSize: 20,
              color: 'white',
              margin: 0,
              fontWeight: 400,
              display: 'block',
              letterSpacing: 1.2,
            }}>
            Material Bread
          </h3>
          <span
            style={{
              margin: 0,
              color: 'rgba(255,255,255,.7)',
              fontSize: 12,
              marginLeft: 10,
              marginTop: 6,
              display: 'inline-block',
            }}>
            Beta
          </span>
        </div>

        <List>
          <DrawerItem
            label="Home"
            link="/"
            selected={itemSelected == 'home'}
            selectItem={this.selectItem}
          />

          <DrawerItemExpand
            label="Getting Started"
            markdownMenuItems={posts
              .filter(post => post.node.frontmatter.group === 'getting-started')
              .filter(post => post.node.frontmatter.layout === 'page')
              .filter(post => post.node.frontmatter.status === 'complete')}
            itemSelected={itemSelected}
            selectItem={this.selectItem}
            selectSection={this.selectSection}
            sectionExpanded={sectionExpanded == 'getting-started'}
          />
          <DrawerItemExpand
            label="Style"
            markdownMenuItems={posts
              .filter(post => post.node.frontmatter.group === 'style')
              .filter(post => post.node.frontmatter.layout === 'page')
              .filter(post => post.node.frontmatter.status === 'complete')}
            selectItem={this.selectItem}
            itemSelected={itemSelected}
            selectSection={this.selectSection}
            sectionExpanded={sectionExpanded == 'style'}
          />
          <DrawerItemExpand
            label="Components"
            reactPageMenuItems={components}
            selectItem={this.selectItem}
            itemSelected={itemSelected}
            selectSection={this.selectSection}
            sectionExpanded={sectionExpanded == 'components'}
          />
          <DrawerItem
            label="Playground"
            link="/http://localhost:9009/?selectedKind=Appbar&selectedStory=Appbar&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybook-addon-viewport%2Faddon-panel"
            selectItem={this.selectItem}
          />
          <DrawerItem
            label="Contributing"
            link="/contributing"
            selectItem={this.selectItem}
            selected={itemSelected == 'contributing'}
          />
          <DrawerItem
            label="About"
            link="/about"
            selectItem={this.selectItem}
            selected={itemSelected == 'about'}
          />
        </List>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DrawerContent);
