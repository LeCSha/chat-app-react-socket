import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios'

import socketClient from "socket.io-client"

//connect to server client side
const socket = socketClient("http://localhost:5000")

class LiveVisitors extends Component {
    
    state = {
        visitors:[]
    }
    
    //get user header
    UNSAFE_componentWillMount(){
        axios.get("http://geoplugin.net/json.gp").then(res => {
            const {
                geoplugin_request, 
                geoplugin_countryName,
                geoplugin_countryCode,
                geoplugin_city
            } = res.data;

            const visitor = {
                ip : geoplugin_request,
                countryCode : geoplugin_countryCode,
                country : geoplugin_countryName,
                city : geoplugin_city
            };
            socket.emit("new_visitor", visitor)
            socket.on("visitors", visitors => {
                console.log('in visitors', visitors)
                this.setState({
                    visitors: visitors
                })
            })
        })
    }

    getCountryFlag = (countryCode) => `https://www.countryflags.io/${ countryCode }/shiny/24.png`

    renderTableBody = () => {
        const { visitors } = this.state;
        console.log(visitors)
        return visitors.map((v, index) => {
            if (!v) return null
            return (
                <tr key={index}>
                    <td>{v.username}</td>
                    <td><img src={this.getCountryFlag(v.countryCode)}/></td>
                    <td>{v.country}</td>
                    <td>{v.city}</td>
                </tr>
            )
        })
    }
    render(){
        return (
            <React.Fragment>
                <h2>Live Visitors</h2>
                <Table size='sm'>
                    {/* <thead>
                        <tr>
                            <th></th>
                            <th>Country</th>
                            <th>City</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {this.renderTableBody()}
                    </tbody>
                </Table>
            </React.Fragment>
            
        )
    }
}

export default LiveVisitors;