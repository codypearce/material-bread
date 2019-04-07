import React, { Component } from 'react';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

export default class TypographyPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'typography'}
          title={'Typography'}
          description={`Typography Components follow a design system to convey meaning.`}
          importCode={`import { Heading, Subtitle, BodyText, Caption, Overline} from 'material-bread';`}
          docsLink={
            'https://material.io/design/typography/the-type-system.html'
          }
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/typography'} />
          <Usage pageHref={'/components/typography'} />
          <Props pageHref={'/components/typography'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
