import React, { Component } from 'react';

import './FullBanner.css';

class FullBanner extends Component {
  render() {
    return (
        <div className="FullBanner">
          <h1 className="FullBannerTitle">{this.props.title}</h1>
        </div>
    );
  }
};

export default FullBanner;
