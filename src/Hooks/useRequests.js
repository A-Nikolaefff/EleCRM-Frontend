import {useMemo} from "react";

export const useRequests = (requests,  query) => {

    const searchedRequests = useMemo(() => {
        return requests.filter(request => request.note.toLowerCase().includes(query))
    }, [query, requests])

    return searchedRequests;
}