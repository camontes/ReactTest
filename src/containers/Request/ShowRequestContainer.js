import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getRequest } from '../../selectors/index'
import { unmountRequest } from '../../actions/request'
import ShowRequest from '../../components/Request/ShowRequest'

const ShowRequestContainer = () => {
    const request = useSelector(getRequest);
    const dispatch = useDispatch();

    useEffect(() => {
        // returned function will be called on component unmount 
        return () => {
            dispatch(unmountRequest());
        }
    }, [dispatch])

    return(
        <ShowRequest
            request = {request}
        />
    )
}

export default ShowRequestContainer;
