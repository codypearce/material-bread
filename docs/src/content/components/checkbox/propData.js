import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['checkboxColor', 'Custom color for checked icon', 'string', ''],
  ['checkboxStyle', 'Styles checkbox icon', 'object', ''],

  ['checked', 'Wether the checkbox is filled or not', 'bool', 'false'],
  ['checkedIcon', 'Renders checked icon', 'string || node', 'check-box'],
  ['disabled', 'Toggles whether the checkbox can be changed', 'bool', ''],
  ['error', 'Toggles error state', 'bool', ''],
  [
    'icon',
    'Renders unchecked icon',
    'string || node',
    'check-box-outline-blank',
  ],
  ['indeterminate', 'Toggle indeteminate state', 'bool', ''],
  ['ios', 'Toggle dispalying ios checkbox', 'bool', 'false'],
  ['label', 'Text for label of checkbox, has Onpress', 'bool', ''],
  ['labelPos', 'Determines position of label', 'string', 'right '],
  ['labelStyle', 'Styles label', 'object', ''],
  ['onPress', 'Call back for clicking on the checkbox or label', 'func', ''],
  ['rippleColor', 'Custom ripple color', 'string', ''],
  [
    'rippleMatchesCheckbox',
    'Default Material is dark ripple,  this forces the ripple to match checkbox',
    'bool',
    'false',
  ],
  ['styles', 'Styles root container', 'object', ''],
  ['textStyle', 'Styles for the text component', 'object', ''],
  ['unCheckedColor', 'Custom color for unchecked icon', 'string', ''],
];

export default createTableData(propData);
