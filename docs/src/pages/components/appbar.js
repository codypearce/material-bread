import React, { Component } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import SideScrollMenu from '../../components/SideScrollMenu';
import { Appbar } from '../../../../src/index';
import Prismjs from 'prismjs';

import ComponentHeader from '../../components/ComponentPage/ComponentHeader';
import SectionHeader from '../../components/SectionHeader';
import LiveEdit from '../../components/LiveEdit/LiveEdit';
import CodeBlock from '../../components/CodeBlock';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#263238',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 20,
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    overflowX: 'auto',
    borderRadius: 6,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, description, type, defaultValue) {
  id += 1;
  return { id, name, description, type, defaultValue };
}

const rows = [
  createData(
    'backgroundColor',
    'styles root backgroundColor',
    'string',
    'Theme.primaryColor',
  ),
  createData('position', 'adds position as expected', 'string', 'fixed'),
  createData('style', 'styles the root component', 'object', ''),
];

class AppbarPage extends Component {
  componentDidMount() {
    Prismjs.highlightAll();
  }
  render() {
    const { classes } = this.props;

    const sections = [
      { name: 'Component' },
      { name: 'Usage' },
      { name: 'Props' },
      { name: 'Demos' },
      { name: 'with search', sub: true },
    ];

    return (
      <div>
        <SideScrollMenu items={sections} />

        <ComponentHeader
          title={'Appbar Top'}
          description={
            'The top app bar displays information and actions relating to the current screen.'
          }
          docsLink={'https://material.io/design/components/app-bars-top.html'}
          code={`import { Appbar } from 'material-bread'`}
        />

        <div style={{ marginTop: 60 }} id="component">
          <SectionHeader name="Component" href="/components/appbar#component" />
          <LiveEdit code="<Appbar title={'Page Title'} />" scope={{ Appbar }} />
        </div>
        <div style={{ marginTop: 60 }} id="usage">
          <SectionHeader name="Usage" href="/components/appbar#usage" />

          <div className="row ">
            <CodeBlock
              code={`import react  from 'react';
import { View } from 'react-native';
import { Appbar } from 'material-bread';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Appbar title={'Page Title'} />
      <View>

    );
  }
}`}
              canCopy
            />
          </div>
        </div>
        <div style={{ marginTop: 60 }} id="props">
          <h3
            style={{ fontWeight: 400, fontSize: 28, marginBottom: 16 }}
            className="Section__header">
            <span>Props</span>{' '}
            <a className="HashLink" href="/components/appbar#props">
              #
            </a>
          </h3>
          <Table className={classes.table}>
            <TableHead style={{ borderRadius: 6 }}>
              <TableRow>
                <CustomTableCell
                  style={{
                    borderTopLeftRadius: 6,
                    borderBottomLeftRadius: 6,
                  }}>
                  Name
                </CustomTableCell>
                <CustomTableCell component="th" scope="row">
                  Description
                </CustomTableCell>
                <CustomTableCell>Type</CustomTableCell>
                <CustomTableCell
                  align="right"
                  style={{
                    borderTopRightRadius: 6,
                    borderBottomRightRadius: 6,
                  }}>
                  Default
                </CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell>{row.name}</CustomTableCell>
                  <CustomTableCell component="th" scope="row">
                    {row.description}
                  </CustomTableCell>
                  <CustomTableCell>{row.type}</CustomTableCell>
                  <CustomTableCell align="right">
                    {row.defaultValue}
                  </CustomTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div style={{ marginTop: 60 }} id="demos">
          <h3
            style={{ fontWeight: 400, fontSize: 28, marginBottom: 16 }}
            className="Section__header">
            <span>Demos</span>{' '}
            <a className="HashLink" href="/components/appbar#demos">
              #
            </a>
          </h3>
        </div>
        <div style={{ marginTop: 60 }} id="with-search">
          <h3
            style={{ fontWeight: 400, fontSize: 28, marginBottom: 16 }}
            className="Section__header">
            <span>Appbar with search</span>{' '}
            <a className="HashLink" href="/components/appbar#with-search">
              #
            </a>
          </h3>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AppbarPage);
