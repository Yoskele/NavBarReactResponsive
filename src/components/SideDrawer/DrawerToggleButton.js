import React from 'react';
import './DrawerToggleButton.css';

const drawerToggleButton = props => (
    <button className="toogle_button" onClick={props.click}>
        <div className="toogle_button_line"></div>
        <div className="toogle_button_line"></div>
        <div className="toogle_button_line"></div>
    </button>
);

export default drawerToggleButton;