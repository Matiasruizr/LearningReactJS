import React from 'react';
import logo from '../../../images/logo.png'
import './related.css';

function Related(props){
    return(
        <div className="Related">
            <img src={logo} width={250} alt="" />
            <ul>
                <li>Hola</li>
            </ul>
        </div>
    )
}

export default Related;