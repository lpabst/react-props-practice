import React, {Component} from 'react';

class AddPlayer extends Component{


    render(){
        return(
            <div className='add_form'>
                <input />
                <button onClick={ this.props.add }>Add</button>
             </div>
        )
    }
}

export default AddPlayer