import React, { Component } from 'react';
import IconDirectory from '../../components/IconDirectory/IconDirectory';
import { CodeInline, Section, PageTitle, Link, P, Helmet } from '@components';
export default class IconPage extends Component {
  render() {
    return (
      <div>
        <Helmet title={'Material Icons'} />
        <PageTitle>Icons</PageTitle>
        <P>
          Material Icons are provided by{' '}
          <Link href="https://github.com/oblador/react-native-vector-icons">
            react-native-vector-icons
          </Link>
          . However some platforms might require extra steps to get working,
          please visit the getting started pages to learn more.
        </P>

        <Section name="Using" href="/style/icons#Using" id="Using">
          <P>
            Material Icon{' '}
            <Link href="https://material.io/tools/icons">documentation</Link>{' '}
            shows icon names separated by dashes. To use icons with{' '}
            <CodeInline code={'react-native-vector-icons'} /> you need to pass
            them as dashes. For example <CodeInline code={'3d_rotation'} />{' '}
            becomes <CodeInline code={'3d-rotation'} />.
          </P>
          <P>
            All available icons are rendered with{' '}
            <CodeInline code={'react-native-vector-icons'} />. Click an icon to
            copy the icon name.
          </P>
          <IconDirectory />
        </Section>
      </div>
    );
  }
}
