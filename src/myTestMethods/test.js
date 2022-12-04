import React from 'react';
import ReactDOM from 'react-dom/client';
import TestFun from "./TestFun";

const roottest = ReactDOM.createRoot(document.getElementById('roottest'));
roottest.render(
    <React.StrictMode>
        <TestFun />
    </React.StrictMode>
);

