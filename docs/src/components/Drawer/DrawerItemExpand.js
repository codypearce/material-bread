import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListExpand } from '../../../../src';
import DrawerItem from './DrawerItem';

class DrawerItemExpand extends Component {
  static propTypes = {
    classes: PropTypes.object,
    label: PropTypes.string,
    selectItem: PropTypes.func,
    itemSelected: PropTypes.string,
    sectionExpanded: PropTypes.bool,
    markdownMenuItems: PropTypes.array,
    reactPageMenuItems: PropTypes.array,
  };
  state = {
    open: false,
  };

  componentDidMount() {
    if (this.props.sectionExpanded) {
      this.setState({ open: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.sectionExpanded && !prevProps.sectionExpanded) {
      this.setState({ open: true });
    }
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleSubItemClick = name => {
    const { selectItem } = this.props;
    selectItem(name);
  };

  renderMarkdownMenuItems() {
    const { markdownMenuItems, itemSelected } = this.props;
    if (!markdownMenuItems) return null;
    return markdownMenuItems.map(({ node: post }) => {
      return (
        <DrawerItem
          key={post.id}
          label={post.frontmatter.title}
          link={post.frontmatter.path}
          selected={post.frontmatter.title.toLowerCase() == itemSelected}
          selectItem={() => this.handleSubItemClick(post.title.toLowerCase())}
          subItem
        />
      );
    });
  }
  renderReactMenuItems() {
    const { reactPageMenuItems, itemSelected } = this.props;
    if (!reactPageMenuItems) return null;
    return reactPageMenuItems.map(post => {
      return (
        <DrawerItem
          key={post.title}
          label={post.title}
          link={post.path}
          selected={post.title.toLowerCase() == itemSelected}
          selectItem={() => this.handleSubItemClick(post.title.toLowerCase())}
          subItem
          subsubItem={post.subsubItem}
        />
      );
    });
  }
  render() {
    const { label } = this.props;

    return (
      <ListExpand
        title={label}
        titleStyle={{ fontSize: 11, fontWeight: '500' }}>
        {this.renderMarkdownMenuItems()}
        {this.renderReactMenuItems()}
      </ListExpand>
    );
  }
}

export default DrawerItemExpand;
