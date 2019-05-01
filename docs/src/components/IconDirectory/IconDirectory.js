import React, { Component } from 'react';
import icons from 'react-native-vector-icons/glyphmaps/MaterialIcons.json';
import IconBlock from './IconBlock';

import { FixedSizeGrid as Grid } from 'react-window';
import { Searchfield } from '../../../../src/index';

export default class IconDirectory extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    search: '',
  };

  _getResults = () => {
    const { search } = this.state;

    const iconNames = Object.keys(icons);

    if (search) {
      const query = search.toLowerCase();

      return iconNames.filter(
        item =>
          item.includes(query.replace(/\s/g, '-')) ||
          item.replace(/-/g, '').includes(query),
      );
    }

    return iconNames;
  };

  _handleInputChange = value => {
    this.setState({ search: value });
  };

  renderRow = ({ columnIndex, rowIndex, style }) => {
    const searchResults = this._getResults();

    const name = searchResults[columnIndex + rowIndex * 5];
    return (
      <div style={style}>
        <IconBlock name={name} />
      </div>
    );
  };
  render() {
    const searchResults = this._getResults();
    if (typeof window == 'undefined') {
      return null;
    }
    return (
      <div style={styles.container}>
        <Searchfield
          color={'rgb(38, 50, 56)'}
          value={this.state.search}
          onChangeText={this._handleInputChange}
          onCloseIcon={() => this.setState({ search: '' })}
          placeholder="Search Icons"
          style={{ height: 50, width: '100%', maxWidth: 820, marginBottom: 20 }}
        />
        <div style={styles.results}>
          <Grid
            columnCount={5}
            columnWidth={158}
            height={600}
            rowCount={searchResults.length / 5}
            rowHeight={116}
            width={820}>
            {this.renderRow}
          </Grid>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    marginBottom: 40,
  },
  results: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  searchBar: {
    border: 0,
    display: 'block',
    width: '100%',
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 3,
  },
};
