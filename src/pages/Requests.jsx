import React, {useEffect, useState} from 'react';
import RequestService from "../API/RequestService";
import RequestList from "../components/RequestList";

const Requests = () => {
    const [requests, setRequests] = useState([]);

    const fetchRequests = async () => {
        const response = await RequestService.getAll();
        console.log(response.data);
        setRequests(response.data);
    }

    const buffer = () => {
        fetchRequests();
    };

    useEffect(() => {
        buffer();
    }, []);


    return (
        <div>
            <h1>Запросы</h1>
            <RequestList requests={requests}/>
        </div>
    );
};

export default Requests;