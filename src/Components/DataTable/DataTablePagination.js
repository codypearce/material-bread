import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import withTheme from '../../Theme/withTheme';
import Icon from '../Icon';

class DataTablePagination extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    onPageChange: PropTypes.func,
    numberOfPages: PropTypes.number,
    page: PropTypes.number,
    perPage: PropTypes.number,
  };

  render() {
    const { perPage, page, numberOfPages, onPageChange, style } = this.props;

    return (
      <View style={[styles.container, style]}>
        <View style={styles.rowsPerPage}>
          <Text style={styles.rowsPerPageText} numberOfLines={1}>
            {'Rows per page:'}
          </Text>

          <Text style={styles.text}>{perPage}</Text>
          <Icon name={'arrow-drop-down'} size={24} color={'rgba(0,0,0,.6)'} />
        </View>

        <Text
          style={
            styles.currentNumber
          }>{`1-${perPage} of ${numberOfPages} `}</Text>
        <Icon
          name={'chevron-left'}
          disabled={page === 0}
          onPress={() => onPageChange(page - 1)}
          size={24}
          style={{ marginRight: 24 }}
        />
        <Icon
          name={'chevron-right'}
          disabled={page === numberOfPages - 1}
          onPress={() => onPageChange(page + 1)}
          size={24}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },

  currentNumber: {
    fontSize: 12,
    marginRight: 44 / 2,
    color: 'rgba(0,0,0,.6)',
  },
  rowsPerPage: {
    fontSize: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
    color: 'rgba(0,0,0,.6)',
  },
  rowsPerPageText: {
    fontSize: 12,
    marginRight: 24,
    color: 'rgba(0,0,0,.6)',
  },
  text: {
    fontSize: 12,
    color: 'rgba(0,0,0,.6)',
  },
});
export default withTheme(DataTablePagination);
