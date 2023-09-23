import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './RoseCard.css';

export class RoseCard extends Component {
    render() {
        let { title, description, imageUrl, priCe } = this.props
        return (
            <>
                <div className="R1">
                    <div className="R2">
                        <img className="R3"
                            src={imageUrl} alt="" />
                    </div>
                    <div className="R4">{title}</div>
                    <div className="R5">{description}</div>
                    <div className="R6">
                        <div className="R7">{priCe}</div>
                        <Link className="R8" to="/rosecart" target='blank'>PURCHASE</Link>
                    </div>
                </div>
            </>
        )
    }
}

export default RoseCard
