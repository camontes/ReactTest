import React from 'react'
import RequestContainer from '../../containers/Request/RequestContainer'

const RequestPage = (props) => {

    return (
        <div className="container" style = {{marginTop: '30px'}}>
            <RequestContainer
                currency={props.match.params.currency}
                criptoCurrency={props.match.params.criptoCurrency}
                value={props.match.params.value}
                result={props.match.params.result}
            />
        </div>
    )
}

export default RequestPage;