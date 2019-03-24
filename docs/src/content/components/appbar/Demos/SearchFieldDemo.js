import React from 'react';
import { CodeInline, ComponentDemo } from '@components';
import { Appbar, IconButton, SearchField } from '../../../../../../src/index';

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
        navigationType={'menu'}
        actionItems={[
          <SearchField 
            style={{
              marginHorizontal: 24, 
              flex: this.state.isSearching ? 1 : -1
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
        navigationType={'close'}
      />
    );
  }
}`;

const WithSearchField = pageHref => (
  <ComponentDemo
    sectionName={'Search Field'}
    sectionHref={`${pageHref}#search-field`}
    sectionId={'search-field'}
    description={
      <div>
        You can add a <CodeInline code="SearchField" type={'element'} /> or any
        other component directly in the{' '}
        <CodeInline code="Appbar" type={'element'} />
      </div>
    }
    code={code}
    scope={{ Appbar, IconButton, SearchField }}
  />
);
export default WithSearchField;
