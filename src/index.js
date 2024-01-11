import React from 'react';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';
import App from './App';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import {ThemeProvider} from "@aws-amplify/ui-react";
import {AmplifyProvider} from "@aws-amplify/ui-react";  //old
import amplifyconfig from './amplifyconfiguration.json';
import "@aws-amplify/ui-react/styles.css";
import {studioTheme} from './ui-components';

Amplify.configure(awsConfig);

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={studioTheme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
    
);