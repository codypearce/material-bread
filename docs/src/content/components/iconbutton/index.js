import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../../components/Section';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import { IconButton } from '../../../../../src/index';
import ComponentDescription from '../../../components/ComponentPage/ComponentDescription';
import propData from '../../../content/components/iconbutton/propData';

const sections = [{ name: 'Demos' }];

const liveEditCode = `
class IconPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {

      }
    }
    render() {
      return (
        <View>
          <IconButton name="favorite" size={48} />
        </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { IconButton } from 'material-bread';

class IconPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <IconButton name="favorite" size={48} />
      </View>
    );
  }
}`;

export default class IconPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'iconbutton'}
          title={'Icon Button'}
          description={`Icon Buttons turn Icons into clickable actions`}
          importCode={`import { IconButton } from 'material-bread';`}
          docsLink={'https://material.io/design/iconography/product-icons.html'}
          componentDescription={`IconButtons are convenient components for adding onPress and Ripple to icons.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            IconButton,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/iconbutton#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
