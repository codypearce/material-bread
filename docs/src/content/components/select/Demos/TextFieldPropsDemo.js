import React from 'react';
import { View } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
import { Select, Icon } from '../../../../../../src/index';

export const code = `class DropdownPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          selectedItem: '',
          selectedItemTwo: '',
          selectedItemThree: ''
      }
    }
    render() {
      const data = [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
      ];
      return (
        <View >
          <Select
            label={'Select'}
            menuItems={data}
            onSelect={value => this.setState({ selectedItem: value.name })}
            selectedItem={this.state.selectedItem}
            textFieldProps={{
              leadingIcon: (
                <Icon name={'date-range'} size={24} color={'#6e6e6e'} />
              ),
            }}
          />
          <Select
            label={'Select'}
            type={'filled'}
            menuItems={data}
            onSelect={value => this.setState({ selectedItemTwo: value.name })}
            selectedItem={this.state.selectedItemTwo}
            textFieldProps={{
              leadingIcon: (
                <Icon name={'date-range'} size={24} color={'#6e6e6e'} />
              ),
            }}
          />
          <Select
            label={'Select'}
            type={'outlined'}
            menuItems={data}
            onSelect={value => this.setState({ selectedItemThree: value.name })}
            selectedItem={this.state.selectedItemThree}
            textFieldProps={{
              leadingIcon: (
                <Icon name={'date-range'} size={24} color={'#6e6e6e'} />
              ),
            }}
          />
        </View>
      );
    }
  }`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'TextField Props'}
    sectionHref={`${pageHref}#textfield-props`}
    sectionId={'textfield-props'}
    code={code}
    description={
      <div>
        You can manipulate the base{' '}
        <CodeInline code="TextField" type="element" /> component by passing in{' '}
        <CodeInline code="textFieldProps" type="prop" />. This allows for
        example to add a <CodeInline code="leadingIcon" type="prop" />.
      </div>
    }
    scope={{ View, Select, Icon }}
  />
);
export default SubtitleDemo;
