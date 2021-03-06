import { NativeMethodsDecorator } from '../../modules/NativeMethodsMixin'
import React, { Component, PropTypes } from 'react'
import ScrollView from '../ScrollView'

@NativeMethodsDecorator
export default class ListView extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: ScrollView.propTypes.style
  };

  static defaultProps = {
    style: {}
  };

  render() {
    return (
      <ScrollView {...this.props} />
    )
  }
}
