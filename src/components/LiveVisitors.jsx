import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios'
import CustomScroll from 'react-customscroll'

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
            <div className="live-block p-5 mt-2">
                <h4 className="live-title">Live Visitors</h4>
                <CustomScroll style={{right:'0'}} scrollAreaColor="rgba(127, 255, 0, .2)" scrollWidth="10px" scrollBarRadius="20px" scrollBarColor="rgba(127, 255, 0, .3)">
                    <Table size='sm'>
                        <tbody>
                            {this.renderTableBody()}
                        </tbody>
                    </Table>
                </CustomScroll>
            </div>
            // </React.Fragment>
            
        )
    }
}

export default LiveVisitors;