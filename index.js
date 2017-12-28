import React from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'perfect-scrollbar';

import 'perfect-scrollbar/css/perfect-scrollbar.css';
import './style.css';

class Scrollbar extends React.Component {
  static propTypes = {
    options: PropTypes.object,
    innerRef: PropTypes.func,
    enable: PropTypes.bool,
  };

  static defaultProps = {
    options: {},
    innerRef: () => {},
    enable: true,
  };

  componentDidMount() {
    const { options, innerRef, enable } = this.props;

    if (enable) {
      this.initializeScrollbar();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { enable } = nextProps;

    if (enable !== this.props.enable) {
      if (enable) {
        this.initializeScrollbar();
      } else {
        this.destroyScrollbar();
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.ps) {
      this.ps.update();
    }
  }

  componentWillUnmount() {
    this.destroyScrollbar();
  }

  initializeScrollbar = () => {
    const { options, innerRef } = this.props;
    this.ps = new PerfectScrollbar(this.scrollbar, options);
    innerRef(this.ps);
  };

  destroyScrollbar = () => {
    if (this.ps) {
      this.ps.destroy();
      this.ps = null;
    }
  };

  render() {
    const { children, enable } = this.props;

    return (
      <div className="scrollbar-wrapper" ref={node => (this.scrollbar = node)}>
        <div className={`inner-content ${enable ? '' : 'normal'}`}>
          {children}
        </div>
      </div>
    );
  }
}

export default Scrollbar;
