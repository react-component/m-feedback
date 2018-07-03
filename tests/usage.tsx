import expect from 'expect.js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import TouchFeedback from '../src/TouchFeedback';

/* global Hammer */
describe('simple', () => {
  let div;

  before(() => {
    div = document.createElement('div');
    div.style.width = '320px';
    document.body.insertBefore(div, document.body.firstChild);
  });

  after(() => {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  });

  it('works ok', (done) => {
    const instance = ReactDOM.render(
      <TouchFeedback activeClassName="active" activeStyle={{ color: 'red' }}>
        <div style={{ color: '#000'}} className="normal">click to acitve</div>
      </TouchFeedback>
      , div,
    );
    const domEl = ReactDOM.findDOMNode(instance);
    TestUtils.Simulate.mouseDown(domEl);
    expect(domEl.style.color).to.be('red');
    expect(window.getComputedStyle(domEl).fontSize).to.be('40px');
    TestUtils.Simulate.mouseUp(domEl);
    expect(window.getComputedStyle(domEl).color).to.be('rgb(0, 0, 0)');
    expect(window.getComputedStyle(domEl).fontSize).to.be('12px');
    done();
  });

  it('active style false', (done) => {
    const instance = ReactDOM.render(
      <TouchFeedback activeClassName="active" activeStyle={false}>
        <div style={{ color: '#000'}} className="normal">click to acitve</div>
      </TouchFeedback>
      , div,
    );
    const domEl = ReactDOM.findDOMNode(instance);
    TestUtils.Simulate.mouseDown(domEl);
    expect(domEl.getAttribute('class').indexOf('active')).to.be(-1);
    done();
  });
});
