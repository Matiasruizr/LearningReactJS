import React, { PureComponent } from'react';
import PropTypes from 'prop-types';
import './media.css';


class Media extends PureComponent {
    constructor(props){ // Esta clase se llama cuando se renderiza el elemento "Media", esta manera se utilizaba en EC6, es bueno considerarla
      super(props);   // Permitimos utilizar las propiedades
      this.handleClick = this.handleClick.bind(this); // Permitimos utilizar las propiedades para el evento
    }
    handleClick(event){ 
        this.setState({
            autor: 'Matias Ruiz'
        });
    }

    render(){
        
        return(
            <div className="Media" onClick={this.handleClick}>
               <img 
               src={this.props.cover} 
               alt="" 
               width={250} 
               height={150} 
               className="Media-cover" />
               <h3 className="Media-title">{this.props.title}</h3>
               <p className="Media-author">{this.props.author}</p>
            </div>
        )
    }
    
}

Media.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video','audio']),
}
export default Media;