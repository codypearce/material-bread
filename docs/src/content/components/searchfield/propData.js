import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['closeIconProps', 'Override props for closeIcon', 'object', ''],
  ['color', 'Background color', 'string', 'white'],
  ['inputProps', 'Override props for inputProps', 'object', ''],
  ['inputRef', 'Catch the reference of the TextInput component', 'func', ''],
  ['onChangeText', 'Callback when text is changed', 'func', ''],
  ['onCloseIcon', 'Callback when close icon is pressed', 'func', ''],
  ['onFocus', 'Callback when focused', 'func', ''],
  ['onBlur', 'Callback when blurred', 'func', ''],
  ['searchIconProps', 'Override props for searchIcon', 'object', ''],
  ['style', 'Styles root element', 'object', ''],
  ['textStyle', 'Styles text input element', 'object', ''],
  ['value', 'Search input', 'string', ''],
];

export default createTableData(propData);
