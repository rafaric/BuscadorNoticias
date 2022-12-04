import React from 'react';
import './error404.css'

const Error404 = () => {
    return (
            <div id='oopss'>
                <div id='error-text'>
                    <span>404</span>
                    <p>PAGINA NO ENCONTRADA</p>
                    <p className='hmpg'><a href='http://localhost:3000/' className="back">Volver Al Inicio</a></p>
                </div>
            </div>
    );
}

export default Error404;
