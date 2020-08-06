import React from 'react';
import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native';

import { shadow } from '../../';

import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

const pageWidth =
  Platform.OS == 'web' ? window.innerWidth : Dimensions.get('window').width;

const shadowTypeNum = 24;
const maxItemPerRow = shadowTypeNum / 4;
const itemWidth = pageWidth < 1200 ? pageWidth / 10 : 100;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: '8%',
    marginBottom: 30,
  },
  shadowItem: {
    padding: 8,
    height: itemWidth,
    width: itemWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    fontSize: itemWidth / 3,
  },
});

const shadowItems = [];
for (let i = 1; i <= shadowTypeNum; i++) {
  shadowItems.push(
    <View style={[styles.shadowItem, { ...shadow(i) }]}>
      <Text>{i}</Text>
    </View>,
  );
}
const shadowDividedItems = [];
for (let i = 0; i < maxItemPerRow; i++) {
  shadowDividedItems.push(
    <View style={styles.container}>
      {shadowItems.slice(maxItemPerRow * i, maxItemPerRow * (i + 1))}
    </View>,
  );
}

export default storiesOf('Utils|Shadows', module)
  .addParameters({ jest: ['Shadows'] })
  .add('Simple', () => (
    <Container>
      <Header
        title={'Shadows'}
        subtitle={
          'Use the shadow() function to add platform shadow to the style of any component'
        }
      />

      <View>{shadowDividedItems}</View>
    </Container>
  ));
