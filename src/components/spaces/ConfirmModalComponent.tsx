import React from 'react';
import './ConfirmModal.css';

interface IModalProps {
    show: boolean;
    content: string;
    close: () => void;
}

export class ConfirmModalComponent extends React.Component<IModalProps,{}>{

    render(){
        if (!this.props.show) {
            return null
        } else {
            return (
                <div className='modal'>
                    <div className='modal-content'>
                        <h2> You tried to reserve :</h2>
                        <h3 className='modalText'>{this.props.content}</h3>
                        <button onClick={() => this.props.close()}>Ok, Close me</button>
                    </div>
                </div>
            )
        }
    }


}