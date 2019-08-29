import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['header', 'Header component that renders above the content', 'node', ''],
  ['headerContainerStyle', 'Styles container around header', 'object', ''],
  ['footer', 'Footer component that renders below the content', 'node', ''],
  ['footerContainerStyle', 'Styles container around footer', 'object', ''],
  ['scrollComponent', 'Custom scroll component', 'node', ''],

  ['scrollViewProps', 'Props spread onto the scrollview', 'object', ''],
  ['scrollViewStyle', 'Styles scrollview', 'object', ''],
  ['style', 'Styles root element', 'object', ''],
];

export default createTableData(propData);
