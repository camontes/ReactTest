import React from 'react'
import RequestContainer from '../../containers/Request/RequestContainer'

const RequestPage = (props) => {

    return(
        <RequestContainer
            currency = {props.match.params.currency}
            criptoCurrency = {props.match.params.criptoCurrency}
            value = {props.match.params.value}
            result = {props.match.params.result}
        />
    )
}

export default RequestPage;