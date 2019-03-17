import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import {
  Icon,
  IconButton,
  Chip,
  Avatar,
  DataTable,
  DataTableHeader,
  DataTableCell,
  DataTablePagination,
  DataTableRow,
} from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import LiveEdit from '../../components/LiveEdit/LiveEdit';

const sections = [
  { name: 'Demos' },
  { name: 'delete', sub: true },
  { name: 'icons', sub: true },
  { name: 'custom', sub: true },
];

const propData = [
  createPropData(
    'chipStyle',
    'Style of chip',
    'string: outlined, flat',
    'flat',
  ),
  createPropData('color', 'Color of chip background and outline', 'string', ''),
  createPropData(
    'disabled',
    'Adds disabled styles and prevents clicking',
    'bool',
    '',
  ),
  createPropData(
    'leftIcon',
    'Displays component on the left of the content',
    'node',
    '',
  ),
  createPropData(
    'onDelete',
    'Callback func for delete icon, adding this will add delete icon',
    'func',
    '',
  ),
  createPropData('onPress', 'Callback func for chip, adds ripple', 'func', ''),
  createPropData('radius', 'Radius of chip and ripple', 'number', '16'),
  createPropData(
    'rightIcon',
    'Displays component on the right of the content',
    'node',
    '',
  ),
  createPropData('style', 'Styles root component', 'string', ''),
  createPropData('text', 'Text content for chip', 'string', ''),
  createPropData('textStyles', 'Styles text content', 'string', ''),
  createPropData('themeColor', 'Assigns a theme color to chip', 'string', ''),
  createPropData('visible', 'Toggle whether chip is shown or not', 'bool', ''),
];

const liveEditCode = `
class Table extends React.Component {
    constructor(props) {
      super(props)
      this.state = {

      }
    }
    render() {
      return (
        <DataTable>
            <DataTableHeader>
                <DataTableCell text={'Desert'} borderRight flex={2} />
                <DataTableCell text={'Calories'} right />
                <DataTableCell text={'Fat (g)'} right />
                <DataTableCell text={'Carbs (g)'} right />
                <DataTableCell text={'Protein (g)'} right />
            </DataTableHeader>
            <DataTableRow>
                <DataTableCell text={'Frozen yogurt'} borderRight flex={2} />
                <DataTableCell text={'159'} right />
                <DataTableCell text={'6.0'} right />
                <DataTableCell text={'24'} right />
                <DataTableCell text={'4'} right />
            </DataTableRow>
            <DataTableRow>
                <DataTableCell text={'Ice Cream Sandwhich'} borderRight flex={2} />
                <DataTableCell text={'237'} right />
                <DataTableCell text={'9.0'} right />
                <DataTableCell text={'37'} right />
                <DataTableCell text={'4.3'} right />
            </DataTableRow>
            <DataTableRow>
                <DataTableCell text={'Eclair'} borderRight flex={2} />
                <DataTableCell text={'262'} right />
                <DataTableCell text={'16.0'} right />
                <DataTableCell text={'24'} right />
                <DataTableCell text={'6.0'} right />
            </DataTableRow>
        </DataTable>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { DataTable, DataTableHeader, DataTableCell, DataTablePagination, DataTableRow, } from 'material-bread';

class Table extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <DataTable>
            <DataTableHeader>
                <DataTableCell text={'Desert'} borderRight flex={2} />
                <DataTableCell text={'Calories'} right />
                <DataTableCell text={'Fat (g)'} right />
                <DataTableCell text={'Carbs (g)'} right />
                <DataTableCell text={'Protein (g)'} right />
            </DataTableHeader>
            <DataTableRow>
                <DataTableCell text={'Frozen yogurt'} borderRight flex={2} />
                <DataTableCell text={'159'} right />
                <DataTableCell text={'6.0'} right />
                <DataTableCell text={'24'} right />
                <DataTableCell text={'4'} right />
            </DataTableRow>
        </DataTable>
      );
    }
}`;

const deleteCode = `class ChipPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chipOne: true,
      chipTwo: true,
      chipThree: true,
      chipFour: true,
      chipFive: true,
      chipSix: true
    }
  }
  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>    
          <Chip 
            text={'Chip'}
            visible={this.state.chipOne}
            onDelete={() => this.setState({chipOne: false})}   
          />       
          <Chip
              text={'Delete me'}
              visible={this.state.chipTwo}
              onDelete={() => this.setState({chipTwo: false})}   
          />
          <Chip
              text={'Alaska'}
              color={'#009688'}
              visible={this.state.chipThree}
              onDelete={() => this.setState({chipThree: false})}
              leftIcon={<Icon name="place" color={'white'} />}
          />
          <Chip
              text={'User'}
              themeColor={'primary'}
              onPress={() => console.log('clicked four')}
              visible={this.state.chipFour}
              onDelete={() => this.setState({chipFour: false})}
              leftIcon={<Avatar 
                type="image" 
                image={<Image source={{uri: 'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4'}} /> } 
            />}
          />
          <Chip 
              text={'Click me'}
              chipStyle={'outlined'}
              themeColor={'primary'} 
              onPress={() => console.log('clicked five')}
              visible={this.state.chipFive}
              onDelete={() => this.setState({chipFive: false})}
          />
          <Chip 
              text={'Biking'}
              chipStyle={'outlined'}
              themeColor={'secondary'}
              leftIcon={<Icon name="directions-bike" color={'#E91E63'} />}
              visible={this.state.chipSix}
              onDelete={() => this.setState({chipSix: false})}
          / >
      </View>
    );
  }
}`;

