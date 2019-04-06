import React from 'react';
import { ComponentProps, CodeInline, Link } from '@components';
import propData from './propData';

const Props = pageHref => (
  <ComponentProps
    pageHref={pageHref}
    description={
      <div>
        You can add any of the <CodeInline code="TouchableProps" type="prop" />{' '}
        or <CodeInline code="Ripple" type="prop" /> props to the root component
        and they will be spread onto the{' '}
        <CodeInline code="Ripple" type="element" /> component, please see the{' '}
        <Link href="/component/ripple">Ripple</Link> page to see full list of
        props.
      </div>
    }
    propData={propData}
  />
);
export default Props;
