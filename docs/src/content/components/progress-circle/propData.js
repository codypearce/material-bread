import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'animationDuration',
    'Length of each animation loop in ms',
    'number',
    '1000',
  ],
  ['animationEasing', 'Easaing function', 'func', ''],
  ['color', 'Color of bar', 'sstring', ''],
  ['determinate', 'Whether bar continues to animate or not', 'bool', ''],
  ['easing', 'Easing function for bar animation', 'func', ''],
  [
    'indcatorStartPosition',
    'Where the indicator starts before the animation begins',
    'number',
    '0',
  ],
  [
    'shouldAnimateFirstValue',
    'Wether the determinatee value should animate at start',
    'bool',
    'true',
  ],
  ['size', 'Diameter of circle', 'number', '48'],
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
