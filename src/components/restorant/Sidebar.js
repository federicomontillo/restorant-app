import React from 'react';
import { HeaderSidebar } from './HeaderSidebar';
import { SidebaMenu } from './SidebaMenu';


export const Sidebar = () => {
    return (
        <>
        <aside className="journal__sidebar">

            <HeaderSidebar />

            <SidebaMenu />

            <div className="restorant__boton-logout">
                <button className="btn btn-red ">
                    Cerrar Sesion
                </button>
            </div>
        </aside>
        </>
    )
}
