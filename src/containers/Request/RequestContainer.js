import React from 'react'
import { useDispatch } from 'react-redux';
import Request from '../../components/Request/Request'
import { createRequest } from '../../actions/request'

const RequestContainer = ({ currency, criptoCurrency, value, result }) => {
    const dispatch = useDispatch();

    const onclickSubmitRequest = (formValues) => {
        dispatch(createRequest(formValues));
    }
    return (
        <Request
            currency={currency}
            criptoCurrency={criptoCurrency}
            value={value}
            result={result}
            onclickSubmitRequest={onclickSubmitRequest}
        />
    )
}

export default RequestContainer;