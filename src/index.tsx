import React from 'react';
import App from './app';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root'); // must match index.html
const root = createRoot(container);
root.render(<App/>);