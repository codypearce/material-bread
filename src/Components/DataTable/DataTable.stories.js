import React from 'react';

import { DataTable, DataTableCell, DataTableRow } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

export default storiesOf('Components|Data Table', module)
  .addParameters({ jest: ['DataTable'] })
  .add('Simple', () => (
    <Container>
      <Header title={'DataTable'} />

      <DataTable>
        <DataTableRow>
          <DataTableCell
            text={'Desert'}
            type={'header'}
            borderRight
            relativeWidth={2}
          />
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
            text={'Ice Cream Sandwich'}
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
  ))
  .add('Custom', () => (
    <Container>
      <Header title={'DataTable'} />

      <DataTable
        style={{
          borderRadius: 20,
          backgroundColor: '#3C3C46',
          color: 'white',
        }}>
        <DataTableRow>
          <DataTableCell
            text={'Desert'}
            type={'header'}
            borderRight
            relativeWidth={2}
            textStyle={{ color: 'white', fontWeight: 700, fontSize: 18 }}
          />
          <DataTableCell
            text={'Calories'}
            type={'header'}
            right
            textStyle={{ color: 'white', fontWeight: 700, fontSize: 18 }}
          />
          <DataTableCell
            text={'Fat (g)'}
            type={'header'}
            right
            textStyle={{ color: 'white', fontWeight: 700, fontSize: 18 }}
          />
          <DataTableCell
            text={'Carbs (g)'}
            type={'header'}
            right
            textStyle={{ color: 'white', fontWeight: 700, fontSize: 18 }}
          />
          <DataTableCell
            text={'Protein (g)'}
            type={'header'}
            textStyle={{ color: 'white', fontWeight: 700, fontSize: 18 }}
            right
          />
        </DataTableRow>
        <DataTableRow>
          <DataTableCell
            text={'Frozen yogurt'}
            borderRight
            relativeWidth={2}
            textStyle={{ color: '#8BC34A' }}
          />
          <DataTableCell text={'159'} right textStyle={{ color: 'white' }} />
          <DataTableCell text={'6.0'} right textStyle={{ color: 'white' }} />
          <DataTableCell text={'24'} right textStyle={{ color: 'white' }} />
          <DataTableCell text={'4'} right textStyle={{ color: 'white' }} />
        </DataTableRow>
        <DataTableRow>
          <DataTableCell
            text={'Ice Cream Sandwich'}
            borderRight
            relativeWidth={2}
            textStyle={{ color: '#8BC34A' }}
          />
          <DataTableCell text={'237'} right textStyle={{ color: 'white' }} />
          <DataTableCell text={'9.0'} right textStyle={{ color: 'white' }} />
          <DataTableCell text={'37'} right textStyle={{ color: 'white' }} />
          <DataTableCell text={'4.3'} right textStyle={{ color: 'white' }} />
        </DataTableRow>
        <DataTableRow>
          <DataTableCell
            text={'Eclair'}
            borderRight
            textStyle={{ color: '#8BC34A' }}
            relativeWidth={2}
          />
          <DataTableCell text={'262'} right textStyle={{ color: 'white' }} />
          <DataTableCell text={'16.0'} right textStyle={{ color: 'white' }} />
          <DataTableCell text={'24'} right textStyle={{ color: 'white' }} />
          <DataTableCell text={'6.0'} right textStyle={{ color: 'white' }} />
        </DataTableRow>
      </DataTable>
    </Container>
  ));
