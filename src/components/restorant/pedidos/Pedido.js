import React from 'react'

export const Pedido = () => {
    return (
        

        <div className="pedidos__pedido">
            <h3>Mesa <span> 1</span></h3>
                <ul>
                    <li>Milanesa c/pure <span> $200</span></li>
                    <li>Milanesa c/pure <span> $200</span></li>
                    <li>Coca-Cola 2,25lts <span> $150</span></li>
                </ul>
            <h4>
                <i className="fas fa-money-check-alt"></i> Total: 
                <span> $550</span>
            </h4>

            <div className="pedidos__buttons">
                <div>    
                    <button className="btn btn-green ">
                        Aceptar Pedido
                    </button>
                </div>

                <div>    
                    <button className="btn btn-yellow">
                        Pedido Servido
                    </button>
                </div>

                <div>    
                    <button className="btn btn-red ">
                        Cerrar Mesa
                    </button>
                </div>
            </div>
        </div>        

        
    )
}
