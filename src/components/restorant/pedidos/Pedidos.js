import React from 'react';
import { Pedido } from './Pedido';

export const Pedidos = () => {
    return (
        <div>

            <h2 className="pedidos__titulo">Pedidos:</h2>

                <div className="pedidos__grid-pedidos">
                    
                    <Pedido />
                    <Pedido />
                    <Pedido />

                </div>
        </div>
        
    )
}
