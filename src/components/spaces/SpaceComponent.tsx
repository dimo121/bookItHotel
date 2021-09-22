import React from 'react';
import img from '../../assets/hotel.jpg'


interface IProps {
    spaceId: string;
    name: string;
    location: string;
    description: string;
    photoUrl?: string;
    reserveSpace: (spaceId: string) => void;
}

export class SpaceComponent extends React.Component<IProps,{}>{


    render(){
        return(
            <div className='space-component'>
                { this.props.photoUrl ? <img src={this.props.photoUrl} alt='' /> : <img src={img} alt='' style={{ width:'12em', height:'15em', borderRadius: '.5em'}} /> }<br/>
                <label>{this.props.name}</label><br/>
                <label >Description: {this.props.description}</label><br/>
                <label>Location: {this.props.location}</label><br/>
                <label>Price: {this.props.spaceId}</label><br/>
                <button onClick={() => this.props.reserveSpace(this.props.spaceId)}>Reserve</button>
                <br/>
            </div>
        )
    }
}