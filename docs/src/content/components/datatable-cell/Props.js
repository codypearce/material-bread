import React from 'react';
import { ComponentProps, CodeInline, Link } from '@components';
import propData from './propData';

const Props = pageHref => (
  <ComponentProps
    pageHref={pageHref}
    description={
      <div>
        Usage depends entirely on what kind of navigation you are using in your
        app. For example, in <CodeInline code="react-navigation" /> you can
        replace the entire header with a{' '}
        <Link href="https://hackernoon.com/how-to-use-a-custom-header-and-custom-bottom-tab-bar-for-react-native-with-react-navigation-969a5d3cabb1">
          custom appbar
        </Link>
        .
      </div>
    }
    propData={propData}
  />
);
export default Props;
