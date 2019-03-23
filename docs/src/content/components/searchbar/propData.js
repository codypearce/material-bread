import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['onChangeText', 'Callback when text is changed', 'func', ''],
  ['onCloseIcon', 'Callback when close icon is pressed', 'func', ''],
  ['onNavigation', 'Callback when navigation icon is Pressed', 'func', ''],
  ['style', 'Styles root element', 'object', ''],
  ['value', 'Search input', 'string', ''],
];

export default createTableData(propData);
