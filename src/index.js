import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './app';
import './style.css'

const rootElement = document.getElementById('webpack-demo');
const root = createRoot(rootElement);
root.render(<App />);