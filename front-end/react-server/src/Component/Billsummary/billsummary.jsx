import React, { Component } from 'react';
import axios from 'axios';

class BillSummary extends Component {

    constructor(props){
        super(props);

        this.state = {
            itemList: this.props.location.state
        }
    }
    
 /*   componentDidMount(){
        axios.get("http://localhost:5050/")
    }*/

    render() {
        return (
            <div className="billTable">
                {this.props.location.state}
            </div>
        )
    }

}

export default BillSummary;