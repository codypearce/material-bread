import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'displayUntilPressOut',
    'Keep ripple at full size while holding press',
    'bool',
    'true',
  ],
  ['disabled', 'Disables ripple', 'bool', ''],
  ['onPress', 'Call back on ripple', 'func', ''],
  [
    'rippleCentered',
    'Whether the ripple starts at the center of the component or where you clicked',
    'bool',
    'false',
  ],
  ['rippleColor', 'Color of ripple', 'string', 'rgba(0, 0, 0, .87)'],
  ['rippleContainerBorderRadius', 'Border Radius of ripple', 'number', '0'],
  [
    'rippleDuration',
    'Animation Duration of ripple to fill the entire component',
    'duration',
    '400',
  ],
  ['rippleOpacity', 'Opacity of ripple', 'number', '0.3'],
  ['rippleSize', 'Determines the size of ripple', 'number', '0'],
  ['rippleSequential', 'Ripple should start in sequence', 'bool', 'false'],
  ['style', 'Styles root element', 'object', ''],
];

export default createTableData(propData);
