import React from 'react';
import Sidebar from './../Sidebar/Sidebar';
import '../css/style.css';

export default function Home({ id }) {
    return (
        <div className='sidebar d-flex'>
        <Sidebar id={id} />
        </div>
    )
};