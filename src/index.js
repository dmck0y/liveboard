import React from 'react';
import { render } from 'react-dom';

const App = () => <div contentEditable>The App.</div>;

render(<App />, document.getElementById('app'));
