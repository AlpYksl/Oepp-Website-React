import React, { Component } from 'react'
import Cards from './UserContext/Cards';

export default class Home extends Component {
    render() {
        return (
            <div style={{marginBottom:100,marginTop:-10, paddingLeft:100,paddingTop:150}}>      
                <h2 style={{float:'left', paddingLeft:30,fontSize:'30px'}}><b> Newest games in our Storage</b></h2>
                <div className="btn-group-vertical col-md-8 align-right"  style={{float:'right', paddingRight:120}}>
                <button className="btn btn-primary"><h5>Make Your Own Game</h5></button>
                <button className="btn btn-danger"><h5>Update Your Existing Game</h5></button>
                </div>
                <Cards/>
            </div>
        )
    }
}
