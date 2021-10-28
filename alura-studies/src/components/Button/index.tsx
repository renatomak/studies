import React from 'react';
import style from  './Button.style.module.scss'

class Button extends React.Component {
    render() {
        return (
           <button className={style.button}>
               {this.props.children}
           </button> 
        );
    }
}

export default Button;