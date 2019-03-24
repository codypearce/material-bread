import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../../components/Section';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import { Icon } from '../../../../../src/index';
import ComponentDescription from '../../../components/ComponentPage/ComponentDescription';
import propData from '../../../content/components/icon/propData';

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
          <Icon name="favorite" size={48} />
        </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'material-bread';

class IconPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <Icon name="favorite" size={48} />
      </View>
    );
  }
}`;

export default class IconPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'icon'}
          title={'Icon'}
          description={`Icons symbolize meaning and represent common actions.`}
          importCode={`import { Icon } from 'material-bread';`}
          docsLink={'https://material.io/design/iconography/product-icons.html'}
          componentDescription={`Icons are provided by react-native-vector-icons, you can learn more about these icons in the style section on icons`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            Icon,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/icon#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
