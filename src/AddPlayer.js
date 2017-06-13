import React, {Component} from 'react';

class AddPlayer extends Component{


    render(){
        return(
            <div className='add_form'>
                <input onChange={ (e) => this.props.updateInput(e.target.value) }/>
                <button onClick={ this.props.add }>Add</button>
             </div>
        )
    }
}

export default AddPlayer