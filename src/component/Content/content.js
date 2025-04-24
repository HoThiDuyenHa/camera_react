import React, { Component } from 'react';
import RightContent from './RightContent';
import LeftContent from './LeftContent';
import RightContentClass from './RightContentclass';
class Content extends Component {
    render() {
        return (
            <div id="content">
              <LeftContent></LeftContent>
              <RightContent></RightContent>
              {/* <RightContentClass></RightContentClass> */}
              </div>
        );
    }
}

export default Content;