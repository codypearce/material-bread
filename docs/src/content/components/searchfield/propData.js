import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['color', 'Background color', 'string', 'white'],
  ['onChangeText', 'Callback when text is changed', 'func', ''],
  ['onCloseIcon', 'Callback when close icon is pressed', 'func', ''],
  ['onFocus', 'Callback when focused', 'func', ''],
  ['onBlur', 'Callback when blurred', 'func', ''],
  ['style', 'Styles root element', 'object', ''],
  ['value', 'Search input', 'string', ''],
];

export default createTableData(propData);
