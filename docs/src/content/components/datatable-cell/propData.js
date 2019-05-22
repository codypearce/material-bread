import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['borderLeft', 'Shows border on the left', 'bool', ''],
  ['borderRight', 'Shows border on the right', 'bool', ''],

  ['onPress', 'Call back on cell', 'func', ''],
  ['minWidth', 'Determines minWidth for each cell', 'number', '100'],
  ['relativeWidth', 'Sets relativeWidth factor to minWidth', 'integer', '1'],
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
