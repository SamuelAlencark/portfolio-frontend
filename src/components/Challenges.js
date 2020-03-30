import React, { Component } from 'react'
import Fade from "react-reveal/Fade";
import Table from "./Table";
import GeneralApiService from "../apiServices/GeneralApiService"

class Challenges extends Component {
    constructor(props) {
        super(props);

        this.state = {
            challenges: []
        };


    };


    componentDidMount() {

        GeneralApiService.getChallenges().then((res) => {
            this.setState({ challenges: res })
        })

    }


    render() {
        return (
            <div className='challenges'>
                <h1 className='heading'>
                    <Fade bottom cascade>Challenges: </Fade></h1>
                <div className='challenges-content'>
                    <Table challenges={this.state.challenges}></Table>
                </div>
            </div>
        )
    }
}

export default Challenges;