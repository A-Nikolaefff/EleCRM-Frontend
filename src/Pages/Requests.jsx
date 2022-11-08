import React, {useEffect, useRef, useState} from 'react';
import RequestService from "../API/RequestService";
import RequestList from "../Components/RequestList";
import {getPageCount} from "../Utils/pages";
import {useFetching} from "../Hooks/useFetching";
import {useObserver} from "../Hooks/useObserver";
import Loader from "../Components/UI/Loader";
import {LastElement} from "../Styles/components";
import Button from "../Components/UI/Button";
import Modal from "../Components/UI/Modal";
import RequestForm from "../Components/RequestForm";


const Requests = () => {
    const [requests, setRequests] = useState([]);
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1);
    const lastElement = useRef();

    let [fetchRequests, isRequestsLoading, requestError] = useFetching(async (limit, page) => {
        const response = await RequestService.getAll(limit, page);
        setRequests([...requests, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });

    let [addRequest, isRequestAdding, requestAddingError] = useFetching(async (createRequestDto) => {
        const response = await RequestService.Create(createRequestDto);
        setRequests([response.data, ...requests]);
    });

    useObserver(lastElement, page < totalPages, isRequestsLoading, () => {
        setPage(page + 1);
    });

    useEffect(() => {
        fetchRequests(limit, page);
    }, [limit, page]);

    const createRequest = (newRequest) => {
        addRequest(newRequest);
        setModal(false);
    }

    return (
        <div>
            <h1>Заявки</h1>
            <Button onClick={() => setModal(true)}>
                Добавить заявку
            </Button>
            <Modal visible={modal} setVisible={setModal}>
                <RequestForm create={createRequest}/>
            </Modal>


            {requestError &&
                <h1>Произошла ошибка ${requestError}</h1>}
            <RequestList requests={requests}/>
            <LastElement ref={lastElement}/>
            {(isRequestsLoading || isRequestAdding) &&
                <Loader/>
            }
        </div>
    );
};

export default Requests;