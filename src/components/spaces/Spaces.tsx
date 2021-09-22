import React from 'react';
import { DataService } from '../../services/DataService';
import { SpaceComponent } from './SpaceComponent'; 
import { Space } from '../../model/Model';
import './Spaces.css';
import { ConfirmModalComponent } from './ConfirmModalComponent';
import { Link } from 'react-router-dom';


interface ISpacesState{
    spaces: Space[]| undefined;
    showModal: boolean;
    modalContent: string;
}

interface ISpacesProps {
    dataService: DataService;
}


export class Spaces extends React.Component<ISpacesProps,ISpacesState> {

    constructor(props:ISpacesProps){
        super(props);

        this.state = {
            spaces: [],
            showModal: false,
            modalContent: ''
        }

        this.reserveSpace = this.reserveSpace.bind(this)
        this.renderSpaces = this.renderSpaces.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    async componentDidMount(){
        const spaces = await this.props.dataService.getSpaces();
        console.log(spaces);
        this.setState({
            spaces: spaces
        })
    }

    private async reserveSpace(spaceId: string){
        const reservationResult = await this.props.dataService.reserveSpace(spaceId)
        if(reservationResult){
            this.setState({
                showModal: true,
                modalContent: `You reserved the space with id ${spaceId} and reservation number ${reservationResult}`
            });
        } else {
            this.setState({
                showModal: true,
                modalContent: `You can't reserve the space with id ${spaceId}`
            });
        }
    }

    private renderSpaces(){
        const rows:any[] = []

        this.state.spaces?.forEach((space,idx) => 
            rows.push(<SpaceComponent 
                key={idx}
                location={space.location}
                name={space.name}
                description={space.description}
                spaceId={space.spaceId}
                reserveSpace = {this.reserveSpace}
            />)
        )

        return rows;
    }

    private closeModal(){
        this.setState({
            showModal: false,
            modalContent: ''
        })
    }

    render(){
        return (
            <div>
                <h2>Welcome to the Spaces page!</h2>
                <Link to="/createSpace">Create space</Link><br/>
                <div className='spaces-container'>
                    {this.renderSpaces()}
                </div>
                <ConfirmModalComponent 
                    show={this.state.showModal} 
                    content={this.state.modalContent} 
                    close={this.closeModal}
                />
            </div>
        )
    }
}