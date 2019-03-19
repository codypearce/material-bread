import React, { Component } from 'react';
import Section from '../../components/Section';
import PageTitle from '../../components/PageTitle';
import CodeInline from '../../components/CodeInline';
import IconDirectory from '../../components/IconDirectory/IconDirectory';
import Link from '../../components/Link';

export default class IconPage extends Component {
  render() {
    return (
      <div>
        <PageTitle>Icons</PageTitle>
        <p
          style={{
            color: 'rgba(0, 0, 0, 0.67)',
            marginTop: 16,
            lineHeight: 1.5,
          }}>
          Material Icons are provided by{' '}
          <Link href="https://github.com/oblador/react-native-vector-icons">
            react-native-vector-icons
          </Link>
          . However some platforms might require extra steps to get working,
          please visit the getting started pages to learn more.
        </p>

        <Section name="Using" href="/style/icons#Using" id="Using">
          <p
            style={{
              color: 'rgba(0, 0, 0, 0.67)',
              marginTop: 16,
              lineHeight: 1.5,
            }}>
            Material Icon{' '}
            <Link href="https://material.io/tools/icons">documentation</Link>{' '}
            shows icon names separated by dashes. To use icons with{' '}
            <CodeInline code={'react-native-vector-icons'} /> you need to pass
            them as dashes. For example <CodeInline code={'3d_rotation'} />{' '}
            becomes <CodeInline code={'3d-rotation'} />.
          </p>
          <p
            style={{
              color: 'rgba(0, 0, 0, 0.67)',
              marginTop: 16,
              lineHeight: 1.5,
            }}>
            All available icons are rendered with{' '}
            <CodeInline code={'react-native-vector-icons'} />. Click an icon to
            copy the icon name.
          </p>
          <IconDirectory />
        </Section>
      </div>
    );
  }
}
