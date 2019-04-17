import React from 'react';
import { CodeInline, ComponentDemo } from '@components';
import { Appbar, IconButton, Searchfield } from '../../../../../../src/index';

export const code = ` 
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isSearching: false,
      value: ''
    };
  }

  render() {
    return (
      <Appbar
        title={'Page Title'} 
        navigation={'menu'}
        actionItems={[
          <Searchfield 
            style={{
              marginHorizontal: 24, 
              flexGrow: this.state.isSearching ? 1 : 0,
              flexShrink: 0
            }}
            primary
            value={this.state.value}
            onChangeText={(value) => this.setState({value})}
            onFocus={() => this.setState({isSearching: true})}
            onBlur={() => this.setState({isSearching: false})}
            onCloseIcon={() => this.setState({value: ''})}
          />,

          {name: 'favorite'},
          <IconButton name="more-vert" size={24} color={'white'} />, 
        ]}
        navigation={'close'}
      />
    );
  }
}`;

const WithSearchField = pageHref => (
  <ComponentDemo
    sectionName={'Searchfield'}
    sectionHref={`${pageHref}#search-field`}
    sectionId={'search-field'}
    description={
      <div>
        You can add a <CodeInline code="Searchfield" type={'element'} /> or any
        other component directly in the{' '}
        <CodeInline code="Appbar" type={'element'} />
      </div>
    }
    code={code}
    scope={{ Appbar, IconButton, Searchfield }}
  />
);
export default WithSearchField;
