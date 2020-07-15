import React from 'react'
import { Link } from 'react-router-dom'

const ShowRequest = ({ request }) => {

    console.log(request.name);
    const renderData = () => {
        if (!request) {
            return (
                <div>
                    Loading.....
                </div>
            )
        }
        return (
            <div>
                <p>{request.currency}</p>
                <p>{request.criptoCurrency}</p>
                <p>{request.value}</p>
                <p>{request.name}</p>
                <p>{request.age}</p>
                <p>{request.result}</p>
                <Link to = "/" className = "btn btn-primary">Home</Link>
            </div>
        )
    }
    return (
        <div>
            {renderData()}
        </div>
    )
}

export default ShowRequest;