import React, {useEffect, useRef, useState} from 'react';
import RequestService from "../API/RequestService";
import RequestList from "../Components/RequestList";
import {getPageCount} from "../Utils/pages";
import {useFetching} from "../Hooks/useFetching";
import {useObserver} from "../Hooks/useObserver";
import Loader from "../Components/UI/Loader/Loader";
import LoaderWrapper from "../Components/UI/Loader/LoaderWrapper";
import {LastElement} from "../Styles/components";

const Requests = () => {
    const [requests, setRequests] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1);
    const lastElement = useRef();

    const [fetchRequests, isRequestsLoading, requestError] = useFetching(async (limit, page) => {
        const response = await RequestService.getAll(limit, page);
        setRequests([...requests, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });

    useObserver(lastElement, page < totalPages, isRequestsLoading, () => {
        setPage(page + 1);
    });

    useEffect(() => {
        fetchRequests(limit, page);
    }, [limit, page]);

    return (
        <div>
            <h1>Запросы</h1>
            {requestError &&
                <h1>Произошла ошибка ${requestError}</h1>}
            <RequestList requests={requests}/>
            <LastElement ref={lastElement}/>
            {isRequestsLoading &&
                <LoaderWrapper>
                    <Loader/>
                </LoaderWrapper>
            }
        </div>
    );
};

export default Requests;