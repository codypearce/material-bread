export const withSubtitleCode = ` <Appbar
barType={'prominent'}
title={'Page Title'} 
subtitle={'Subtitle'}
navigationType={'menu'}
actionItems={[
  {name: 'favorite'},
  {name: 'search', onPress: () => console.log('onSearch')},
  <IconButton name="more-vert" size={24} color={'white'} />, 
]}
/>`;
