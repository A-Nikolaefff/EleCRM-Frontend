import React, {useEffect, useRef, useState} from 'react';
import RequestService from "../API/RequestService";
import {getPageCount} from "../Utils/pages";
import {useFetching} from "../Hooks/useFetching";
import {useObserver} from "../Hooks/useObserver";
import Loader from "../Components/UI/Loader";
import {LastElement} from "../Styles/components";
import RequestForm from "../Components/RequestForm";
import CreateRequestModal from "../Components/UI/CreateRequestModal";
import RequestTable from "../Components/Tables/RequestTable";

const Requests = () => {
    const [requests, setRequests] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1);
    const lastElement = useRef();

    const [modalVisible, setModalVisible] = useState(false);

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
        setModalVisible(false);
    }

    return (
        <div>
            <h1>Заявки</h1>

            <CreateRequestModal visible={modalVisible} setVisible={setModalVisible}>
                <RequestForm create={createRequest}/>
            </CreateRequestModal>

            {requestError &&
                <h1>Произошла ошибка ${requestError}</h1>}

            <RequestTable requests={requests}/>
            <LastElement ref={lastElement}/>
            {(isRequestsLoading || isRequestAdding) &&
                <Loader/>
            }
        </div>
    );
};

export default Requests;