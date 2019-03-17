import React, { Component } from 'react';
import { View } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListExpanded,
} from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';

const sections = [{ name: 'Demos' }];

const propData = [
  createPropData('elevation', 'Shadow for list container', 'number', ''),
  createPropData('style', 'Styles root element', 'object', ''),
];

const liveEditCode = `
class ListPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {

      }
    }
    render() {
      return (
        <List>
          <ListItem>
            <ListItemIcon icon={'alarm'} />
            <ListItemText primary={'This is a list Item'} />
          </ListItem>
          <ListExpanded title="Expanded">
            <ListItem>
              <ListItemText primary={'This is a list Item'} />
            </ListItem>
            <ListItem>
              <ListItemText primary={'This is a list Item'} />
            </ListItem>
          </ListExpanded>
        </List>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem, ListItemIcon, ListItemText, ListExpanded,} from 'material-bread';

class ListPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <List>
        <ListItem>
          <ListItemIcon icon={'alarm'} />
          <ListItemText primary={'This is a list Item'} />
        </ListItem>
        <ListExpanded title="Expanded">
          <ListItem>
            <ListItemText primary={'This is a list Item'} />
          </ListItem>
          <ListItem>
            <ListItemText primary={'This is a list Item'} />
          </ListItem>
        </ListExpanded>
      </List>
    );
  }
}`;

export default class ListPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'list'}
          title={'List'}
          description={`Lists are continuous, vertical indexes of text or images.`}
          importCode={`import { List } from 'material-bread';`}
          docsLink={'https://material.io/design/components/lists.html'}
          componentDescription={`Lists are built from other List Components. You can combine these components to create many different combinations.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            List,
            ListItem,
            ListItemIcon,
            ListItemText,
            ListExpanded,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/list#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
