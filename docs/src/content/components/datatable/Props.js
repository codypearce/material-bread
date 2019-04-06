import React from 'react';
import { ComponentProps } from '@components';
import propData from './propData';

const Props = pageHref => (
  <ComponentProps
    pageHref={pageHref}
    description={'See props for each sub component at each comoponent page.'}
    propData={propData}
  />
);
export default Props;
