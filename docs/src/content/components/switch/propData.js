import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['checked', 'Whether switch is checked', 'bool', ''],
  ['color', 'Color of track and thumb', 'string', ''],
  [
    'label',
    'Renders an aribtrary node on either side of the switch',
    'node',
    '',
  ],
  ['labelPos', 'Determines the position of the label', 'right'],
  ['loading', 'Toggles loading state in thumb', 'false'],
  ['onPress', 'Callback when thumb or label is pressed', 'func', ''],
  ['style', 'Styles root element', 'object', ''],
  ['trackStyle', 'Styles the track element', 'object', ''],
  ['thumbStyle', 'Styles the thumb element', 'object', ''],
];

export default createTableData(propData);
