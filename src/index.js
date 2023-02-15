import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from 'react-dom/client'
import { store } from './app/store';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById("root"));
root.render(

    <Provider store={store}>
      <App />
    </Provider>
);

// npx npm-merge-driver install --global  
//the above stuff helped me to resolve the dependency issues 

