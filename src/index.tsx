import './index.css';
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./p1-main/m1-ui/u1-app/App";
import {Provider} from "react-redux";
import store from "./p2-homeworks/h10/bll/store";
const root = createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
);
/*
reportWebVitals();*/
