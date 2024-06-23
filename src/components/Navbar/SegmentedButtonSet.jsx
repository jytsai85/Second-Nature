import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '@material/web/labs/segmentedbuttonset/outlined-segmented-button-set.js';
import '@material/web/labs/segmentedbutton/outlined-segmented-button.js'
import './SegmentedButtonSet.css'

const SegmentedButtonSet = () => {
    const currentLocation = useLocation();
    const segmentedButtonSetRef = useRef(null);

    useEffect(() => {
        const segmentedButtonSet = segmentedButtonSetRef.current;

        if (segmentedButtonSet) {
            const buttons = segmentedButtonSet.querySelectorAll('outline-segmented-button');
            buttons.forEach((button) => {
                button.classList.toggle('active', button.getAttribute('value') === currentLocation.pathname);
            });
        }
    }, [currentLocation]);

    return (
        <div className="SegmentedButtonSet">
            <outline-segmented-button-set ref={segmentedButtonSetRef}>
                <outline-segmented-button value="/">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                        <span className="material-icons">home</span>Home</NavLink></outline-segmented-button>
                <outline-segmented-button value="/journal">
                    <NavLink to="/journal" className={({ isActive }) => (isActive ? 'active' : '')}>
                        <span className="material-icons">edit_note</span>Journal</NavLink></outline-segmented-button>
                <outline-segmented-button value="/setting">
                    <NavLink to="/setting" className={({ isActive }) => (isActive ? 'active' : '')}>
                        <span className="material-icons">manage_accounts</span>Settings</NavLink></outline-segmented-button>
            </outline-segmented-button-set>
        </div>
    );
};

export default SegmentedButtonSet;