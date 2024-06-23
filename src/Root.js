import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import About from './pages/about';
import Journal from './pages/journal';
import Usersettings from './pages/UserSettings';

const Root = () => {
    const [userInfo, setUserInfo] = useState(getData());
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);

    // saving data to local storage
    useEffect(() => {
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }, [userInfo]);

    const routes = [
        {
            path: "/",
            element: <App><About /></App>
        },
        {
            path: "journal",
            element: <App><Journal userInfo={userInfo} currentStep={currentStep}
                setCurrentStep={setCurrentStep} complete={complete} setComplete={setComplete} /></App>
        },
        {
            path: "setting",
            element: <App><Usersettings userInfo={userInfo} setUserInfo={setUserInfo} /></App>
        },
    ];

    return <RouterProvider router={createBrowserRouter(routes)} />;
};

// get data from local storage (user input)
const getData = () => {
    const data = localStorage.getItem('userInfo');
    return data ? JSON.parse(data) : [];
};

export default Root;