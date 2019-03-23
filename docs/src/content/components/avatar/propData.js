import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'color',
    'Background color for avatar, applies to text and icon',
    'string',
    'primary',
  ],
  ['content', 'Name of icon or string to be rendered', 'string', ''],
  ['contentColor', 'Color of icon or text', 'string', 'white'],
  ['contentSize', 'Custom size that is not relative to avatar', 'number', ''],
  ['contentStyles', 'Styles applied to content', 'object', ''],

  ['image', 'Display image element as avatar', 'node', ''],

  ['onPress', 'Onpress callback', 'func', ''],
  ['ripple', 'enables ripple if onPress is provided', 'bool', 'false'],
  ['size', 'Size of avatar, content scales with size', 'number', '24'],

  ['type', 'Indicates which type of avatar', 'string: image, icon, text', ''],

  ['style', 'Styles root element', 'object', ''],
];

export default createTableData(propData);
