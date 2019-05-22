import React from 'react';

import {
  DataTable,
  DataTableHeader,
  DataTableCell,
  DataTableRow,
} from '../../../';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

export default storiesOf('Components|Data Table/Header', module)
  .addParameters({ jest: ['DataTableHeader'] })

  .add('Header', () => (
    <Container>
      <Header title={'DataTable Header'} />
      <DataTable>
        <DataTableHeader
          title={'Nutrition'}
          rightActions={[{ name: 'filter-list' }, { name: 'more-vert' }]}
        />
        <DataTableRow>
          <DataTableCell text={'Desert'} type={'header'} relativeWidth={2} />
          <DataTableCell text={'Calories'} type={'header'} right />
          <DataTableCell text={'Fat (g)'} type={'header'} right />
          <DataTableCell text={'Carbs (g)'} type={'header'} right />
          <DataTableCell text={'Protein (g)'} type={'header'} right />
        </DataTableRow>
        <DataTableRow>
          <DataTableCell text={'Frozen yogurt'} borderRight relativeWidth={2} />
          <DataTableCell text={'159'} right />
          <DataTableCell text={'6.0'} right />
          <DataTableCell text={'24'} right />
          <DataTableCell text={'4'} right />
        </DataTableRow>
        <DataTableRow>
          <DataTableCell
            text={'Ice Cream Sandwhich'}
            borderRight
            relativeWidth={2}
          />
          <DataTableCell text={'237'} right />
          <DataTableCell text={'9.0'} right />
          <DataTableCell text={'37'} right />
          <DataTableCell text={'4.3'} right />
        </DataTableRow>
        <DataTableRow>
          <DataTableCell text={'Eclair'} borderRight relativeWidth={2} />
          <DataTableCell text={'262'} right />
          <DataTableCell text={'16.0'} right />
          <DataTableCell text={'24'} right />
          <DataTableCell text={'6.0'} right />
        </DataTableRow>
      </DataTable>
    </Container>
  ));
