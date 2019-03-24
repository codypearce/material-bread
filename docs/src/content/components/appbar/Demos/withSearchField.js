export const withSearchFieldCode = ` 
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
