import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['onChangeText', 'Callback when text is changed', 'func', ''],
  ['onCloseIcon', 'Callback when close icon is pressed', 'func', ''],
  ['onNavigation', 'Callback when navigation icon is Pressed', 'func', ''],
  ['style', 'Styles root element', 'object', ''],
  ['value', 'Search input', 'string', ''],
  ['placeholder', 'Placeholder for input search', 'string', 'Search'],
  ['navigationIcon', 'Navigation icon name', 'string', 'arrow-back'],
  [
    'navigationIconComponent',
    'One of the Icon components from react-native-vector-icons',
    'function',
    '',
  ],
  ['closeIcon', 'Close icon name', 'string', 'close'],
  [
    'closeIconComponent',
    'One of the Icon components from react-native-vector-icons',
    'function',
    '',
  ],
];

export default createTableData(propData);
