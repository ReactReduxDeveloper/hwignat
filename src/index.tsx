import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./p1-main/m1-ui/u1-app/App";

import {createRoot} from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App/>);