const iconCode = `class ChipPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chipTwo: true,
    }
  }
  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>    
          <Chip 
            text={'Mood'}
            leftIcon={<Icon name="mood" color={'#4CAF50'} />}
            rightIcon={<Icon name="mood-bad" color={'#F44336'} />}
            onPress={() => console.log('Mood')}
          />       
          <Chip
              text={'Delete me'}
              visible={this.state.chipTwo}
              onDelete={() => this.setState({chipTwo: false})}
              rightIcon={<Icon name="face" color={'#666666'} />}
          />
          <Chip
              text={'Alaska'}
              color={'#009688'}
              rightIcon={<IconButton name="place" color={'white'} onPress={() => console.log('clicked second right icon')} />}
              />
          <Chip
              text={'User'}
              themeColor={'primary'}
              onPress={() => console.log('clicked four')}
              visible={this.state.chipFour}
              onDelete={() => this.setState({chipFour: false})}
              leftIcon={<Avatar 
                type="image" 
                image={<Image source={{uri: 'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4'}} /> } 
              />}
          />
          <Chip 
              text={'Click me'}
              chipStyle={'outlined'}
              themeColor={'primary'} 
              onPress={() => console.log('clicked five')}
              leftIcon={<Avatar 
                type="text" 
                content="MP" 
                />
              }
          />
          <Chip 
              text={'Biking'}
              chipStyle={'outlined'}
              themeColor={'secondary'}
              leftIcon={<Icon name="directions-bike" color={'#E91E63'} />}
              rightIcon={<Avatar 
                type="icon" 
                content="directions-bike"
                contentColor="white"
                color={'#E91E63'}
              />}
          / >
      </View>
    );
  }
}`;

const custom = `class ChipPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chipOne: true,
      chipTwo: true,
    }
  }
  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>    
          <Chip 
            text={'Mood'}
            themeColor={'primary'}
            radius={2}
            leftIcon={<Icon name="mood" color={'#FBC02D'} />}
            onPress={() => console.log('Mood')}
            onDelete={() => this.setState({chipOne: false})}
            visible={this.state.chipOne}
          />       
          <Chip
              text={'Delete me'}
              radius={2}
              chipStye={'outlined'}
              color={'black'}
              visible={this.state.chipTwo}
              onDelete={() => this.setState({chipTwo: false})}
          />
          <Chip
              text={'Alaska'}
              color={'#009688'}
              radius={100}
              style={{height: 40}}
              visible={this.state.chipThree}
              onDelete={() => this.setState({chipThree: false})}
          />
          <Chip
              text={'User'}
              chipStyle={'outlined'}
              color={'black'}
              radius={2}
              style={{borderWidth: 3, height: 40}}
          >
            <Text style={{fontSize: 18, marginHorizontal: 12, fontWeight: '600'}}>React</Text>
          </Chip>
      </View>
    );
  }
}`;

export default class DataTablePage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'dataTable'}
          title={'Data Table'}
          description={'Data tables display sets of data.'}
          docsLink={'https://material.io/design/components/data-tables.html'}
          importCode={`import { DataTable } from 'material-bread';`}
          componentDescription={`DataTables are built from sub components, DataTableCell, DataTableHeader, DataTablePagination, and DataTableRow. Below is a simple example.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            DataTable,
            DataTableHeader,
            DataTableCell,
            DataTablePagination,
            DataTableRow,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/chip#demos" id="demos">
            <ComponentDescription text="Tables can have checkboxes, card headers, sorting tools, and pagination." />
          </Section>
          <Section name="Delete" href="/components/chip#delete" id="delete">
            <ComponentDescription text="Adding canDelete provides a prebuilt delete icon on the right side, it will replace any right icon provided. Toggle the visible prop to show or hide the chip." />
            <LiveEdit
              code={deleteCode}
              scope={{ View, Icon, Chip, Avatar, Image }}
            />
          </Section>
          <Section name="Icons" href="/components/chip#icon" id="icon">
            <ComponentDescription text="There are component spots on either side of the content in the chip. usually you psas an Icon, Avatar, or IconButton, but you can pass whatever you want. However, the right icon will be overwritten if you pass onPress, see second chip." />
            <LiveEdit
              code={iconCode}
              scope={{ View, Icon, Chip, Avatar, Image, IconButton }}
            />
          </Section>
          <Section name="Custom" href="/components/chip#custom" id="custom">
            <ComponentDescription text="You replace the text content component by passing in children, style the outer component, and change the radius to create more custom chips." />
            <LiveEdit
              code={custom}
              scope={{ View, Icon, Chip, Avatar, Image, IconButton, Text }}
            />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
