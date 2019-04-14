import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import IconButton from '../../IconButton/IconButton';
import Icon from '../../Icon/Icon';
import styles from './DataTablePagination.styles';

class DataTablePagination extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    changePage: PropTypes.func,
    numberOfPages: PropTypes.number,
    page: PropTypes.number,
    perPage: PropTypes.number,
  };

  _renderRowsPerPage() {
    const { perPage } = this.props;
    return (
      <View style={styles.rowsPerPage}>
        <Text style={styles.rowsPerPageText} numberOfLines={1}>
          {'Rows per page:'}
        </Text>

        <Text style={styles.text}>{perPage}</Text>
        <Icon name={'arrow-drop-down'} size={24} color={'rgba(0,0,0,.6)'} />
      </View>
    );
  }

  _renderCurrentPage() {
    const { perPage, numberOfPages } = this.props;
    return (
      <Text
        style={
          styles.currentNumber
        }>{`1-${perPage} of ${numberOfPages} `}</Text>
    );
  }

  _renderNavigation() {
    const { page, numberOfPages, changePage } = this.props;
    return (
      <Fragment>
        <IconButton
          name={'chevron-left'}
          disabled={page === 0}
          onPress={() => changePage(page - 1)}
          size={24}
          style={{ marginRight: 24 }}
          color={'rgba(0,0,0,.87)'}
        />
        <IconButton
          name={'chevron-right'}
          disabled={page === numberOfPages - 1}
          onPress={() => changePage(page + 1)}
          size={24}
          color={'rgba(0,0,0,.87)'}
        />
      </Fragment>
    );
  }

  render() {
    const { style } = this.props;

    return (
      <View style={[styles.container, style]}>
        {this._renderRowsPerPage()}
        {this._renderCurrentPage()}
        {this._renderNavigation()}
      </View>
    );
  }
}

export default withTheme(DataTablePagination);
