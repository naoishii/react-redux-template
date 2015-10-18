import react from 'react';
import { render } from 'react-dom';

import Hello from './components/Hello';

(function () {
    const hello = new Hello('HELLO!');

    console.log(hello.message);
})();

render(
    react.createElement('h1', null, 'Hello, world!'),
    document.getElementById('example')
);
