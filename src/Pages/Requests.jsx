import React, {useEffect, useRef, useState} from 'react';
import RequestService from "../API/RequestService";
import {LastElement} from "../Styles/basicComponents";
import {useFetching} from "../Hooks/useFetching";
import {useObserver} from "../Hooks/useObserver";
import Loader from "../Components/UI/Loader";
import {getPageCount} from "../Utils/pages";
import CreateRequestForm from "../Components/Forms/CreateRequestForm";
import ButtonModal from "../Components/Modals/ButtonModal";
import RequestTable from "../Components/Tables/RequestTable";

const Requests = () => {
    const [localRequests, setLocalRequests] = useState([]);

    const [totalPages, setTotalPages] = useState(0);
    const [entriesPerPage, setEntriesPerPage] = useState(20);
    const [page, setPage] = useState(1);
    const lastElement = useRef();

    const [creatingModalVisible, setCreatingModalVisible] = useState(false);

    let [fetchRequests, isRequestsLoading, requestError] = useFetching(async (entriesPerPage, page) => {
        const response = await RequestService.getAll(entriesPerPage, page);
        setLocalRequests([...localRequests, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, entriesPerPage));
    });

    let [addRequest, isRequestAdding, requestAddingError] = useFetching(async (createRequestDto) => {
        const response = await RequestService.Create(createRequestDto);
        setLocalRequests([response.data, ...localRequests]);
    });

    let [updateRequest, isRequestUpdating, requestUpdatingError] = useFetching(async (updateRequestDto, editingRowIndex) => {
        const response = await RequestService.Update(updateRequestDto);
        setLocalRequests([...localRequests.slice(0, editingRowIndex), response.data, ...localRequests.slice(editingRowIndex + 1)]);
    });

    let [removeRequest, isRequestRemoving, requestRemovingError] = useFetching(async (id, editingRowIndex) => {
        const response = await RequestService.Delete(id);
        setLocalRequests([...localRequests.slice(0, editingRowIndex), ...localRequests.slice(editingRowIndex + 1)]);
    });

    useObserver(lastElement, page < totalPages, isRequestsLoading, () => {
        setPage(page + 1);
    });

    useEffect(() => {
        fetchRequests(entriesPerPage, page);
    }, [entriesPerPage, page]);

    const createRequest = (newRequest) => {
        addRequest(newRequest);
        setCreatingModalVisible(false);
    }

    return (
        <div>
            <h1>Заявки</h1>
            <ButtonModal
                visible={creatingModalVisible}
                setVisible={setCreatingModalVisible}
                buttonText="Добавить заявку"
            >
                <h2 id="modal-title">Создание новой заявки</h2>
                <CreateRequestForm
                    create={createRequest}
                    setModalVisible={setCreatingModalVisible}
                />
            </ButtonModal>

            {requestError &&
                <h1>Произошла ошибка ${requestError}</h1>}

            <RequestTable requests={localRequests} update={updateRequest} remove={removeRequest}/>

            <LastElement ref={lastElement}/>
            {(isRequestsLoading || isRequestAdding || isRequestUpdating || isRequestRemoving) &&
                <Loader/>
            }
        </div>
    );
};

export default Requests;