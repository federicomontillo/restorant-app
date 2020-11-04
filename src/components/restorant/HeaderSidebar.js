import React from 'react';
import RestorantLogoBlack from '../../img/RestorantLogoBlack.png';

export const HeaderSidebar = () => {
    return (
        
            
        <div className="journal__sidebar-navbar">
            <img className="journal__logo mt-5" src={RestorantLogoBlack} alt="Logo"/>
            <hr/>
            <h3>
                <i className="far fa-user"></i>
                <span> Federico</span>
            </h3>
        </div>
        
    )
}
