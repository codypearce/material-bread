import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'bottomDivider',
    'Toggles a divider on the bottom of the section',
    'bool',
    'false',
  ],
  ['fullWidth', 'Toggles padding on either side', 'bool', 'false'],
  ['label', 'Adds section label at the top', 'string', ''],
  ['style', 'Styles container element', 'object', ''],
  [
    'topDivider',
    'Toggles a divider on the top of the section',
    'bool',
    'false',
  ],
];

export default createTableData(propData);
