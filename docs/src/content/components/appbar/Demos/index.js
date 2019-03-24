import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import Section from '../../../../components/Section';
import {
  Appbar,
  IconButton,
  Button,
  SearchField,
  Searchbar,
} from '../../../../../../src/index';
import LiveEdit from '../../../../components/LiveEdit/LiveEdit';
import ComponentDescription from '../../../../components/ComponentPage/ComponentDescription';
import CodeInline from '../../../../components/CodeInline';

import { customCode } from './custom';
import { withSubtitleCode } from './subtitle';
import { withSearchBarCode } from './withSearchBar';
import { withSearchFieldCode } from './withSearchField';
import WithImage from './WithImage';

export default class Demos extends Component {
  render() {
    return (
      <div>
        <Section name="Demos" href="/components/appbar#demos" id="demos">
          <ComponentDescription text="Below are demos of various features and common patterns. You can see even more examples in the Storybook playground." />
        </Section>

        <WithImage />
        <Section
          name="Search field"
          href="/components/appbar#search-field"
          id="search-field">
          <ComponentDescription
            text={
              <div>
                You can add a <CodeInline code="SearchField" type={'element'} />{' '}
                or any other component directly in the{' '}
                <CodeInline code="Appbar" type={'element'} />
              </div>
            }
          />
          <LiveEdit
            code={withSearchFieldCode}
            scope={{ Appbar, IconButton, SearchField }}
          />
        </Section>

        <Section
          name="Full Search bar"
          href="/components/appbar#search-bar"
          id="search-bar">
          <ComponentDescription
            text={
              <div>
                The ability to replace components provides various ways to
                display contextual <CodeInline code="Appbar" type={'element'} />
                s. The following demonstrates how one might set up a full search
                bar. Click the back button to return to a regular
                <CodeInline code="Appbar" type={'element'} />, click the search
                icon to open the contextual search appbar.
              </div>
            }
          />
          <LiveEdit
            code={withSearchBarCode}
            scope={{ Appbar, IconButton, Searchbar }}
          />
        </Section>

        <Section
          name="Subtitle"
          href="/components/appbar#subtitle"
          id="subtitle">
          <ComponentDescription
            text={
              <div>
                Subtitles can be used on{' '}
                <CodeInline code="normal" type={'value'} /> or{' '}
                <CodeInline code="prominent" type={'value'} />{' '}
                <CodeInline code="barType" type={'prop'} />
                s, but not <CodeInline code="dense" type={'value'} />. Try
                changing
                <CodeInline code="barType" type={'prop'} /> to{' '}
                <CodeInline code="normal" type={'value'} /> to see how it will
                display
              </div>
            }
          />
          <LiveEdit code={withSubtitleCode} scope={{ Appbar, IconButton }} />
        </Section>

        <Section name="Custom" href="/components/appbar#custom" id="custom">
          <ComponentDescription
            text={
              <div>
                Adding <CodeInline code="children" type={'prop'} /> will replace
                all internal components with the provided components.
              </div>
            }
          />
          <LiveEdit
            noInline
            code={customCode}
            scope={{ Appbar, IconButton, Text, Button, View }}
          />
        </Section>
      </div>
    );
  }
}
