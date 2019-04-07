import React from 'react';
import { View } from 'react-native';
import { CodeInline, ComponentDemo } from '@components';
import { Appbar, Button } from '../../../../../../src/index';

export const code = `const styles = {
  appbar: {
    alignItems: 'center', 
    justifyContent:'space-between', 
    height: 60, 
    paddingVertical: 0, 
    paddingHorizontal: 8,
    backgroundColor: 'black',
    overflowX: 'auto'
  },
  left: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent:'flex-start',
  },
  button: {
    height: 30, 
    alignSelf: 'center', 
    marginRight: 16
  },
}
  
render(
  <Appbar style={styles.appbar}>
  <View style={styles.left}>
    <Button text={'Home'} textColor="white" style={styles.button} />
    <Button text={'Install'} textColor="white" style={styles.button} />
    <Button text={'Docs'} textColor="white" style={styles.button} />
    <Button text={'About'} textColor="white" style={[styles.button, {marginRight: 0}]} />
  </View>
  <Button text={'Buy'} type={'contained'} textColor="white" containerStyle={[styles.button, {marginRight: 0}]} />
  </Appbar>
)`;

const CustomDemo = pageHref => (
  <ComponentDemo
    sectionName={'Custom'}
    sectionHref={`${pageHref}#custom`}
    sectionId={'custom'}
    description={
      <div>
        Adding <CodeInline code="children" type={'prop'} /> will replace all
        internal components with the provided components.
      </div>
    }
    code={code}
    scope={{ Appbar, Button, View }}
    noInline
  />
);
export default CustomDemo;
