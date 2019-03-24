export const withSearchBarCode = ` 
class Header extends React.Component {
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
      navigationType={'menu'}
      actionItems={[ 
        {name: 'search', onPress: () => this.setState({isSearching: true})},
        {name: 'favorite'},
        <IconButton name="more-vert" size={24} color={'white'} />, 
      ]}
      style={{paddingHorizontal: this.state.isSearching ? 0 : 16}}
    >
    {this.state.isSearching ?  
      <Searchbar
        style={{height: 56, width: '100%', paddingHorizontal: 16}}
        value={this.state.value}
        onChangeText={(value) => this.setState({value})}
        onNavigation={() => this.setState({isSearching: false})}
        onCloseIcon={() => this.setState({value: ''})}
      /> : null}
    </Appbar>
  );
}
}`;
