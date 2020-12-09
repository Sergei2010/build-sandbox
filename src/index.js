import React from 'react';
import ReactDom from 'react-dom';
import css from './main.scss';

const App = () => <p>This is Webpack React App</p>;

ReactDom.render(<App />,
    document.getElementById('root'));