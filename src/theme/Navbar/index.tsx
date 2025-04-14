import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
 
export default function NavbarWrapper(props) {
  return (
    <div className='headerbod'>
        <div className="container">
        <OriginalNavbar {...props} />
        </div>
    </div>
  );
}