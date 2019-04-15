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
      <ScrollView>
        <DrawerHeader />
        <div>
          <DrawerItem
            label="Home"
            link="/"
            selected={itemSelected == 'home'}
            selectItem={this.selectItem}
          />

          <DrawerItemExpand
            label="Getting Started"
            reactPageMenuItems={gettingStartedPages}
            itemSelected={itemSelected}
            selectItem={this.selectItem}
            selectSection={this.selectSection}
            sectionExpanded={sectionExpanded == 'getting-started'}
          />
          <DrawerItemExpand
            label="Style"
            reactPageMenuItems={stylePages}
            selectItem={this.selectItem}
            itemSelected={itemSelected}
            selectSection={this.selectSection}
            sectionExpanded={sectionExpanded == 'style'}
          />
          <DrawerItemExpand
            label="Components"
            reactPageMenuItems={componentPages}
            selectItem={this.selectItem}
            itemSelected={itemSelected}
            selectSection={this.selectSection}
            sectionExpanded={sectionExpanded == 'components'}
          />
          <DrawerItemExpand
            label="Utils"
            reactPageMenuItems={utilsPages}
            selectItem={this.selectItem}
            itemSelected={itemSelected}
            selectSection={this.selectSection}
            sectionExpanded={sectionExpanded == 'utils'}
          />
          <DrawerItem
            label="Storybook"
            link="https://codypearce.github.io/material-bread/"
            selectItem={this.selectItem}
          />
          <DrawerItem
            label="Showcase"
            link="/showcase"
            selectItem={this.selectItem}
            selected={itemSelected == 'showcase'}
          />
          <DrawerItemExpand
            label="Contributing"
            reactPageMenuItems={contributingPages}
            selectItem={this.selectItem}
            itemSelected={itemSelected}
            selectSection={this.selectSection}
            sectionExpanded={sectionExpanded == 'contributing'}
          />

          <DrawerItem
            label="About"
            link="/about"
            selectItem={this.selectItem}
            selected={itemSelected == 'about'}
          />
        </div>
      </ScrollView>
    );
  }
}
