import React from 'react';
import ReactDOM from 'react-dom';
import Demo04 from '../components/Demo04';

it('renders ok', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Demo04 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
