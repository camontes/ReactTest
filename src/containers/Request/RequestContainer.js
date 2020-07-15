import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Request from '../../components/Request/Request'
import { createRequest,unmountRequest } from '../../actions/request'

const RequestContainer = ({ currency, criptoCurrency, value, result }) => {
    const dispatch = useDispatch();

    useEffect(() => {

        // returned function will be called on component unmount 
        return () => {
            dispatch(unmountRequest());
        }
    }, [])

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