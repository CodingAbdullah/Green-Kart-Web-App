import React, { Component } from 'react';
import './shoprecord.css';

class ShopRecord extends Component  {

    constructor(props){
        super(props);

        this.state = {
            user : {}
        }
    }

    componentDidMount(){
        const options = {
            headers : {
                "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuZXdVc2VyIjp7Il9pZCI6IjVmMGI0ZDNiMGE3MGU3MTQ1ZDk3NTM5ZSIsImZpcnN0X25hbWUiOiJBYmR1bCIsImxhc3RfbmFtZSI6Ik11aGFtbWFkIiwiYWdlIjoyNCwiZW1haWwiOiJ0ZWxsbmV0QHRlbG5ldC5jYSIsInBhc3N3b3JkIjoiJDJiJDEwJDVTNVY2a0ZFUXFqTTg0SFZ3VGlEVXVuZ3BMUVhpUm16N3c4TFRHN0pJUzlydHdPQlBXeVBHIiwiYWRkcmVzcyI6IjMgTWFpbiBTdHJlZXQiLCJnZW5kZXIiOiJtYWxlIn0sImlhdCI6MTU5NDU3NjE4NywiZXhwIjoxNTk0NTc5Nzg3fQ.Tr8THVtB1LFwmMSd09AWlvJiNtrURJjnFovnVoCanLc"
            }
        }
        fetch("http://localhost:5050/auth", options).then(response => response.json()).then(result => {
            this.setState({user: result.user})
        }).catch(err => console.log(err));
    }

    render(){
        return (
            <div className="shoprecord">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{this.state.user.first_name}</td>
                            <td>{this.state.user.last_name}</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>{this.state.user.age}</td>
                            <td>{this.state.user.email}</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">{this.state.user.gender}</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ShopRecord;