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
        subsubItem: true,
      },
      {
        id: 8,
        title: 'Button',
        path: '/components/button',
      },
      {
        id: 9,
        title: 'Card',
        path: '/components/card',
      },
      {
        id: 10,
        title: 'CardActions',
        path: '/components/card-actions',
        subsubItem: true,
      },
      {
        id: 11,
        title: 'CardContent',
        path: '/components/card-content',
        subsubItem: true,
      },
      {
        id: 12,
        title: 'CardHeader',
        path: '/components/card-header',
        subsubItem: true,
      },
      {
        id: 13,
        title: 'CardMedia',
        path: '/components/card-media',
        subsubItem: true,
      },
      {
        id: 14,
        title: 'Checkbox',
        path: '/components/checkbox',
      },
      {
        id: 15,
        title: 'Chip',
        path: '/components/chip',
      },
      {
        id: 16,
        title: 'DataTable',
        path: '/components/datatable',
      },
      {
        id: 17,
        title: 'DataTableCell',
        path: '/components/datatable-cell',
        subsubItem: true,
      },
      {
        id: 18,
        title: 'DataTableHeader',
        path: '/components/datatable-header',
        subsubItem: true,
      },
      {
        id: 19,
        title: 'DataTablePagination',
        path: '/components/datatable-pagination',
        subsubItem: true,
      },
      {
        id: 20,
        title: 'DataTableRow',
        path: '/components/datatable-row',
        subsubItem: true,
      },
      {
        id: 21,
        title: 'Dialog',
        path: '/components/dialog',
      },
      {
        id: 21,
        title: 'Divider',
        path: '/components/divider',
      },
      {
        id: 21,
        title: 'Drawer',
        path: '/components/drawer',
      },
      {
        id: 21,
        title: 'Dropdown',
        path: '/components/dropdown',
      },
      {
        id: 21,
        title: 'Fab',
        path: '/components/fab',
      },
      {
        id: 21,
        title: 'Speed dial',
        path: '/components/fab-speeddial',
        subsubItem: true,
      },
      {
        id: 21,
        title: 'Icon',
        path: '/components/icon',
      },
      {
        id: 21,
        title: 'IconButton',
        path: '/components/iconbutton',
      },
      {
        id: 21,
        title: 'List',
        path: '/components/list',
      },
      {
        id: 21,
        title: 'Menu',
        path: '/components/menu',
      },
      {
        id: 21,
        title: 'MenuItem',
        path: '/components/menu-item',
        subsubItem: true,
      },
      {
        id: 21,
        title: 'Paper',
        path: '/components/paper',
      },
      {
        id: 21,
        title: 'Progress Bar',
        path: '/components/progress-bar',
      },
      {
        id: 21,
        title: 'Progress Circle',
        path: '/components/progress-circle',
      },
      {
        id: 21,
        title: 'Radio Button',
        path: '/components/radiobutton',
      },
      {
        id: 21,
        title: 'Ripple',
        path: '/components/ripple',
      },
      {
        id: 21,
        title: 'Searchbar',
        path: '/components/searchbar',
      },
      {
        id: 21,
        title: 'SearchField',
        path: '/components/searchfield',
      },
      {
        id: 21,
        title: 'Snackbar',
        path: '/components/snackbar',
      },
      {
        id: 21,
        title: 'Switch',
        path: '/components/switch',
      },
      {
        id: 21,
        title: 'Textfield',
        path: '/components/textfield',
      },
      {
        id: 21,
        title: 'ToggleButton',
        path: '/components/togglebutton',
      },
      {
        id: 21,
        title: 'Typography',
        path: '/components/typography',
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
