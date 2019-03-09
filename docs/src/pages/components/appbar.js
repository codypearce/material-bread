import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import { Appbar } from '../../../../src/index';

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
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Scrollspy
          items={['Component', 'Usage', 'Props', 'Demos', 'Appbar-with-search']}
          currentClassName="is-current"
          style={{ position: 'fixed', right: 50 }}
          className="SideMenu">
          <li className="SideMenu__ListItem">
            <a className="SideMenu__Link" href="#Component">
              Component
            </a>
          </li>
          <li className="SideMenu__ListItem">
            <a className="SideMenu__Link" href="#Usage">
              Usage
            </a>
          </li>
          <li className="SideMenu__ListItem">
            <a className="SideMenu__Link" href="#Props">
              Props
            </a>
          </li>
          <li className="SideMenu__ListItem">
            <a className="SideMenu__Link" href="#Demos">
              Demos
            </a>
          </li>
          <li className="SideMenu__ListItem SideMenu__ListItem--sub">
            <a className="SideMenu__Link " href="#Appbar-with-search">
              with search
            </a>
          </li>
        </Scrollspy>
        <h1
          style={{ fontSize: 42, letterSpacing: 1.2, marginBottom: 0 }}
          id="Example">
          Appbar top
        </h1>
        <p style={{ color: 'rgba(0, 0, 0, 0.57)', marginTop: 16 }}>
          The top app bar displays information and actions relating to the
          current screen.{' - '}
          <a
            href="https://material.io/design/components/app-bars-top.html#"
            style={{ textDecoration: 'none' }}>
            Material Docs
          </a>
        </p>
        <div className="row " style={{ marginTop: 32 }}>
          <pre
            style={{
              padding: 12,
            }}>
            <code
              className="language-javascript"
              style={{
                fontSize: 14,
              }}>{`import { Appbar } from 'material-bread'`}</code>
            <button>Copy</button>
          </pre>
        </div>

        <div style={{ marginTop: 60 }}>
          <LiveProvider
            code=" <Appbar title={'Page Title'} />"
            scope={{ Appbar }}
            mountStylesheet={false}>
            <LivePreview />
            <LiveEditor
              className={'language-javascript'}
              style={{ margin: 0, fontSize: 14 }}
            />
            <LiveError />
          </LiveProvider>
        </div>
        <div style={{ marginTop: 60 }} id="Usage">
          <h3 style={{ fontWeight: 400, fontSize: 28 }}>Usage</h3>
          <div className="row " style={{}}>
            <pre style={{ width: '100%' }}>
              <code
                className="language-jsx"
                style={{
                  fontSize: 14,
                }}>{`import react  from 'react';
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
}`}</code>
              <button>Copy</button>
            </pre>
          </div>
        </div>
        <div style={{ marginTop: 60 }} id="Props">
          <h3 style={{ fontWeight: 400, fontSize: 28 }}>Props</h3>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>Name</CustomTableCell>
                <CustomTableCell component="th" scope="row">
                  Description
                </CustomTableCell>
                <CustomTableCell align="right">Type</CustomTableCell>
                <CustomTableCell align="right">Default</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell>{row.name}</CustomTableCell>
                  <CustomTableCell component="th" scope="row">
                    {row.description}
                  </CustomTableCell>
                  <CustomTableCell align="right">{row.type}</CustomTableCell>
                  <CustomTableCell align="right">
                    {row.defaultValue}
                  </CustomTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div style={{ marginTop: 60 }} id="Demos">
          <h3 style={{ fontWeight: 400, fontSize: 28 }}>Demos</h3>
        </div>
        <div style={{ marginTop: 60 }} id="Appbar-with-search">
          <h3 style={{ fontWeight: 400, fontSize: 28 }}>Appbar with search</h3>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AppbarPage);
