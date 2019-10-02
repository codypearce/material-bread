import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['color', 'Background color', 'string', 'white'],
  ['iconProps', 'Override properties for the icons', 'object', ''],
  ['inputRef', 'Catch the reference of the TextInput component', 'func', ''],
  ['onChangeText', 'Callback when text is changed', 'func', ''],
  ['onCloseIcon', 'Callback when close icon is pressed', 'func', ''],
  ['onFocus', 'Callback when focused', 'func', ''],
  ['onBlur', 'Callback when blurred', 'func', ''],
  ['style', 'Styles root element', 'object', ''],
  ['textStyle', 'Styles text input element', 'object', ''],
  ['value', 'Search input', 'string', ''],
];

export default createTableData(propData);
