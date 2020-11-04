import React from 'react';
//import { MenuPrincipal } from './menu/MenuPrincipal';
import { Pedidos } from './pedidos/Pedidos';

import { Sidebar } from './Sidebar';


export const RestPrincipal = () => {
     return (
         <div className="restorant__main-content">
            
             <Sidebar />

             <main>
                 
                 <Pedidos />

             </main>
         </div>
     )
}
