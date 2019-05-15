import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['content', 'Text Content for tooltip', 'string', ''],

  ['style', 'Styles root element', 'object', ''],
  [
    'tooltipPosition',
    'Position for the tooltip: top, bottom, left, right',
    'string',
    'top',
  ],
];

export default createTableData(propData);
