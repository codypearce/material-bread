import React, { Component } from 'react';
import ColorPallete from './ColorPalette';

const colorList = [
  { name: 'Red', color: 'red', hasExtra: true },
  { name: 'Pink', color: 'pink', hasExtra: true },
  { name: 'Purple', color: 'purple', hasExtra: true },
  { name: 'Deep Purple', color: 'deepPurple', hasExtra: true },
  { name: 'Indigo', color: 'indigo', hasExtra: true },
  { name: 'Blue', color: 'blue', hasExtra: true },
  { name: 'Light Blue', color: 'lightBlue', hasExtra: true },
  { name: 'Cyan', color: 'cyan', hasExtra: true },
  { name: 'Teal', color: 'teal', hasExtra: true },
  { name: 'Green', color: 'green', hasExtra: true },
  { name: 'Light Green', color: 'lightGreen', hasExtra: true },
  { name: 'Lime', color: 'lime', hasExtra: true },
  { name: 'Yellow', color: 'yellow', hasExtra: true },
  { name: 'Amber', color: 'amber', hasExtra: true },
  { name: 'Orange', color: 'orange', hasExtra: true },
  { name: 'Brown', color: 'brown' },
  { name: 'Grey', color: 'grey' },
  { name: 'Blue Grey', color: 'blueGrey' },
];

class FullPalette extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {colorList.map(item => {
          return (
            <ColorPallete
              key={item.name}
              color={item.color}
              name={item.name}
              hasExtra={item.hasExtra}
              style={{
                marginBottom: 16,
                marginRight: 16,
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: 'calc(30% - 16)',
                minWidth: 250,
              }}
            />
          );
        })}
      </div>
    );
  }
}

export default FullPalette;
