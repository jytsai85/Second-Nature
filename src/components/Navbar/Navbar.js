import { React, useState } from 'react';
import './navbar.css'
import SegmentedButtonSet from './SegmentedButtonSet';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Blog = () => <div>Blog Page</div>;

const Navbar = () => {
    return (
        <div className='Navbar'>
            <h1 id="title">Second <span className="decorate-type-1">N</span><span className="decorate-type-2">ature</span></h1>
            <div className="menu-buttons">
            <SegmentedButtonSet />
            </div>
        </div>
    )
}
export default Navbar;