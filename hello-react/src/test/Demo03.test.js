import React from 'react';
import ReactDOM from 'react-dom';
import Demo03 from '../components/Demo03';

it('renders ok', () => {
  const div = document.createElement('div');
  const NewContent = Demo03('aaa');
  ReactDOM.render(<NewContent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
