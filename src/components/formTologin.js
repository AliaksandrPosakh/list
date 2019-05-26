import React, {Component} from  'react';
class FormToLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    render() {
        return(
            <div className=''>
                <input type='text' onChange={this.handleChange} value={this.state.text} placeholder='insert name'/>
                <button>login</button>
                <button>registration</button>
            </div>
        )
    }
}
export default FormToLogin;