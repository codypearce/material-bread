import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../../components/Section';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import { Badge, IconButton, Icon } from '../../../../../src/index';
import ComponentDescription from '../../../components/ComponentPage/ComponentDescription';
import propData from '../../../content/components/badge/propData';

const sections = [{ name: 'Demos' }];

const liveEditCode = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Badge size={14} content={4}>
        <Icon name="favorite" size={32} />
    </Badge>
    <Badge size={14} content={77} color={'red'}>
        <IconButton name="mail" size={24} />
    </Badge>
    <Badge size={14} content={7} position={'left'} textColor={'pink'} >
        <IconButton name="info" size={24} />
    </Badge>
    <Badge size={24} content={1023} position={'left'}>
        <IconButton name="message" size={40} />
    </Badge>
    <Badge size={24} content={24} />
    <Badge size={16} content={99} />
</View>`;

const usageCode = `import React, { Component } from 'react';
import { Badge, IconButton } from 'material-bread';

export default class MessageIcon extends Component {
  render() {
    return (
        <Badge size={24} content={10} position={'left'}>
            <IconButton name="message" size={40} />
        </Badge>
    );
  }
}`;

export default class BadgePage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'badge'}
          title={'Badge'}
          description={'Badges display status information.'}
          componentDescription={
            'Badges can be used in two ways: standalone or wrapping a component.'
          }
          importCode={`import { Badge } from 'material-bread';`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{ IconButton, Icon, View, Badge }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/badge#demos" id="demos">
            <ComponentDescription text="There are more demos in the playground." />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
