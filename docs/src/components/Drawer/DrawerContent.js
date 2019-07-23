import React from 'react';
import PropTypes from 'prop-types';

import { ScrollView } from 'react-native';

import DrawerItem from './DrawerItem';
import DrawerItemExpand from './DrawerItemExpand';
import {
  gettingStartedPages,
  componentPages,
  utilsPages,
  stylePages,
  contributingPages,
} from '../../navigation';
import DrawerHeader from './DrawerHeader';

export default class DrawerContent extends React.PureComponent {
  static propTypes = {
    posts: PropTypes.array,
  };

  state = {
    itemSelected: '',
    sectionExpanded: '',
  };

  componentDidMount() {
    if (typeof window !== `undefined`) {
      const pathName = window.location.pathname;
      const pathArray = pathName.split('/');

      this.handleSectionExanded(pathArray);
      this.handleSelectedItem(pathArray, pathName);
    }
  }

  handleSectionExanded(pathArray) {
    let sectionExpanded = '';
    let arrayOfExpandedSections = [
      'getting-started',
      'style',
      'components',
      'utils',
    ];

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
    const { itemSelected, sectionExpanded } = this.state;

    return (
      <ScrollView style={{ backgroundColor: '#04023d', paddingHorizontal: 16 }}>
        <DrawerHeader />
        <div>
          <DrawerItem
            label="Home"
            icon="home"
            link="/"
            selected={itemSelected == 'home'}
            selectItem={this.selectItem}
          />

          <DrawerItemExpand
            label="Getting Started"
            icon="rocket"
            reactPageMenuItems={gettingStartedPages}
            itemSelected={itemSelected}
            selectItem={this.selectItem}
            selectSection={this.selectSection}
            sectionExpanded={sectionExpanded == 'getting-started'}
          />
          <DrawerItemExpand
            label="Style"
            icon="tint"
            reactPageMenuItems={stylePages}
            selectItem={this.selectItem}
            itemSelected={itemSelected}
            selectSection={this.selectSection}
            sectionExpanded={sectionExpanded == 'style'}
          />
          <DrawerItemExpand
            label="Components"
            icon="cube"
            reactPageMenuItems={componentPages}
            selectItem={this.selectItem}
            itemSelected={itemSelected}
            selectSection={this.selectSection}
            sectionExpanded={sectionExpanded == 'components'}
          />
          <DrawerItemExpand
            label="Utils"
            icon="wrench"
            reactPageMenuItems={utilsPages}
            selectItem={this.selectItem}
            itemSelected={itemSelected}
            selectSection={this.selectSection}
            sectionExpanded={sectionExpanded == 'utils'}
          />
          <DrawerItem
            label="Storybook"
            icon="book"
            link="https://codypearce.github.io/material-bread/"
            selectItem={this.selectItem}
          />
          <DrawerItem
            label="Showcase"
            icon="tablet-alt"
            link="/showcase"
            selectItem={this.selectItem}
            selected={itemSelected == 'showcase'}
          />
          <DrawerItemExpand
            label="Contributing"
            icon="handshake"
            reactPageMenuItems={contributingPages}
            selectItem={this.selectItem}
            itemSelected={itemSelected}
            selectSection={this.selectSection}
            sectionExpanded={sectionExpanded == 'contributing'}
          />

          <DrawerItem
            label="About"
            icon="id-card"
            link="/about"
            selectItem={this.selectItem}
            selected={itemSelected == 'about'}
          />
        </div>
      </ScrollView>
    );
  }
}
