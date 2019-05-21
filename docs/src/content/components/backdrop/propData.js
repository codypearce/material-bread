import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'backLayerConcealed',
    'Renders the backlayer when frontlayer shows',
    'node',
    '',
  ],
  ['backLayerRevealed', 'Renders the full backlayer', 'node', ''],
  ['backLayerStyle', 'Styles the backlayer container element', 'object', ''],

  ['frontLayerStyle', 'Styles the frontlayer container element', 'object', ''],
  [
    'headerButtonStyle',
    'Styles the animated header icon container element',
    'object',
    '',
  ],
  [
    'initialOffset',
    'Height of backLayerConcealed and offset for frontLayer',
    'number',
    '56',
  ],
  [
    'offset',
    'Offset of frontLayer when backLayer is revealed',
    'number',
    'window.height',
  ],
  ['style', 'Styles root element', 'object', ''],
  ['subheader', 'Subheader for frontLayer', 'string', ''],
];

export default createTableData(propData);
