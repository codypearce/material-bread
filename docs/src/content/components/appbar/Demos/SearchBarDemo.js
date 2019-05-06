import React from 'react';
import { CodeInline, ComponentDemo } from '@components';
import { Appbar, IconButton, Searchbar } from '../../../../../../src/index';

export const code = `class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      isSearching: true
    };
  }
  
  render() {
    return (
      <Appbar
        title={'Page Title'} 
        navigation={'menu'}
        actionItems={[ 
          {name: 'search', onPress: () => this.setState({isSearching: true})},
          {name: 'favorite'},
          <IconButton name="more-vert" size={24} color={'white'} />, 
        ]}
        style={{paddingHorizontal: this.state.isSearching ? 0 : 16}}
      >
      {this.state.isSearching ?  
        <Searchbar
          style={{height: 56, width: '100%', paddingHorizontal: 16, backgroundColor: 'white'}}
          value={this.state.value}
          onChangeText={(value) => this.setState({value})}
          onNavigation={() => this.setState({isSearching: false})}
          onCloseIcon={() => this.setState({value: ''})}
        /> : null}
      </Appbar>
    );
  }
}`;

const WithSearchBar = pageHref => (
  <ComponentDemo
    sectionName={'Search Bar'}
    sectionHref={`${pageHref}#search-bar`}
    sectionId={'search-bar'}
    description={
      <div>
        The ability to replace components provides various ways to display
        contextual <CodeInline code="Appbar" type={'element'} />
        s. The following demonstrates how one might set up a full search bar.
        Click the back button to return to a regular
        <CodeInline code="Appbar" type={'element'} />, click the search icon to
        open the contextual search appbar.
      </div>
    }
    code={code}
    scope={{ Appbar, IconButton, Searchbar }}
  />
);
export default WithSearchBar;
