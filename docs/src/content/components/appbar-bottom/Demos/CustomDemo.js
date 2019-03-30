import React from 'react';
import { View } from 'react-native';

import { CodeInline, ComponentDemo } from '@components';
import { AppbarBottom, Button } from '../../../../../../src/index';

export const code = `const styles = {
    appbar: {
      backgroundColor: '#009688'
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
    fabStyle: {
      backgroundColor: '#00BCD4'
    }
  }
  
  render(
  <AppbarBottom appbarStyles={styles.appbar} fab fabPosition="end" fabStyles={styles.fabStyle} >
    <View style={styles.left}>
      <Button type="contained" containerStyle={[styles.button, {height: 34}]} text={'menu'}  style={{height:30}}/>
      <Button textColor="white" style={styles.button} text={'install'} />
      <Button textColor="white" style={[styles.button, {marginRight: 0}]} text="About" />
    </View>
  </AppbarBottom>
  )`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'No Fab'}
    sectionHref={`${pageHref}#no-fab`}
    sectionId={'no-fab'}
    description={
      <div>
        Adding <CodeInline code="children" type={'prop'} /> will replace all
        internal components with the provided components. This allows for full
        customization.
      </div>
    }
    code={code}
    scope={{ AppbarBottom, View, Button }}
    noInline
  />
);
export default SubtitleDemo;
