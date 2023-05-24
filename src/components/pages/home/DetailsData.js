import { Component } from 'react';

import './Details.css';

class DetailsData extends Component{
    render(){
        return(
            <div className={this.props.cName}>
                <div className="details-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="details-image">
                    <img alt="img" src={this.props.image2} />
                    <img alt="img" src={this.props.image3} />
                </div>
            </div>
        );
    }
}

export default DetailsData;