import React from 'react';
import Articles from '../../../api/articles/collection';
import moment from 'moment';

export default class ArticlesListItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="item">
                <h2>{this.props.title}</h2>
                <p>Description: {this.props.description}</p>
                <p>Number of rooms: {this.props.typeOfApartment} rooms</p>
                <p>Address: {this.props.address}</p>
                <p>Phone Number: {this.props.phoneNumber}</p>
                <p>Price: {this.props.price} EUR</p>
                <p>Posted at: {moment(this.props.createdAt).format("MMM Do YY")}</p>
            </div>
        )
    }
}