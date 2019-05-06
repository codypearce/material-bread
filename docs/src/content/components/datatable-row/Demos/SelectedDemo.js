import React from 'react';
import { ComponentDemo, CodeInline } from '@components';
import {
  DataTable,
  DataTableRow,
  DataTableCell,
} from '../../../../../../src/index';

export const code = `class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        checkedOne: false,
        checkedTwo: false,
        checkedThree: false,
    }
  }
  render() {
    return (
        <DataTable>
            <DataTableRow>
                <DataTableCell
                    text={'Desert'}
                    type={'header'}
                    borderRight
                    flex={2}
                />
                <DataTableCell text={'Calories'} type={'header'} right />
                <DataTableCell text={'Fat (g)'} type={'header'} right />
                <DataTableCell text={'Carbs (g)'} type={'header'} right />
                <DataTableCell text={'Protein (g)'} type={'header'} right />
            </DataTableRow>
            <DataTableRow
                hover
                selected={this.state.checkedOne}
                onPress={() =>
                    this.setState({ checkedOne: !this.state.checkedOne })
                }>
                <DataTableCell text={'Frozen yogurt'} borderRight flex={2} />
                <DataTableCell text={'159'} right />
                <DataTableCell text={'6.0'} right />
                <DataTableCell text={'24'} right />
                <DataTableCell text={'4'} right />
            </DataTableRow>
            <DataTableRow
                hover
                selected={this.state.checkedTwo}
                onPress={() =>
                    this.setState({ checkedTwo: !this.state.checkedTwo })
                }>
                <DataTableCell text={'Ice Cream Sandwich'} borderRight flex={2} />
                <DataTableCell text={'237'} right />
                <DataTableCell text={'9.0'} right />
                <DataTableCell text={'37'} right />
                <DataTableCell text={'4.3'} right />
            </DataTableRow>
            <DataTableRow
                hover
                selected={this.state.checkedThree}
                onPress={() =>
                    this.setState({ checkedThree: !this.state.checkedThree })
                }>
                <DataTableCell text={'Eclair'} borderRight flex={2} />
                <DataTableCell text={'262'} right />
                <DataTableCell text={'16.0'} right />
                <DataTableCell text={'24'} right />
                <DataTableCell text={'6.0'} right />
            </DataTableRow>
        </DataTable>
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Selected'}
    sectionHref={`${pageHref}#selected`}
    sectionId={'selected'}
    description={
      <div>
        If you just want selected rows without checkboxes, then remove
        <CodeInline code="showCheckbox" type="prop" /> and change{' '}
        <CodeInline code="onPressCheckbox" type="prop" /> to simply{' '}
        <CodeInline code="onPress" type="prop" />
      </div>
    }
    code={code}
    scope={{ DataTable, DataTableRow, DataTableCell }}
  />
);
export default SubtitleDemo;
