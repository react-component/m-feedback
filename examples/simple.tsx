/* eslint-disable no-console */
/* tslint:disable:no-console */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TouchFeedback from '../src/index';
import './simple.less';

const TouchFeedbackDemo = () => (
  <TouchFeedback activeClassName="active" activeStyle={{ color: 'red' }}>
    <div className="normal" style={{
      backgroundColor: 'yellow',
    }}
    onClick={() => console.log('click div')}>click to active</div>
  </TouchFeedback>
);

ReactDOM.render(
  <div style={{ marginBottom: 12 }}>
    <TouchFeedbackDemo />
  </div>,
  document.getElementById('__react-content'),
);
