import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'animationDuration',
    'Length of each animation loop in ms',
    'number',
    '1000',
  ],
  ['color', 'Color of bar', 'sstring', ''],
  ['determinate', 'Whether bar continues to animate or not', 'bool', ''],
  ['easing', 'Easing function for bar animation', 'func', ''],
  ['height', 'Height of track and indicator', 'number', '4'],
  [
    'indcatorStartPosition',
    'Where the indicator starts before the animation begins',
    'number',
    '0',
  ],

  ['style', 'Styles root element', 'object', ''],
  ['trackStyle', 'Styles track containing the indicator', 'object', ''],
  [
    'value',
    'Percent out of 100 the indcator should fill in determinate mode',
    'number',
    '',
  ],
  ['visible', 'Whether bar is visible or not', 'bool', ''],
];

export default createTableData(propData);
