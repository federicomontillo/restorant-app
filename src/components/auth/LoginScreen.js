import React from 'react';



export const LoginScreen = () => {
    return (
    
            <div>
 
                <h3 className="auth__title">Login</h3>
                
                <form>
                    <input
                        type="text"
                        placeholder="Usuario"
                        name="usuario"
                        className="auth__input"
                    />

                    <input
                        type="password"
                        placeholder="Pasword"
                        name="password"
                        className="auth__input"
                    />
                    <div className="btn-end">
                        <button
                            type="submit"
                            className="btn btn-green"
                        >
                            Ingresar
                        </button>
                    </div>

                </form>

        </div>
        
    )
}
