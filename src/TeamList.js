import React, {Component} from 'react';

class TeamList extends Component{

    constructor(){
        super();

        this.state = {

        }
    }

    render(){
        return (
            <ul className='list1'>
            {
                this.props.teamRoster.map( (playerName) => {
                return <li>{ playerName }</li>
                })
            }
            </ul>
        );
    }
}

export default TeamList
