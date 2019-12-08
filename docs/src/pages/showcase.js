import React, { Component } from 'react';
import { View } from 'react-native';
import Prism from 'prismjs';
import {
  PageTitle,
  ComponentSubtitle,
  Section,
  ComponentDescription,
  PlatformButton,
  Helmet,
} from '@components';
import materialBread from '../assets/material-bread-docs.png';
import rni from '../assets/rni.png';

class Index extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div style={styles.container}>
        <Helmet title={'Showcase'} />
        <PageTitle>Showcase</PageTitle>
        <ComponentSubtitle description={'Apps using Material Bread'} />

        <Section
          name="Apps"
          id="apps"
          href="/showcase#apps"
          style={{ marginTop: 0 }}>
          <ComponentDescription text={<div />} />
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <PlatformButton
              href={'http://material-bread.org/'}
              img={materialBread}
              text={'Material Bread'}
              width={250}
              imgWidth={200}
              height={200}
              platforms={['Website']}
            />

            <PlatformButton
              href={'https://www.reactnativeinfinity.com/'}
              img={rni}
              text={'React Native Infinity'}
              width={250}
              imgWidth={200}
              height={200}
              platforms={['Website']}
            />
          </View>
        </Section>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    paddingBottom: 60,
  },
  code: {},
};

export default Index;
