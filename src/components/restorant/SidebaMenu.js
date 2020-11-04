import React from 'react'

export const SidebaMenu = () => {
    return (
        <div className="journal__menu">
                <ul>
                    <li> 
                        <i className="fas fa-concierge-bell"></i> Pedidos 
                        <span> (3) </span>
                    </li>
                    <hr/>    
                    <li>
                        <i className="fas fa-book-open"></i> Menu
                    </li>
                    <hr/>
                    <li>
                    <i className="fas fa-cog"></i> Configuracion
                    </li>
                </ul>
            </div>
    )
}
