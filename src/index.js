import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './pages/about';
import Journal from './pages/journal.js';
import Usersettings from './pages/UserSettings';
import Root from './Root.js';
import reportWebVitals from './reportWebVitals';
import './index.css';
import '@material/web/button/filled-button.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "journal",
    element: <Journal />,
  },
  {
    path: "setting",
    element: <Usersettings />,
  },
]);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
