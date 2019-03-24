export const componentDemoCode = ` <Appbar
barType={"normal"}
title={'Page Title'} 
navigationType={'menu'}
onNavigation={() => console.log('onNavigation!')}
actionItems={[
  <Badge
    containerStyle={{marginRight: 16}}
    color={'#e10050'}
    textColor={'white'}
    size={14}
    content={77}>
    <IconButton name="favorite" size={24} color={'white'} />
  </Badge>,
  {name: 'search', onPress: () => console.log('onSearch')},
  {name: 'more-vert'},
]}
/>`;
