import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['borderLeft', 'Shows border on the left', 'bool', ''],
  ['borderRight', 'Shows border on the right', 'bool', ''],
  [
    'flex',
    'Sets flex, higher numbers take more space of table row',
    'flex',
    '1',
  ],
  ['onPress', 'Call back on cell', 'func', ''],
  ['right', 'Displays cell data on the right', 'bool', 'false'],
  ['sortingIcon', 'Toggles sorting icon', 'string: up, down', 'down'],
  ['style', 'Styles root element', 'object', ''],
  ['text', 'Text content for cell', 'object', ''],
  [
    'type',
    'Whether it is a header or normal cell',
    'string: header, normal',
    'normal',
  ],
];

export default createTableData(propData);
