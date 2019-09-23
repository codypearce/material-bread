import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['allowOverlap', 'Allow overlap for markers', 'bool', 'false'],
  ['disableOne', 'Disables marker on the left', 'bool', ''],
  ['disableTwo', 'Disables marker on the right', 'bool', ''],
  ['markerColor', 'Color of marker', 'string', 'theme.primary.main'],
  ['max', 'Maxium number for the either marker', 'number', '100'],
  ['min', 'Minium number for the either marker', 'number', '0'],
  ['onValuesChange', 'Callback as values change', 'func', ''],
  ['onValuesChangeEnd', 'Callback when letting go of marker', 'func', ''],
  ['sliderLength', 'The defined width of the slider', 'number', '280'],
  ['step', 'Number that marker jumps to next value', 'number', '1'],
  ['style', 'Styles root element', 'object', ''],
  ['trackColor', 'Color of track', 'string', 'theme.primary.main'],
  ['values', 'Array of starting values for each marker', 'array', ''],
];

export default createTableData(propData);
