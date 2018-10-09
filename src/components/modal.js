import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log(this.props);
        if (this.props.isOpen === false) {
            return null;
        }
        
        const modalStyle = {
            position: 'absolute',
            width: '300px',
            height: '300px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '9999',
            background: '#fff'
        }

        const backdropStyle = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
            zIndex: '9998',
            background: 'rgba(0, 0, 0, 0.3)'
          }
        
        
        return (
            <div>
                <div style={modalStyle}>{this.props.children}</div>
             
                <div style={backdropStyle}></div>
            </div>
        )
    }
}

export default Modal;