import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['color', 'Background color for badge', 'string', 'primary'],

  ['containerStyle', 'Styles badge container', 'object', ''],

  ['content', 'Content displayed in badge', 'string || number', ''],

  ['left', 'Left position', 'number', 'auto'],

  ['onPress', 'Onpress callback', 'func', ''],

  [
    'position',
    'Positions content on children ',
    'string: left, right',
    'right',
  ],
  ['right', 'Right position', 'number', '0'],

  ['size', 'Size of badge, text scales with size', 'number', '16'],

  ['textColor', 'Text color for badge', 'string', 'white'],
  ['top', 'Top position', 'number', '0'],

  ['style', 'Styles badge element', 'object', ''],
  ['visible', 'Toggle visibility, triggers animation', 'bool', 'true'],
];

export default createTableData(propData);
